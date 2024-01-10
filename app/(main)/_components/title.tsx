"use client";

import { Doc } from '@/convex/_generated/dataModel';
import React from 'react'
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface TitleProps{
    initialData: Doc<"documents">
}

const Title = ({initialData}: TitleProps) => {
    const update = useMutation(api.documents.update)
  return (
    <div>Title</div>
  )
}

export default Title