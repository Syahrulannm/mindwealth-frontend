// src/components/article/ArticleContent.js

import React, { useEffect, useState } from "react";
import edjsHTML from "editorjs-html";

const edjsParser = edjsHTML();

const ArticleContent = ({ contentData }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (contentData && contentData.blocks) {
      // Mengonversi data JSON menjadi string HTML
      const html = edjsParser.parse(contentData).join("");
      setHtmlContent(html);
    }
  }, [contentData]);

  // Menggunakan dangerouslySetInnerHTML untuk menampilkan HTML
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ArticleContent;
