// MyButton.tsx
"use client"
import { extendVariants, Button } from "@nextui-org/react"

export const StyledButton = extendVariants(Button, {
    variants: {
        // <- modify/add variants
        color: {
            light: "text-[#000] bg-[#fff]",
            dark: "text-[#fff] bg-[#000]",
            primary: "text-white bg-[#404eed]"
        },
        isDisabled: {
            true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
        },
        size: {
            xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
            md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
            xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded",
            lg: "rounded-lg",
            xl: "rounded-xl",
            xxl: "rounded-2xl",
            full: "rounded-[9999px]",
        },
    },
    defaultVariants: {
        // <- modify/add default variants
        // color: "olive",
        // size: "xl",
    },
    compoundVariants: [
        // <- modify/add compound variants
        // {
        //   isDisabled: true,
        //   color: "olive",
        //   class: "bg-[#84cc16]/80 opacity-100",
        // },
    ],
})
