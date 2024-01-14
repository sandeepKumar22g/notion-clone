"use client";
import React from 'react'
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, } from "@/components/ui/dialog"
import { useCoverImage } from '@/hooks/use-cover-image';


const CoverImageModal = () => {
    const coverImage = useCoverImage()
  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
        <DialogContent>
            <DialogHeader>
                <h2 className='text-center text-lg font-semibold'>Cover Image</h2>
            </DialogHeader>
            <div>TODO: Upload Image</div>
        </DialogContent>
    </Dialog>
  )
}

export default CoverImageModal