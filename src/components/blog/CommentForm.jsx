import { useState } from "react";

export default function CommentForm({ articleId, onCommentAdded }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Ganti URL ini dengan endpoint API post komentar kamu
  const API_URL = `https://api.example.com/comments`;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articleId, name, message }),
      });

      if (!res.ok) throw new Error("Gagal mengirim komentar");

      const newComment = await res.json();
      onCommentAdded(newComment);
      setName("");
      setMessage("");
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3">Tinggalkan Komentar</h3>

      <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 mb-3 rounded border border-gray-300 dark:border-gray-700" />

      <textarea placeholder="Tulis komentar..." value={message} onChange={(e) => setMessage(e.target.value)} required rows="4" className="w-full p-2 mb-3 rounded border border-gray-300 dark:border-gray-700"></textarea>

      <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
        {loading ? "Mengirim..." : "Kirim"}
      </button>

      {success && <p className="text-green-500 text-sm mt-2">Komentar berhasil dikirim!</p>}
    </form>
  );
}
