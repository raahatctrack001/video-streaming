
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function authCallback(){
    return <SignOutButton> Signout </SignOutButton>
}