<ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
{filteredArticles.map((article) => (
<li key={article._id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
<div className="order-1 sm:ml-6 xl:ml-0">
<h3 className="mb-1 text-slate-900 dark:text-gray-100 font-semibold">
<span className="mb-1 block text-sm leading-6 text-indigo-500">{article.category || "General"}</span>
{article.title}
</h3>
<div className="prose prose-slate prose-sm text-slate-600">
<p className="dark:text-gray-200">{article.excerpt || getExcerptFromEditorJs(article.content)}</p>
</div>
<Link
to={`/articles/${article.slug || article._id}`}
className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
href="" >
Learn more<span className="sr-only">, Completely unstyled, fully accessible UI components</span>
<svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M0 0L3 3L0 6"></path>
</svg>
</Link>
</div>
<div className="overflow-hidden rounded-lg">
{article.coverImage && (
<img
src={`http://localhost:5000/uploads/${article.coverImage}`}
alt={article.title}
className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] xl:w-full h-auto object-cover aspect-[16/9] transition duration-300 hover:scale-105"
width="1216"
height="640"
/>
)}
</div>
</li>
))}
</ul>
