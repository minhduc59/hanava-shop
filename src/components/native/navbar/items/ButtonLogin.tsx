import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogInIcon } from 'lucide-react';
export default function ButtonLogin() {
    return(
        <Link href={"/login"}>
            <Button variant={"outline"} size={"sm"} className="h-9 ml-1">
                <LogInIcon className="h-4" />
                <p>Login</p>
            </Button>
        </Link> 
    )
}