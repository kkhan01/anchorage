import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { SvgIcon, SVGIconNames } from "@/components/primitives/svg-icon"

const alertVariants = cva(
  "w-full rounded-md border-2 border-border bg-background/60 p-4 text-foreground",
  {
    variants: {
      variant: {
        note: "info-theme",
        tip: "success-theme",
        important: "critical-theme",
        warning: "warning-theme",
        caution: "danger-theme",
      },
    },
    defaultVariants: {
      variant: "note",
    },
  }
)

export type AlertVariants = VariantProps<typeof alertVariants>

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariants {
  children?: React.ReactNode
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "note", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Alert.displayName = "Alert"

export const AlertHeading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("flex flex-row items-center gap-2 pb-2 font-semibold", className)}
    {...props}
  />
))
AlertHeading.displayName = "AlertHeading"

export const AlertTitle = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className = "", ...props }, ref) => (
    <span ref={ref} className={cn(className)} style={{ fontSize: "120%" }} {...props} />
  )
)
AlertTitle.displayName = "AlertTitle"

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
))
AlertDescription.displayName = "AlertDescription"

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariants {
  variant?: NonNullable<AlertVariants["variant"]>
  heading?: string
  children: React.ReactNode
  className?: string
}

export const calloutIcons: Record<NonNullable<CalloutProps["variant"]>, SVGIconNames> = {
  note: "information-circle",
  tip: "light-bulb",
  important: "star",
  warning: "exclamation-triangle",
  caution: "shield-exclamation",
}

export function Callout({
  variant = "note",
  heading = undefined,
  className = "",
  children,
}: CalloutProps) {
  return (
    <Alert key={variant} variant={variant} className={className}>
      <AlertHeading>
        <SvgIcon id={calloutIcons[variant]} />
        {heading && <AlertTitle>{heading}</AlertTitle>}
      </AlertHeading>

      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
