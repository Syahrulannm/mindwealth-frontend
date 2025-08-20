// src/pages/ArticleList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { getExcerptFromEditorJs } from "../utils/editorUtils";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

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
  const filteredArticles = articles.filter((article) => {
    const matchCategory = filterCategory === "all" || article.category === filterCategory;
    const matchSearch = article.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || (article.content && article.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });
  // Statistik per kategori
  const categories = [...new Set(articles.map((a) => a.category))];
  const articlesPerCategory = categories.map((cat) => articles.filter((a) => a.category === cat).length);

  if (loading) {
    return <p className="text-center py-10">Loading articles...</p>;
  }

  return (
    <>
      <section id="articles" className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl dark:text-gray-100 font-bold mb-4">Daftar Artikel</h2>
            <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">Jelajahi wawasan terbaru kami tentang pengembangan pribadi, teknologi, kesehatan mental, dan produktivitas.</p>
            {/* Search Bar */}
            <div className="flex justify-center items-center">
              <div className="p-4 text-gray-600 dark:text-gray-300 outline-none focus:outline-none">
                <div className="relative flex">
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    name="search"
                    placeholder="Search"
                    className="bg-slate-50 dark:bg-gray-800 border-r-0 relative left-10 h-10 flex px-5 w-full rounded-full text-sm focus:outline-none border-2  border-gray-500 dark:border-gray-600"
                    autoComplete="off"
                    spellCheck="false"
                    required
                    step="any"
                    autoCapitalize="none"
                    autoFocus
                  />

                  <button type="submit" className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"></button>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="bg-slate-50 dark:bg-gray-800 h-10 px-5 md:px-8 xs:invisible relative left-5  rounded-r-full text-gray-800 dark:text-white text-sm focus:outline-none outline-none border-2 border-gray-500 border-l-0 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden"
                  >
                    <option className="font-medium cursor-pointer" value="filter">
                      All
                    </option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <button className="bg-gradient-custom hover:bg-gradient-custom-hover text-white h-10 w-40 px-6 rounded-r-full text-sm focus:outline-none outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card Article */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredArticles.map((article) => (
              <div key={article._id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                {article.coverImage && <img src={`http://localhost:5000/uploads/${article.coverImage}`} alt={article.title} className="w-full h-56 md:h-52 object-cover transition duration-300 hover:scale-105" />}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-primary-600">{article.category || "General"}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-secondary-500">{new Date(article.createdAt).toLocaleDateString()}</span>
                  </div>
                  <Link to={`/articles/${article.slug || article._id}`}>
                    <h3 className="text-xl dark:text-gray-100 hover:underline font-bold mb-3 transition-smooth">{article.title}</h3>
                  </Link>
                  <p className="text-secondary-600 dark:text-gray-200 mb-4">{article.excerpt || getExcerptFromEditorJs(article.content)}</p>
                  <Link to={`/articles/${article.slug || article._id}`}>
                    <span className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/articles" className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
