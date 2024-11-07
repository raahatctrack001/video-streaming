import { onAuthenticateUser } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { AuthProps } from "@/app/dashboard/page";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomeHeader(){
    
    const auth: AuthProps = await onAuthenticateUser();
    
    return <div className="flex justify-between items-center border-b-2 py-1 px-2 md:px-10">
       {/* left portion branding */}
       <h1 className="px-1 rounded-lg bg-gray-100"> Video Streaming </h1>
       <div className="hidden md:flex gap-2 items-center">
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/'} > Home </Link>
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/about'}> About </Link>
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/pricing'}> pricing </Link>
        <Link className="hover:bg-gray-100 rounded-lg px-1" href={'/contact'}> Contact </Link>
       </div>
       {auth.success ? <div className="bg-green-400 rounded-full h-10 w-10 grid place-items-center"> <UserButton /> </div> : <Link href={'/auth/sign-in'}>
            <Button> <User /> Login </Button>
       </Link>}
    </div>
}