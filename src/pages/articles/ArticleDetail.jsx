// src/pages/ArticleDetail.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import editorJsHtml from "editorjs-html";

const edjsParser = editorJsHtml(); // Inisialisasi parser

const ArticleSlug = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/articles/slug/${slug}`)
      .then((res) => {
        setArticle(res.data);

        if (res.data.category) {
          api
            .get(`/articles/related?category=${res.data.category}&currentArticleId=${res.data._id}`)
            .then((relatedRes) => {
              setRelatedArticles(relatedRes.data);
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Artikel tidak ditemukan.</p>;

  // Ubah JSON content jadi HTML array
  let parsedHTML = [];
  try {
    if (article.content) {
      const contentJSON = typeof article.content === "string" ? JSON.parse(article.content) : article.content;
      const parsed = edjsParser.parse(contentJSON);
      parsedHTML = Array.isArray(parsed) ? parsed : [parsed];
    }
  } catch (err) {
    console.error("Gagal parse konten:", err);
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:flex gap-8">
        {/* Main Content */}
        <article className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{article.title}</h1>

          <div className="flex items-center gap-3 mb-6 text-sm text-gray-500 dark:text-gray-400">
            <img src={article.authorImage || "/syahrul-hero.webp"} alt="Author" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">{article.author || "Penulis"}</p>
              <p>{new Date(article.createdAt).toLocaleDateString("id-ID")}</p>
            </div>
          </div>

          {article.coverImage && <img src={`http://localhost:5000/uploads/${article.coverImage}`} alt={article.title} className="w-full rounded-lg mb-6 object-cover transition" />}

          {/* Konten artikel hasil parsing EditorJS */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {parsedHTML.map((item, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </article>

        {/* Sidebar Related Articles */}
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Artikel Terkait</h3>
            <ul className="space-y-4">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((related) => (
                  <li key={related._id} className="text-lg font-bold text-gray-100 space-y-4 bg-gray-900 p-4 rounded-xl hover:scale-105 transition-smooth">
                    <Link to={`/articles/${related.slug}`} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400">
                      <img src={related.coverImage ? `/uploads/${related.coverImage}` : "/placeholder.jpg"} alt={related.title} className="w-16 h-16 rounded-lg object-cover" />
                      <span>{related.title}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">Tidak ada artikel terkait.</p>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleSlug;
