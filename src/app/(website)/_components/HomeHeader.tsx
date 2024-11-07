import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export default function HomeHeader(){
    return <div className="flex justify-between items-center border-b-2 py-1 px-2 md:px-10">
       {/* left portion branding */}
       <h1 className="px-1 rounded-lg bg-gray-100"> Video Streaming </h1>
       <div className="hidden md:flex gap-2 items-center">
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/'} > Home </Link>
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/about'}> About </Link>
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/pricing'}> pricing </Link>
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/contact'}> Contact </Link>
       </div>
       <Link href={'/auth/sign-in'}>
        <Button> <User /> Login </Button>
       </Link>
    </div>
}