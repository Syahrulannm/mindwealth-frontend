import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import LinkTool from "@editorjs/link";
import ImageTool from "@editorjs/image";

export default function Editor({ editorRef, initialData, onChange }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true); // pastikan div sudah render
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (editorRef.current) return; // jangan re-init kalau sudah ada

    editorRef.current = new EditorJS({
      holder: "editorjs",
      data: initialData && initialData.blocks ? initialData : { time: Date.now(), blocks: [], version: "2.25.0" },
      autofocus: true,
      placeholder: "Tuliskan konten artikel di sini...",
      onChange: async () => {
        try {
          const savedData = await editorRef.current.save();
          onChange(savedData);
        } catch (err) {
          console.error("Gagal menyimpan data editor:", err);
        }
      },
      tools: {
        header: { class: Header, inlineToolbar: true, config: { placeholder: "Header" } },
        list: { class: List, inlineToolbar: true },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: "Tulis kutipan...",
            captionPlaceholder: "Nama penulis (opsional)",
          },
        },
        code: { class: CodeTool },
        linkTool: { class: LinkTool, config: { endpoint: "http://localhost:5000/fetchUrl" } },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:5000/upload",
              byUrl: "http://localhost:5000/fetchUrl",
            },
            field: "image",
            types: "image/*",
            additionalRequestHeaders: {
              Authorization: `Bearer ${localStorage.getItem("mw_token")}`,
            },
          },
        },
      },
    });

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, [ready]);

  return <div id="editorjs" className="border dark:text-white  rounded-md p-2 min-h-[300px] bg-gray-50 dark:bg-gray-700"></div>;
}
