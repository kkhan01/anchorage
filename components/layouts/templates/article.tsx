import React, { type ReactNode } from "react"

import type { Computed } from "lib/contentlayer"

import { Toc } from "../toc"
import { Prose as Layout, type ProseProps } from "./prose"

interface ArticleProps extends ProseProps, Computed {
  children: ReactNode
}

export const Article = ({ title, subtitle, headings, children }: ArticleProps) => {
  return (
    <Layout
      title={title}
      subtitle={subtitle}
      sidebar={<Toc headings={headings} />}
      direction="right"
    >
      {children}
    </Layout>
  )
}

export default Article
