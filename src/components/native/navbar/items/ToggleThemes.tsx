import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from 'lucide-react'

export default function ToggleThemes() {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            variant={"outline"}
            size={"icon"}
            className="h-9 ml-1"
            onClick={()=> setTheme(theme === "dark"? "light" : "dark")}
        >
            {theme === "dark" ? (
                <SunIcon className="h-4" />
            ) : (
                <MoonIcon className="h-4"/>
            )}
        </Button>
    )
}