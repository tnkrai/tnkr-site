import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";
import React from "react";

import { useRouter } from "next/router";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-sans font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-full px-3 text-xs",
                lg: "h-10 rounded-full px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    url: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, url, ...props }, ref) => {
        const router = useRouter();

        const handleClick = () => {
            router.push(url);
        };

        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                onClick={handleClick}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export default Button;
export { buttonVariants };
