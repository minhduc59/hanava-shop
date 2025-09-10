"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
          {
            title: "Nike Air Max 270",
            href: "/products/nike-air-max-270",
            description:
              "Step up your sneaker game with the Nike Air Max 270. Comfortable, stylish, and versatile.",
          },
          {
            title: "Levi's 501 Original Jeans",
            href: "/products/levis-501",
            description:
              "Timeless style meets modern comfort with Levi's iconic 501 jeans.",
          },
]
export function NavbarMain(){
    return (
        <div className="hidden md:flex gap-4 ">
            <Link href="/" className="flex items-center">
               <Image src="/logo.svg" alt="Logo" width={100} height={80} />
            </Link>
            <NavbarContent />
        </div>
    )
}
export function NavbarContent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="/products" passHref>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <div className="font-normal text-foreground/70">
                        Products
                    </div>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
                <div className="font-normal text-foreground/70">
                        Categories
                </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-4 p-4 md:w-[520px] md:grid-cols-2 lg:w-[640px]">
            {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
                <div className="font-normal text-foreground/70">
                        Brands
                </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4 p-4 md:w-[360px] md:grid-cols-1 lg:w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
