import React from "react"
import { Heading, Text } from "@/components/base/typography"
import { SmartLink } from "@/components/composite/smart-link"
import { ContentLayout } from "@/components/template/content-layout"
import { listAllContentData } from "@/lib/content"
import { type ContentData } from "@/lib/schemas/content"

async function listWritingsContentData() {
  return await listAllContentData({
    filter: (contentData) => contentData.source === "writings",
  })
}

function WritingCard({ content }: { content: ContentData }) {
  return (
    <li className="link-box w-full rounded-lg border border-solid border-accent-8 shadow-none transition-all duration-700 ease-in-out group-hover:shadow-accent-8 hover:-translate-y-2 hover:border-accent-11 hover:bg-surface-5/25 hover:shadow-[0px_0px_10px_1px]">
      <div className="flex flex-col gap-1 p-6">
        <Heading as="h3" variant="h3" className="line-clamp-2 md:line-clamp-1">
          <SmartLink href={`/${content.slug}`} className="link-overlay">
            {content.frontmatter.title}
          </SmartLink>
        </Heading>

        <Text as="span" variant="h4" className="line-clamp-2 md:line-clamp-1">
          {content.frontmatter.subtitle}
        </Text>

        <Text
          as="span"
          variant={null}
          className="line-clamp-3 text-muted-foreground md:line-clamp-2"
        >
          {content.frontmatter.description}
        </Text>
      </div>
    </li>
  )
}

export default async function Page() {
  const contentData = await listWritingsContentData()

  return (
    <ContentLayout
      title="Writings"
      subtitle="My ramblings and some thoughts"
      ghPath="/app/(content)/writings/page.tsx"
      childrenWrappingClass="flex flex-col gap-4"
    >
      <Heading as="h2" variant="h2">
        Articles
      </Heading>

      <ul className="flex flex-col gap-8">
        {contentData.map((content) => (
          <WritingCard key={content.slug} content={content} />
        ))}
      </ul>
    </ContentLayout>
  )
}
