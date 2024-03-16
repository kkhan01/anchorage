import React from "react"
import { notFound } from "next/navigation"
import { getAllContentData, getContentData } from "@/lib/content"
import { MDXContent } from "@/components/mdx"

export async function generateStaticParams() {
  const slugsParts = getAllContentData().map((contentData) => {
    return {
      slug: contentData.slug.split("/"),
    }
  })

  return slugsParts
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const slugPath = slug.join("/")

  // TODO: turn this to support `"**/page*.mdx"` when dealing with i18n
  // eg page.es.mdx will be spanish
  const filePath = `${slugPath}/page.mdx`

  const contentData = getContentData(filePath)
  if (!contentData) {
    notFound()
  }

  return (
    <main className="normalize">
      <MDXContent source={contentData.content} />
    </main>
  )
}
