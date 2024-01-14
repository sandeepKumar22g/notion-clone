"use client";

import { useEffect, useState } from "react";
import SettingsModals from "../modals/settings-modals";
import CoverImageModal from "../modals/cover-image-modal";


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
            <CoverImageModal />
        </>
    )
}