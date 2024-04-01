import React from "react"
import { ContentData } from "@/schemas/content"
import { getContentDataBySource } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Callout } from "@/components/blocks/callout"
import { Link } from "@/components/primitives/link"
import { typographyVariants } from "@/components/primitives/typography"

function WritingCard({ content, right = true }: { content: ContentData; right?: boolean }) {
  const textAlign = "text-left"

  return (
    <li className="card-link link-box flex w-full rounded-lg shadow-lg">
      <div
        className={cn(
          "flex h-full w-full flex-col flex-col-reverse",
          right ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <div className="flex grow flex-col gap-1 p-6">
          <h3 className={cn(typographyVariants({ variant: "h3" }), textAlign)}>
            <Link href={`/${content.slug}`} className="link-overlay" nav={true} underline={false}>
              {content.frontmatter.title}
            </Link>
          </h3>
          <span className={cn(typographyVariants({ variant: "h4" }), textAlign)}>
            {content.frontmatter.subtitle}
          </span>
          <span className={cn("text-theme-muted line-clamp-3", textAlign)}>
            {content.frontmatter.description}
          </span>
        </div>

        <div className="relative -z-1 h-32 w-full flex-none sm:h-48 md:h-auto md:w-72 lg:w-96">
          <img
            alt={content.frontmatter?.coverImage?.alt}
            src={content.frontmatter.coverImage.url}
            className={cn(
              "relative inset-0 h-full w-full rounded-t-lg object-cover md:absolute md:rounded-r-lg",
              right ? "md:clip-list-image-left" : "md:clip-list-image-right"
            )}
          />
        </div>
      </div>
    </li>
  )
}

export default function Writings() {
  const allContentData = getContentDataBySource("writings")

  return (
    <main className="space-y-4">
      <Callout variant="note" heading="Work in Progress">
        <p>
          {"I'm"} in the process of converting my previous articles from org mode and loose messages
          to mdx. {"It'll"} take some time, so articles {"won't"} be here for a while... some may
          trinkle in slowly but {"it'll"} all be up eventually... soon <sup>TM</sup>
        </p>
      </Callout>

      <h2 className={typographyVariants({ variant: "h2" })}>Articles</h2>

      <p
        className={cn(
          typographyVariants({
            variant: "h4",
            className: "bg-background font-body text-muted-foreground",
          })
        )}
      >
        {allContentData.length} Articles
      </p>

      <ul className="space-y-8">
        {allContentData.map((contentData) => {
          return <WritingCard key={contentData.slug} content={contentData} />
        })}
      </ul>
    </main>
  )
}
