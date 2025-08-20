import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { ArticleForm } from "../../components/dashboard/ArticleForm";

export default function CreateArticle() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    title: "",
    slug: "",
    content: {}, // ⬅️ biarkan tetap kosong, nanti diisi EditorJS JSON
    category: "",
    coverImage: null,
    published: false,
  });
  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("mw_token");

      const formData = new FormData();
      formData.append("title", article.title);
      formData.append("slug", article.slug);
      formData.append("category", article.category);
      formData.append("published", article.published ? "true" : "false");
      // simpan content sebagai JSON string utuh
      formData.append("content", JSON.stringify(article.content));
      if (article.coverImage) {
        formData.append("coverImage", article.coverImage);
      }

      await api.post("/articles", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/admin");
    } catch (error) {
      console.error(error);
      alert("Gagal membuat artikel!");
    } finally {
      setLoading(false);
    }
  };

  const handleEditorChange = async (data) => {
    // ⬅️ langsung simpan data JSON dari EditorJS
    setArticle((prev) => ({ ...prev, content: data }));
  };

  return (
    <div className="p-4 bg-sky-50 dark:bg-gray-800">
      <h2 className="text-4xl text-center font-bold py-4 text-gray-900 dark:text-gray-100">Buat Artikel Baru</h2>
      <ArticleForm article={article} setArticle={setArticle} handleSubmit={handleSubmit} handleEditorChange={handleEditorChange} editorRef={editorRef} loading={loading} initialData={null} />
    </div>
  );
}
