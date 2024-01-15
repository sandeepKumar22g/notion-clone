"use client";

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { useMutation } from 'convex/react';
import { PlusCircle } from 'lucide-react';
import {api} from "@/convex/_generated/api"
import Image from 'next/image';
import React from 'react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const DocumentsPages = () => {
  const {user} = useUser()
  const create = useMutation(api.documents.create)
  const router = useRouter();

  const onCreate = () =>{
    const promise = create({title: "Untitled"})
    .then((documentId) => router.push(`/documents/${documentId}`))
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created",
      error: "Failed to create a note"
    })
  }


  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image src={"/empty.png"} alt="empty image" height={"300"} width={"300"} className='dark:hidden' />
      <Image src={"/empty-dark.png"} alt="empty image" height={"300"} width={"300"} className='dark:block hidden ' />
      <h2 className='text-lg font-medium'>Welcome to {user?.firstName}&apos;s Jotion</h2>
      <Button onClick={onCreate}>
        <PlusCircle className='w-4 h-4 mr-2' />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentsPages