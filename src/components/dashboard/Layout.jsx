// src/components/dashboard/Layout.jsx
import React, { useState, useEffect } from "react";
import AdminDashboard from "../../pages/AdminDashboard";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div>
      {/* <Topbar toggleMenu={toggleMenu} /> */}
      <AdminDashboard isOpen={isOpen} toggleMenu={toggleMenu} />
      {/* Di sini kamu bisa menambahkan konten utama halaman lainnya */}
    </div>
  );
}
