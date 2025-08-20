// src/components/ArticleComments.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function ArticleComments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/articles/${articleId}/comments`);
      setComments(res.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (articleId) fetchComments();
  }, [articleId]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    try {
      await api.post(`/articles/${articleId}/comments`, { author, content });
      setAuthor("");
      setContent("");
      fetchComments();
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold mb-3">Comments</h3>

      <form onSubmit={submitComment} className="mb-4">
        <input type="text" placeholder="Your name" value={author} onChange={(e) => setAuthor(e.target.value)} className="border rounded p-2 w-full mb-2" required />
        <textarea placeholder="Write your comment..." value={content} onChange={(e) => setContent(e.target.value)} className="border rounded p-2 w-full mb-2" rows={3} required />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
          Submit Comment
        </button>
      </form>

      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} className="border-b py-2">
            <p className="font-semibold">{c.author}</p>
            <p>{c.content}</p>
            <small className="text-gray-500">{new Date(c.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}
