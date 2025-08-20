// src/pages/ArticlePage.jsx
import React from "react";

const ArticlePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:flex gap-8">
        {/* Main Content */}
        <article className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          {/* Judul */}
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Judul Artikel yang Menarik</h1>

          {/* Info penulis & tanggal */}
          <div className="flex items-center gap-3 mb-6 text-sm text-gray-500 dark:text-gray-400">
            <img
              src="https://plus.unsplash.com/premium_photo-1722542454679-5309a025f69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnVpbGRpbmclMjBhJTIwU2Vjb25kJTIwQnJhaW58ZW58MHwwfDB8fHww?"
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">John Doe</p>
              <p>9 Agustus 2025</p>
            </div>
          </div>

          {/* Gambar utama */}
          <img
            src="https://plus.unsplash.com/premium_photo-1722542454679-5309a025f69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnVpbGRpbmclMjBhJTIwU2Vjb25kJTIwQnJhaW58ZW58MHwwfDB8fHww?"
            alt="Artikel"
            className="rounded-lg mb-6 w-full object-cover"
          />

          {/* Isi artikel */}
          <div className="prose dark:prose-invert max-w-none">
            <p>Ini adalah paragraf pembuka artikel. Konten ditulis dengan typografi nyaman, jarak antar baris pas, dan mudah dibaca baik di layar kecil maupun besar.</p>
            <p>Paragraf selanjutnya menjelaskan detail lebih dalam, menggunakan heading, list, dan elemen lainnya untuk memudahkan pembaca memahami isi artikel.</p>
            <h2>Subjudul</h2>
            <ul>
              <li>Poin penting pertama</li>
              <li>Poin penting kedua</li>
              <li>Poin penting ketiga</li>
            </ul>
          </div>
        </article>

        {/* Sidebar Related Articles */}
        <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Artikel Terkait</h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <a href={`/article/${item}`} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400">
                    <img src={`/related-${item}.jpg`} alt={`Artikel ${item}`} className="w-16 h-16 rounded-lg object-cover" />
                    <span>Judul Artikel Terkait {item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticlePage;
