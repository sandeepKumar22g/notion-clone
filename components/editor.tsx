"use client";

import React from 'react';
import {BlockNoteView, useBlockNote} from "@blocknote/react"
import {BlockNoteEditor, PartialBlock} from "@blocknote/core"
import "@blocknote/core/style.css"
import "@blocknote/react/style.css"
import { useTheme } from 'next-themes';
import { useEdgeStore } from '@/lib/edgestore';

interface EditorProps{
    onChange: (value: string)=> void;
    initalContent?: string;
    editable?: boolean;
}

const Editor = ({initalContent, onChange, editable}: EditorProps) => {
    const {resolvedTheme} = useTheme()
    const {edgestore} = useEdgeStore()

    const handleUpload = async (file: File) =>{
        const response = await edgestore.publicFiles.upload({file})
        return response.url
    }

    const editor: BlockNoteEditor = useBlockNote({
        editable, 
        initialContent: initalContent ? JSON.parse(initalContent) as PartialBlock[] : undefined,
        onEditorContentChange: (editor) => {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        },
        uploadFile: handleUpload
    })
  return (
    <div>
        <BlockNoteView editor={editor} theme={resolvedTheme === "dark" ? "dark": "light"} />
    </div>
  )
}

export default Editor