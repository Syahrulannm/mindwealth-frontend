// src/pages/ArticleList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api"; // axios instance yang sudah ada

function getExcerptFromEditorJs(content) {
  try {
    const blocks = typeof content === "string" ? JSON.parse(content) : content;
    if (!blocks.blocks) return "";

    return (
      blocks.blocks
        .filter((block) => block.type === "paragraph")
        .map((block) => block.data.text)
        .join(" ")
        .substring(0, 100) + "..."
    );
  } catch {
    return "";
  }
}
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const previewItems = articles.slice(0, 5); // Ambil 3 artikel pertama sesuai urutan

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get("/articles");
        setArticles(res.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading articles...</p>;
  }

  return (
    <section className="py-16 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl dark:text-gray-100 font-bold mb-4">Artikel Unggulan</h2>
          <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">Jelajahi wawasan terbaru kami tentang pengembangan pribadi, teknologi, kesehatan mental, dan produktivitas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewItems.map((article) => (
            <div key={article._id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              {article.coverImage && <img src={article.coverImage} alt={article.title} className="w-full h-56 md:h-52 object-cover transition duration-300 hover:scale-105" />}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium text-primary-600">{article.category || "General"}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-xs text-secondary-500">{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl dark:text-gray-100 font-bold mb-3">{article.title}</h3>
                <p className="text-secondary-600 dark:text-gray-200 mb-4"> {article.excerpt || getExcerptFromEditorJs(article.content)}</p>
                <Link to={`/articles/${article.slug || article._id}`} className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/articles" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-smooth">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
