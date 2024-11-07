import React from "react";

export default function Layout({children}: {children: React.ReactNode}){
    return <div className="bg-gray-300">
        {children}
    </div>
}