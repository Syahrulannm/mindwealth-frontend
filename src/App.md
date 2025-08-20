// mindwealth-admin/src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import PostEdit from "./components/PostEdit";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";

function App() {
  // State untuk menyimpan status login dan username
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    alert("Anda telah keluar.");
    navigate("/login"); // Arahkan pengguna ke halaman login setelah logout
  };

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1>
          <Link to="/">Blog Sederhana</Link>
        </h1>
        <nav className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <span className="bg-gray-200 p-3 rounded-lg text-gray-800">Halo, {username}👋</span>
              <Link to="/dashboard" className="text-white bg-teal-600 p-3 rounded hover:bg-teal-700 transition-smooth">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="bg-teal-600 p-3 rounded hover:bg-teal-700 transition-smooth">
                Keluar
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white bg-teal-600 p-3 rounded hover:bg-teal-700 transition-smooth">
                Masuk
              </Link>
              <Link to="/register" className="text-white bg-teal-600 p-3 rounded hover:bg-teal-700 transition-smooth">
                Daftar
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          {/* Route untuk menampilkan daftar artikel */}
          <Route path="/" element={<PostList />} />
          {/* Route untuk menampilkan detail artikel dengan ID spesifik */}
          <Route path="/post/:id" element={<PostDetail />} />
          {isLoggedIn ? (
            <>
              {/* Route untuk menambahkan artikel baru */}
              <Route path="/new-post" element={<PostForm />} />
              {/* Route untuk mengedit artikel dengan ID spesifik */}
              <Route path="/post/edit/:id" element={<PostEdit />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          ) : (
            <>
              <Route path="/new-post" element={<Navigate to="/login" />} />
              {/* Route untuk mengedit artikel dengan ID spesifik */}
              <Route path="/post/edit/:id" element={<Navigate to="/register" />} />
              <Route path="/dashboard" element={<Navigate to="/login" />} />
            </>
          )}
          {/* Route untuk halaman login */}
          <Route path="/login" element={<AuthForm type="login" />} />
          {/* Route untuk halaman registrasi */}
          <Route path="/register" element={<AuthForm type="register" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
