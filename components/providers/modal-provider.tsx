"use client";

import { useEffect, useState } from "react";
import SettingsModals from "../modals/settings-modals";


export const ModalProvider = () =>{
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[]);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <SettingsModals />
        </>
    )
}