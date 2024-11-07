import { onAuthenticateUser } from '@/actions/user.actions';
import { redirect } from 'next/navigation'

export interface AuthProps{
    success: boolean,
    status: number,
    message: string,
    user?: any,
    error?: any,
}

export default async function Dashboard(){
    const auth: AuthProps = await onAuthenticateUser();
    console.log(auth);
    const workspaceId = await auth.user.workSpace[0].id;
    // console.log("auth console with newworkspace", workspace)
    if(auth.success){
        return redirect(`/dashboard/${workspaceId}`);
    }
    else{
        return redirect('/auth/sign-in')
    }
}