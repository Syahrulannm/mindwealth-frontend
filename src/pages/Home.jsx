import Hero from "../components/Hero";
import ArticlePreview from "../components/ArticlePreview";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <ArticlePreview />
      <Newsletter />
      <Contact />
    </div>
  );
}
