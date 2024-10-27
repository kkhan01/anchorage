import React from "react"
import { Logo } from "@/components/base/logo"
import { typographyVariants } from "@/components/base/typography"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { BreakpointsIndicator, ThemeProvider } from "./providers"

import "./globals.css"

const fontAliases = {
  heading: "var(--font-geist-sans)",
  body: "var(--font-geist-sans)",
  mono: "var(--font-geist-mono)",
} as React.CSSProperties

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="touch-manipulation scroll-auto focus-within:scroll-smooth"
      suppressHydrationWarning
    >
      <head></head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          typographyVariants({ variant: "body" }),
          "relative min-h-screen bg-background-1 font-body text-foreground antialiased"
        )}
        style={fontAliases}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="">
            <div className="relative isolate z-0 flex min-h-[87vh] flex-col xs:min-h-[96vh]">
              <header className="bounded-page-layout flex min-h-[68px] items-center pt-2 md:min-h-[78px] lg:min-h-[88px]">
                <nav className="flex w-full flex-row items-center justify-between">
                  <div aria-label="Site Logo">
                    <a href="#" className="group">
                      <Logo className={cn("size-[42px] md:size-[45px] lg:size-[55px]")} />
                    </a>
                  </div>
                  <div>
                    <ul className="flex space-x-4">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
              {/* NOTE: assumes pages will be wrapped in main tags with background color + grow */}
              <div className="relative flex grow flex-col">{children}</div>
            </div>
            <footer className="bounded-page-layout h-40">
              <p>Footer content here</p>
            </footer>
          </div>
          <BreakpointsIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
