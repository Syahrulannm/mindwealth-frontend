// src/pages/ArticleList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function AdminArticle() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await api.get("/articles");
      setArticles(res.data);
    } catch (err) {
      alert("Failed to load articles");
    }
    setLoading(false);
  };

  // Gunakan useEffect untuk menunda pembaruan debouncedSearchTerm
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Tunda selama 500ms

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filter artikel berdasarkan kategori, status, dan search term
  const filteredArticles = articles.filter((a) => {
    const matchCategory = filterCategory === "all" || a.category === filterCategory;
    const matchStatus = filterStatus === "all" || (filterStatus === "published" && a.published) || (filterStatus === "draft" && !a.published);
    const matchSearch = a.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || (a.content && a.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
    return matchCategory && matchStatus && matchSearch;
  });
  useEffect(() => {
    fetchArticles();
    // fetchNotifications(); // Panggil fungsi untuk mengambil notifikasi
  }, []);
  // Delete
  const del = async (id) => {
    if (!window.confirm("Hapus artikel ini?")) return;
    try {
      await api.delete(`/articles/${id}`);
      fetchArticles();
    } catch (err) {
      alert("Gagal menghapus artikel");
    }
  };

  return (
    <section id="article" className="py-20 px-6 ">
      <div className="text-center mb-8 bg-sky-800 text-gray-100 py-6 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">Daftar Artikel</h1>
      </div>
      {filteredArticles.map((a) => (
        <div key={a._id} className="shadow-md mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-smooth">
          <header className="flex flex-col md:flex-row justify-between items-center bg-sky-200 object-cover rounded-t-lg ">
            {/* Menggunakan komponen Link untuk membuat link kehalaman detail */}
            <h3 className="text-xl font-bold p-2 hover:underline text-gray-600 hover:text-blue-800">
              <Link to={`/admin/articles/edit/${a._id}`}>{a.title}</Link>
            </h3>
            <div>
              <div className="flex flex-row p-2 text-center">
                <div className="p-2 rounded-l-md  bg-sky-200">Published</div>
                <p className="p-2 rounded-md bg-sky-600 text-gray-100  font-semibold">{a.published ? "Yes" : "No"}</p>
              </div>
            </div>
          </header>
          <div className="flex flex-col  items-center justify-between mx-auto">
            <p className="text-xl mb-2 p-2  dark:text-gray-200 ">{a.category}</p>
            <div className="flex flex-row items-center justify-between gap-1 p-2">
              <Link to={`/admin/articles/edit/${a._id}`} className="">
                <div className="text-white hover:text-gray-300  rounded-t-lg font-bold bg-sky-600 px-5 py-2  rounded-lg transition-smooth hover:scale-105">Edit</div>
              </Link>
              <button onClick={() => del(a._id)} className=" text-white hover:text-gray-300  rounded-t-lg font-bold bg-red-600 px-3 py-2  rounded-lg transition-smooth hover:scale-105">
                Hapus
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
