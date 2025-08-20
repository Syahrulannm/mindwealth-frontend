import React from "react";
import Editor from "./Editor";

export const ArticleForm = ({ article, setArticle, handleSubmit, handleEditorChange, editorRef, loading, initialData }) => {
  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Judul */}
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 text-gray-700 dark:text-gray-200 font-medium">
            Judul
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Masukkan judul artikel"
            value={article.title}
            onChange={(e) => setArticle((prev) => ({ ...prev, title: e.target.value }))}
            className="w-full dark:text-white p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
            required
          />
        </div>

        {/* Slug */}
        <div className="flex flex-col">
          <label htmlFor="slug" className="mb-1 text-gray-700 dark:text-gray-200 font-medium">
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            placeholder="Masukkan slug"
            value={article.slug}
            onChange={(e) => setArticle((prev) => ({ ...prev, slug: e.target.value }))}
            className="w-full dark:text-white p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
            required
          />
        </div>

        {/* Kategori */}
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 text-gray-700 dark:text-gray-200 font-medium">
            Kategori
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Masukkan kategori"
            value={article.category}
            onChange={(e) => setArticle((prev) => ({ ...prev, category: e.target.value }))}
            className="w-full dark:text-white p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
          />
        </div>

        {/* Published */}
        <div className="flex items-center space-x-3 mt-2">
          <input
            id="published"
            name="published"
            type="checkbox"
            checked={article.published}
            onChange={(e) => setArticle((prev) => ({ ...prev, published: e.target.checked }))}
            className="w-5 h-5 dark:text-blue-600 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="published" className="text-gray-700 dark:text-gray-200 font-medium">
            Published
          </label>
        </div>

        {/* Cover Image */}
        <div className="flex flex-col">
          <label htmlFor="coverImage" className="mb-1 text-gray-700 dark:text-gray-200 font-medium">
            Cover Image
          </label>
          {article.coverImage && typeof article.coverImage === "string" && <img src={`/uploads/${article.coverImage}`} alt="cover" className="w-full h-60 object-cover rounded-md mb-2 shadow-sm" />}
          <input id="coverImage" name="coverImage" type="file" onChange={(e) => setArticle((prev) => ({ ...prev, coverImage: e.target.files[0] }))} className="text-gray-700 dark:text-gray-200" />
        </div>
      </div>

      {/* Editor */}
      <div>
        <label htmlFor="content" className="mb-1 text-gray-700 dark:text-gray-200 font-medium">
          Konten Artikel
        </label>
        <Editor editorRef={editorRef} initialData={initialData} onChange={handleEditorChange} />
        <input
          type="hidden"
          id="content"
          name="content"
          value={JSON.stringify(article.content)}
          className="dark:text-white
        "
        />
      </div>
      {/* Submit */}
      <button type="submit" className={`w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed`} disabled={loading}>
        {loading ? "Menyimpan..." : "Simpan Artikel"}
      </button>
    </form>
  );
};
