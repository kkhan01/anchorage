import React, { type ReactNode } from "react"
import Link from "next/link"
import { headerLinks, info } from "@/config"
import { cn } from "@/lib/utils"
import { typographyVariants } from "@/components/primitives/typography"
import { HomeToggle } from "@/components/toggles"

export function NavLinks({ className = "" }: { className?: string }) {
  return (
    <ul
      className={cn(
        typographyVariants({ variant: "nav" }),
        "flex flex-col gap-4 md:flex-row",
        className
      )}
    >
      {headerLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  return (
    <header
      role="navigation"
      className="z-banner flex min-h-[60px] items-center bg-nav md:min-h-[70px] lg:min-h-[80px]"
    >
      <nav className="page-container flex w-full flex-row items-center justify-between">
        {/* lhs on all views */}
        <HomeToggle />

        {/* rhs on desktop view */}
        <NavLinks className="hide-mobile" />

        {/* rhs on mobile view */}
        <div className={cn(typographyVariants({ variant: "nav" }), "hide-desktop flex flex-row")}>
          <div>menu</div>
        </div>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <p className="bg-nav pb-28 pt-16 text-center">
        &copy; {info.startYear}+, {info.fullname}. All rights reserved.
      </p>
    </footer>
  )
}

interface BaseLayoutProps {
  children: ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <div className="relative z-0 flex min-h-[87vh] flex-col xs:min-h-[96vh]">
        <Header />
        <main className="flex grow flex-col">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default BaseLayout
