import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm({ type }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  Mengatur endpoint berdasarkan tipe formulir (login atau register)
    const endpoint = type === "register" ? "http://localhost:5000/api/register" : "http://localhost:5000/api/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Tidak perlu Authorization di sini karena ini adalah permintaan login/registrasi
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Tangani respons berdasarkan tipe formulir
      if (type === "login") {
        const data = await response.json(); // Respons login adalah JSON
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        alert("Login berhasil!");
        navigate("/");
      } else {
        // Respons register adalah teks biasa
        alert("Registrasi berhasil! Silakan login.");
        navigate("/login");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const title = type === "register" ? "Daftar Akun Baru" : "Masuk ke Akun Anda";
  const buttonText = type === "register" ? "Daftar" : "Masuk";

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md space-y-2">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-100 p-6 rounded shadow-md space-y-2">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <br />
        <div className="bg-gray-100 p-6 rounded shadow-md space-y-2">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg">
          {buttonText}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}

export default AuthForm;
