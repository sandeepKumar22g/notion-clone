import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background dark:bg-[#1F1F1F] z-10'>
        <Logo />
        <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
            <Button variant={'ghost'} size={'sm'}>Privacy</Button>
            <Button variant={'ghost'} size={'sm'}>Terms & Conditions</Button>
        </div>
    </div>
  )
}

export default Footer