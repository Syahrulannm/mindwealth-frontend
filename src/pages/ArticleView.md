import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function ArticleView() {
const { slug } = useParams();
const [article, setArticle] = useState(null);
const [loading, setLoading] = useState(true);
const [related, setRelated] = useState([]);

useEffect(() => {
api
.get(`/articles/${slug}`)
.then((res) => {
setArticle(res.data.article);
setRelated(res.data.related || []);
})
.catch((err) => console.error(err));
}, [slug]);

if (loading) return <p className="text-center py-10">Loading...</p>;
if (!article) return <p className="text-center py-10">Article not found</p>;

return (
<div className="max-w-4xl mx-auto px-4 py-8">
<img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
<h1 className="text-3xl md:text-4xl font-bold mb-2">{article.title}</h1>
<div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
{related.length > 0 && (
<div className="mt-12">
<h2 className="text-xl font-semibold mb-4">Related Articles</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{related.map((r) => (
<Link to={`/articles/${r.slug}`} key={r.\_id} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
<h3 className="font-medium">{r.title}</h3>
</Link>
))}
</div>
</div>
)}
</div>
);
}
