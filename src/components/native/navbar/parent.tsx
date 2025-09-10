"use client"
import { useAuthenticated } from "@/hooks/useAuthenticated"
import { NavbarMain } from "./laptop";
import { NavbarMobile } from "./mobile";
import Cart from "./items/Cart";
import SearchBox from "./items/SearchBox";
import ToggleThemes from "./items/ToggleThemes";
import ButtonLogin from "./items/ButtonLogin";
export default function Header() {
    const { authenticated } = useAuthenticated()

    return (
        <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
           <div className="flex justify-center items-center h-14">
                <NavbarMobile />
                <NavbarMain />
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <SearchBox/>
                    <Cart/>
                    <ToggleThemes/>
                    { authenticated ? <div></div> : <ButtonLogin/> }
                </div>
            </div>
        </header>
    );
}