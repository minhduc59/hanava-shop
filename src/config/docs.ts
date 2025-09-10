import { NavItem } from "@/types/navbar";
interface DocConfig {
    mainNav: NavItem[]
    sidebarNav: NavItem[]
}

export const docConfig: DocConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
            disabled: false,
        },
        {
            title: "GitHub",
            href: "https://github.com/minhduc59/havana-shop",
        },
    ],
    sidebarNav: [
        {
           title: 'Products',
           href: '/products',
        },
        {
           title: 'Blog',
           href: '/blog',
        },
        {
           title: 'Orders',
           href: '/profile/orders',
        },
        {
           title: 'Payments',
           href: '/profile/payments',
        },
        {
           title: 'Contact',
           href: '/contact',
        },
        {
           title: 'About',
           href: '/about',
        },
     ],
    }