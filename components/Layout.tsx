import React, { useEffect, useState } from "react";

import {Header} from '@components/index'
//import header, social, Email, footer


const Layout = ({children, location}: any) =>{
    const isHome = location.patname === '/';
    const [isLoading, setIsLoading] =useState(isHome);

    useEffect(()=>{
        if (isLoading) {
            return;
        }
    }, [isLoading]);

    return (
        <div className="layout">
            <Header/>
            {/*
            //header
            //social
            //email
            */}

            <main id="content" className="">
                {children}
                {/* footer */}
            </main>
        </div>
    )

}

export default Layout 