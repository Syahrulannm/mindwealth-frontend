import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const { language, toggleLanguage } = useLanguage();
  const isID = language === "ID";
  return (
    <section id="home" className="py-16 md:py-24 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 fly-in text-center md:text-start">
            <div className="flex ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-gray-100">
                {isID ? "Asah" : "Nourish Your"} <span className="bg-gradient-custom gradient-text ">{isID ? "Pikiranmu" : "Mind"}</span>, {isID ? "Kembangkan" : "Grow Your"}
                {"   "}
                <span className="gradient-text bg-gradient-custom">{isID ? " Potensimu" : "Wealth"}</span>
              </h1>
              <div className="mt-2">
                <button onClick={toggleLanguage} className="bg-sky-100 text-sky-600 rounded-full p-1 hover:bg-sky-200 transition">
                  {language === "EN" ? <FontAwesomeIcon icon={faLanguage} /> : <FontAwesomeIcon icon={faLanguage} />}
                </button>
              </div>
            </div>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-gray-200 mb-8 leading-relaxed">
              {isID ? "Perspektif mendalam tentang psikologi, pengembangan diri, teknologi, dan merancang kehidupan yang bermakna." : "Thoughtful perspectives on psychology, personal growth, technology, and designing a meaningful life."}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link to="/articles" className="bg-primary-600 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg">
                Baca Sekarang
              </Link>
              <Link to="/about" className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition">
                Selengkapnya
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center fly-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-primary-100  dark:bg-primary-600 dark:opacity-20 z-0"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1682124672287-522dc636dd83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8?"
                alt="Abstract illustration of a brain with interconnected nodes and lightbulbs representing ideas on a soft blue background"
                className="relative z-10 rounded-xl shadow-xl w-56 md:w-64 lg:w-full lg:h-64 max-w-md mb-6 md:mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
