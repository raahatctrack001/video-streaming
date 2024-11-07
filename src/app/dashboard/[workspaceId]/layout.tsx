import { onAuthenticateUser } from "@/actions/user.actions";
import { verifyAccessToWorkspace } from "@/actions/workspace.actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({children, params: { workspaceId }}:{ children: React.ReactNode, params: { workspaceId: string}}){
   
    const auth = await onAuthenticateUser();
    console.log("workspace id", workspaceId);
    console.log("auth detail", auth);
    if (!auth.user?.workSpace) redirect('/auth/sign-in')
    if (!auth.user?.workSpace.length) redirect('/auth/sign-in')
    const hasAccess = await verifyAccessToWorkspace(workspaceId)

    if (hasAccess.status !== 200) {
      redirect(`/dashboard/${auth.user?.workSpace[0].id}`)
    }

    if (!hasAccess.data?.workspace) return null
    
    return <div>
        the workspaceid is : {workspaceId}
        {children}
    </div>
}