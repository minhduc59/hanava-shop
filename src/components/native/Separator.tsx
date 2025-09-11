// The role of cn function is to concatenate class names conditionally.
// Example of usage: cn('class1', condition && 'class2', 'class3')
import { cn } from "@/lib/utils"

export default function Separator({className} : {className?:string}){
    return (
        <hr
            className={cn("h-px my-4 bg-neutral-200 dark:bg-neutral-50 border-0", className)}
        />
    )
}