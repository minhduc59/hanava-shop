"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react";
import { Menu } from 'lucide-react';
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { docConfig } from "@/config/docs";
export function NavbarMobile() {
    const [open, setOpen] = useState(false);
    return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost"
               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[300px]">
        <SheetHeader>
            <SheetTitle>
                <MobileLink href="/" onOpenChange={setOpen} className="flex items-center justify-center">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={80}
                />
                </MobileLink>
            </SheetTitle>
            <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col gap-4 mt-3.5">
                {docConfig.mainNav.map((item, index) => (
                        item.href ? (
                            <MobileLink key={index}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                        className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                            >
                                {item.title}
                            </MobileLink>
                        )
                        : (
                            <span key={index}
                                  className="px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed rounded-md"
                            >
                                {item.title}
                            </span>
                        )
                ))}

                <div className="border-t border-border"></div>

                {docConfig.sidebarNav.map((item, index) => (
                        item.href ? (
                            <MobileLink key={index}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                        className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                            >
                                {item.title}
                            </MobileLink>
                        )
                        : (
                            <span key={index}
                                  className="px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed rounded-md"
                            >
                                {item.title}
                            </span>
                        )
                ))
                }
            </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps{
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}
const MobileLink = ({href, onOpenChange, className, children, ...props}: MobileLinkProps) => {
    const router = useRouter();
    return (
        <Link href={href}
              className={cn(className)}
              onClick={() => {
                    router.push(href.toString());
                    onOpenChange?.(false);
              }}
              {...props}
        >
            {children}
        </Link>
    )
}
