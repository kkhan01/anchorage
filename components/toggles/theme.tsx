"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useMounted } from "hooks"

import { IconButton } from "components/ui"
import { Moon, Sun } from "components/icons"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const mounted = useMounted()
  const { setTheme, resolvedTheme } = useTheme()

  if (!mounted) return null

  const isLight = resolvedTheme === `light`
  const oppositeTheme = isLight ? `dark` : `light`
  const ColorIcon = isLight ? Moon : Sun

  const toggleTheme = () => setTheme(oppositeTheme)

  return (
    <IconButton
      aria-label={`Switch to ${oppositeTheme} mode`}
      onClick={toggleTheme}
      className={className}
    >
      <ColorIcon />
    </IconButton>
  )
}
