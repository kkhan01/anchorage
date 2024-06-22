import "./globals.css"

import React from "react"
import { Montserrat, Open_Sans, Space_Grotesk } from "next/font/google"
import { cn } from "@/lib/utils"
import { BaseLayout } from "@/components/layouts/base"
import { typographyVariants } from "@/components/primitives/typography"
import { ThemeProvider } from "./providers"

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})
const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})
const monoFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          headingFont.variable,
          bodyFont.variable,
          monoFont.variable,
          typographyVariants({ variant: "body" }),
          "min-h-screen bg-background text-foreground antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BaseLayout>{children}</BaseLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
