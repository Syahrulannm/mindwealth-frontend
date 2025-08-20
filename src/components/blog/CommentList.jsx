import { useEffect, useState } from "react";

export default function CommentList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ganti URL ini dengan endpoint API komentar kamu
  const API_URL = `https://api.example.com/comments?articleId=${articleId}`;

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Gagal memuat komentar");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [articleId]);

  if (loading) return <p className="text-gray-500">Memuat komentar...</p>;

  if (comments.length === 0) {
    return <p className="text-gray-500">Belum ada komentar. Jadilah yang pertama!</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm font-semibold">{comment.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{comment.message}</p>
        </div>
      ))}
    </div>
  );
}
