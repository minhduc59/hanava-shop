import Separator from "@/components/native/Separator";
import { Instagram, Facebook, Github } from 'lucide-react';
import Link from "next/link";

const data = [
    {
       label: 'LEGAL',
       links: [
          {
             label: 'Privacy Policy',
             url: '/privacy',
          },
          {
             label: 'Terms & Conditions',
             url: '/terms',
          },
       ],
    },
    {
       label: 'RESOURCES',
       links: [
          {
             label: 'Blog',
             url: '/blog',
          },
          {
             label: 'About',
             url: '/about',
          },
          {
             label: 'Contact',
             url: '/contact',
          },
       ],
    },
    {
       label: 'SUPPORT',
       links: [
          {
             label: 'Telegram',
             url: '/telegram',
          },
          {
             label: 'FAQ',
             url: '/faq',
          },
       ],
    },
 ]
export default function Footer() {
    return (
        <footer className="w-full">
            <Separator className="my-12"/>
            <div className="flex justify-between px-[1.4rem] md:px-[4rem]">
                <Trademark/>
                <Links/>
            </div>
            <Separator className="mt-12 mb-5"/>
            <Socials/>
        </footer>
    );
}

const Trademark = () => {
    return (
       <div className="mb-6 hidden md:mb-0 md:block">
            <span className="flex-col flex">
                <h2 className="text-2xl">Havana</h2>
                <span className="mt-2 text-sm text-neutral-500 dark:text-white">
                © {new Date().getFullYear()} Havana™ . All Rights Reserved
                </span>
            </span>
       </div>
    )
 }
 const Links = () => {
    return (
        <div className="text-end justify-evenly grid grid-cols-2 sm:grid-cols-3 gap-8">
            {data.map(({label, links})=> (
                <div key= {label}>
                    <h3 className="text-sm">{label}</h3>
                    <ul className="mt-2 space-y-2">
                        {links.map(({label, url})=> (
                            <li key={label}>
                                <Link href={url} className="text-sm text-neutral-500 dark:text-white hover:underline">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
 }
 const Socials = () => {
    return(
        <div className="flex justify-center space-x-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-white hover:text-neutral-900 dark:hover:text-neutral-300">
                <Instagram size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-white hover:text-neutral-900 dark:hover:text-neutral-300">
                <Facebook size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-white hover:text-neutral-900 dark:hover:text-neutral-300">
                <Github size={20} />
            </Link>
        </div>
    )
  }

