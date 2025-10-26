import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a styled card container used as the primary wrapper for card content.
 *
 * The underlying div includes data-slot="card", applies default card layout and visual styles, and forwards any provided props and `className`.
 *
 * @returns A div element serving as the card container with merged classes and forwarded props.
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

/**
 * Renders the header section of a Card, applying layout and spacing classes.
 *
 * @returns A div element with `data-slot="card-header"`, grid layout and spacing classes, and any additional props/className applied.
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

/**
 * Renders a container for a card title with heading typography and optional custom classes.
 *
 * @returns A JSX element with `data-slot="card-title"`, baseline typography classes (`leading-none font-semibold`), and any additional classes merged from `className`.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

/**
 * Renders a container for a card's descriptive text.
 *
 * @returns A `div` element with `data-slot="card-description"`, applies muted small-text styling, and forwards any provided div props (including `className`).
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/**
 * Container for an action element placed in a card header (e.g., a top-right action button).
 *
 * @returns A `div` element with `data-slot="card-action"` that positions its children in the header action slot. 
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

/**
 * Renders the card's content container with horizontal padding.
 *
 * @param className - Additional CSS classes to merge with the component's base padding class
 * @param props - Additional div props spread onto the underlying element
 * @returns A div element with `data-slot="card-content"`, horizontal padding applied, merged classes, and any forwarded props
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

/**
 * Renders a styled container for a card's footer.
 *
 * @param className - Additional CSS class names appended to the footer's default classes
 * @returns A `div` element with `data-slot="card-footer"`, footer layout classes, and any provided props spread onto it
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};