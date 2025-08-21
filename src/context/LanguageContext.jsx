import { createContext, useContext, useState } from "react";

// 1. Buat context
const LanguageContext = createContext();

// 2. Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN"); // default English

  // data Hero tagline bilingual
  const heroText = {
    EN: {
      title: "Nourish Your Mind, Grow Your Wealth",
      subtitle: "Thoughtful perspectives on psychology, personal growth, technology and designing a meaningful life.",
    },
    ID: {
      title: "Asah Pikiranmu, Kembangkan Potensimu",
      subtitle: "Perspektif mendalam tentang psikologi, pengembangan diri, teknologi, dan merancang kehidupan yang bermakna.",
    },
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ID" : "EN"));
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage, heroText }}>{children}</LanguageContext.Provider>;
};

// 3. Custom hook untuk konsumsi context
export const useLanguage = () => useContext(LanguageContext);
