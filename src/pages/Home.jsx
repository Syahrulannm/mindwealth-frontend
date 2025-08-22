import Hero from "../components/home/Hero";
import ArticlePreview from "../components/home/ArticlePreview";
import Contact from "../components/home/Contact";
import Newsletter from "../components/home/Newsletter";

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
