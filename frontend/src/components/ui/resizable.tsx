"use client"

import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex size-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <DragHandleDots2Icon className="size-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

const CustomResizableHandle = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  children: React.ReactNode
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      // Base styles
      "relative flex w-px items-center justify-center",
      "bg-border",

      // Before pseudo-element (drag handle area) - made wider for easier grabbing
      "before:absolute before:inset-y-0 before:left-1/2 before:z-10 before:w-4",
      "before:-translate-x-1/2 before:cursor-ew-resize before:content-['']",

      // After pseudo-element styles (visual indicator)
      "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
      // "after:transition-all after:duration-200 hover:after:w-2 active:after:w-3",

      // Focus styles
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",

      // Vertical panel group styles
      "data-[panel-group-direction=vertical]:h-px",
      "data-[panel-group-direction=vertical]:w-full",
      // "data-[panel-group-direction=vertical]:hover:h-0.5",
      // "data-[panel-group-direction=vertical]:active:h-1",

      // Vertical panel before pseudo-element styles - made wider for easier grabbing
      "data-[panel-group-direction=vertical]:before:left-0",
      "data-[panel-group-direction=vertical]:before:h-8",
      "data-[panel-group-direction=vertical]:before:w-full",
      "data-[panel-group-direction=vertical]:before:-translate-y-1/2",
      "data-[panel-group-direction=vertical]:before:translate-x-0",
      "data-[panel-group-direction=vertical]:before:cursor-ns-resize",

      // Vertical panel after pseudo-element styles
      "data-[panel-group-direction=vertical]:after:left-0",
      "data-[panel-group-direction=vertical]:after:h-1",
      "data-[panel-group-direction=vertical]:after:w-full",
      "data-[panel-group-direction=vertical]:after:-translate-y-1/2",
      "data-[panel-group-direction=vertical]:after:translate-x-0",
      "data-[panel-group-direction=vertical]:hover:after:h-2",
      "data-[panel-group-direction=vertical]:active:after:h-3",

      // Rotate children when vertical
      "[&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    <div className="z-10 flex size-5 items-center justify-center rounded-md bg-transparent">
      {children}
    </div>
  </ResizablePrimitive.PanelResizeHandle>
)

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  CustomResizableHandle,
}
