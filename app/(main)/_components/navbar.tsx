"use client";

import React from 'react'
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { MenuIcon } from 'lucide-react';


interface NavbarProps {
    isCollapse: boolean;
    onResetWidth: () => void;
}

const Navbar = ({ isCollapse, onResetWidth }: NavbarProps) => {

    const params = useParams()

    const document = useQuery(api.documents.getById, {documentId: params.documentId as Id<"documents">})

    if(document === undefined){
        return <p>Loading...</p>
    }

    if(document === null){
        return null;
    }

    return (
        <nav className='bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4'>
            {isCollapse && ( <MenuIcon className='h-6 w-6 text-muted-foreground' onClick={onResetWidth} role='button' />)}
            <div className='flex items-center justify-between w-full'>
                Navbar
            </div>
        </nav>
    )
}

export default Navbar