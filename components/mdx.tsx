import React, { Children } from "react"
import { remarkSimpleEmoji } from "@khinshankhan/emoji-helper-remark"
import type { MDXComponents } from "mdx/types"
import { MDXRemote } from "next-mdx-remote/rsc"
import { filter, onlyText } from "react-children-utilities"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import { highlight } from "sugar-high"
import { EmojiKey, emojiLookup } from "@/lib/emoji"
import { remarkMarkFirstParagraph } from "@/lib/mdx-plugins/remark-excerpt"
import { remarkJsxifyElements, type MdastNode } from "@/lib/mdx-plugins/remark-jsxify-elements"
import { cn } from "@/lib/utils"
import { Callout, isCalloutKeyword } from "@/components/blocks/callout"
import { Emoji } from "@/components/emoji"
import { Blockquote } from "@/components/primitives/components"
import { SmartImage } from "@/components/primitives/image"
import { Link } from "@/components/primitives/link"
import { ScrollArea, ScrollBar } from "@/components/primitives/scroll-area"
import { typographyVariants } from "@/components/primitives/typography"
import { Video } from "@/components/primitives/video"

// match blockquotes `> [!variant] heading`
const mdxBlockquoteMetaRegex = /\[!([^\]]+)\]\s*(.*)/

function getBlockquoteInfo(children: React.ReactNode[]) {
  const noMatch = { variant: undefined, heading: undefined, children }
  if (!children?.length || children.length < 1) {
    return noMatch
  }

  const text = onlyText(children[0]).trim()
  const match = mdxBlockquoteMetaRegex.exec(text)
  if (!match) {
    return noMatch
  }

  return {
    variant: match?.[1]?.toLowerCase(),
    heading: match?.[2] || undefined,
    // exclude the first child for callout since it has variant/ heading info
    children: children.slice(1),
  }
}

interface PreProps extends React.ComponentPropsWithoutRef<"pre"> {}
const Pre = React.forwardRef<HTMLPreElement, PreProps>(function Pre(
  { className, children, ...props },
  forwardedRef
) {
  return (
    <div role="presentation" className="relative flex w-full items-start justify-center">
      <ScrollArea className="mb-0.5 block h-full w-full rounded-lg bg-muted" type="auto">
        <pre
          ref={forwardedRef}
          className="h-full
w-full whitespace-pre rounded-lg bg-muted px-4 pb-6 pt-3 text-muted-foreground [&>code]:contents"
          {...props}
        >
          {children}
        </pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
})
Pre.displayName = "CodeBlock.Pre"

interface CodeProps extends React.ComponentPropsWithoutRef<"code"> {
  children: string
}
const Code = React.forwardRef<HTMLElement, CodeProps>(function Code(
  { className, children, ...props },
  forwardedRef
) {
  const codeHTML = highlight(children)

  return (
    <code
      ref={forwardedRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      className={cn("rounded-lg bg-muted px-1 py-0.5 text-muted-foreground", className)}
      {...props}
    />
  )
})
Code.displayName = "CodeBlock.Code"

const baseComponents: MDXComponents = {
  a: ({ href = "#", children = null, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  h3: ({ className = "", ...props }) => (
    <h3 {...props} className={cn(typographyVariants({ variant: "h3", className }))} />
  ),
  h4: ({ className = "", ...props }) => (
    <h4 {...props} className={cn(typographyVariants({ variant: "h4", className }))} />
  ),
  h5: ({ className = "", ...props }) => (
    <h5 {...props} className={cn(typographyVariants({ variant: "h5", className }))} />
  ),
  h6: ({ className = "", ...props }) => (
    <h6 {...props} className={cn(typographyVariants({ variant: "h6", className }))} />
  ),
  blockquote: (props) => {
    // blockquote seems to interweave newlines which mess with interpretting variants
    // though the newline between the meta and actual quotation is necessary
    const givenChildren = filter(Children.toArray(props.children), (child) => child !== "\n")
    const { variant, heading, children } = getBlockquoteInfo(givenChildren)

    if (variant && isCalloutKeyword(variant)) {
      return (
        <Callout variant={variant} heading={heading}>
          <blockquote {...props} data-variant={variant} className="italic">
            {children}
          </blockquote>
        </Callout>
      )
    }

    const blockquoteVariant = variant ?? "blockquote"
    return (
      <Blockquote {...props} data-variant={blockquoteVariant} variant={blockquoteVariant}>
        {children}
      </Blockquote>
    )
  },
  pre: Pre,
  // @ts-ignore: not getting into the weeds of this
  code: Code,
  // @ts-expect-error: all the props are probably compatible, we'll burn that bridge when we get there
  img: SmartImage,
}

const customComponents: MDXComponents = {
  Emoji,
  SmartImage,
  Video,
}

export function MDXContent({
  source,
  components = {},
}: {
  source: string
  components?: MDXComponents
}) {
  const allComponents = { ...baseComponents, ...customComponents, ...components }

  return (
    <MDXRemote
      source={source}
      components={allComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [
            [
              // @ts-expect-error: silly compatibility issue
              remarkSimpleEmoji,
              {
                validate: (name: string) => emojiLookup.get(name as EmojiKey),
                lookup: (name: string) => {
                  const emoji = emojiLookup.get(name as EmojiKey)
                  // NOTE: this should be guranteed due to validate
                  return emoji!.alt
                },
              },
            ],
            // @ts-expect-error: silly compatibility issue
            remarkMarkFirstParagraph,
            [
              // @ts-expect-error: silly compatibility issue
              remarkJsxifyElements,
              {
                elements: [
                  {
                    matcher: (node: MdastNode) =>
                      // @ts-expect-error
                      (node?.name as string) === "img",
                    jsxName: "SmartImage",
                  },
                  {
                    matcher: (node: MdastNode) =>
                      // @ts-expect-error
                      (node?.name as string) === "video",
                    jsxName: "Video",
                  },
                ],
              },
            ],
          ],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
                properties: {
                  "data-nav": "true",
                  "data-underline": "false",
                  className: ["anchor-link"],
                },
              },
            ],
          ],
        },
      }}
    />
  )
}
