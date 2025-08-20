import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { ArticleForm } from "../../components/dashboard/ArticleForm";

export default function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    title: "",
    slug: "",
    content: {}, // ⬅️ simpan JSON dari EditorJS
    category: "",
    coverImage: null,
    published: false,
  });
  const [initialData, setInitialData] = useState(null);

  // Load artikel awal
  useEffect(() => {
    if (id) {
      api
        .get(`/articles/${id}`)
        .then((res) => {
          setArticle(res.data);
          setInitialData(res.data.content); // ⬅️ tetap simpan untuk preload di editor
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    const token = localStorage.getItem("mw_token");

    formData.append("title", article.title);
    formData.append("slug", article.slug);

    // ⬅️ simpan sebagai JSON utuh
    formData.append("content", JSON.stringify(article.content));

    formData.append("category", article.category);
    formData.append("published", article.published);

    // Cek coverImage apakah file baru atau string path lama
    if (article.coverImage && typeof article.coverImage !== "string") {
      formData.append("coverImage", article.coverImage);
    }

    try {
      await api.put(`/articles/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditorChange = (data) => setArticle((prev) => ({ ...prev, content: data }));

  return (
    <div className="p-4 bg-sky-50 dark:bg-gray-800">
      <h2 className="text-4xl text-center font-bold py-4 text-gray-900 dark:text-gray-100">Edit Artikel</h2>
      <ArticleForm article={article} setArticle={setArticle} handleSubmit={handleSubmit} handleEditorChange={handleEditorChange} editorRef={editorRef} loading={loading} initialData={initialData} />
    </div>
  );
}
