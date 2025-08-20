import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import ArticleComments from "../components/ArticleComments";

export default function AdminEditor() {
  const { id } = useParams(); // ambil ID dari URL (jika mode edit)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // State artikel dalam 1 objek
  const [article, setArticle] = useState({
    title: "",
    slug: "",
    content: "",
    category: "",
    coverImage: null,
    published: false,
    _id: null,
  });

  // Ambil data artikel kalau sedang edit
  useEffect(() => {
    if (id) {
      api
        .get(`/articles/${id}`)
        .then((res) => {
          setArticle(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  // Untuk preview gambar yang dipilih
  const [preview, setPreview] = useState(null);

  // Fungsi untuk handle perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setArticle((prev) => ({ ...prev, coverImage: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else if (type === "checkbox") {
      setArticle((prev) => ({ ...prev, [name]: checked }));
    } else {
      setArticle((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Simpan artikel (create / update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("mw_token");
    const formData = new FormData();
    formData.append("title", article.title);
    formData.append("slug", article.slug);
    formData.append("content", article.content);
    formData.append("published", article.published);
    if (article.coverImage) formData.append("coverImage", article.coverImage);

    setLoading(true);
    try {
      if (article._id) {
        await api.put(`/articles/${article._id}`, article, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await api.post("/articles/", article, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoading(false);
      }

      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{article._id ? "Edit Artikel" : "Buat Artikel"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Judul" value={article.title} onChange={handleChange} className="border p-2 w-full" />

        <input type="text" name="slug" placeholder="Slug" value={article.slug} onChange={handleChange} className="border p-2 w-full" />

        <textarea name="content" placeholder="Konten" value={article.content} onChange={handleChange} className="border p-2 w-full h-40" />

        <input type="text" name="category" placeholder="Kategori" value={article.category} onChange={handleChange} className="border p-2 w-full" />
        <input type="file" name="coverImage" accept="image/*" onChange={handleChange} className="bg-sky-600 p-8" />
        {preview && <img src={preview} alt="Preview" className="my-2 max-h-48" />}

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="published" checked={article.published} onChange={handleChange} />
          <span>Published</span>
        </label>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </form>

      {/* Tampilkan komentar hanya jika artikel sudah ada */}
      {article._id && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Komentar</h3>
          <ArticleComments articleId={article._id} />
        </div>
      )}
    </div>
  );
}
