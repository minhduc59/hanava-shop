import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Cart() {
    return (
        <Link href={"/cart"}>
            <Button variant={"outline"} size={"icon"} className="h-9 ml-1">
                <ShoppingCart />
            </Button>
        </Link>
    )
}