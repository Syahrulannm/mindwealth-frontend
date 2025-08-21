// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import PrivateRoute from "./pages/PrivateRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./components/dashboard/AdminRegister";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateArticle from "./pages/admin/CreateArticle";
import EditArticle from "./pages/admin/EditArticle";
import Topbar from "./components/dashboard/Topbar";
import AdminArticle from "./pages/admin/AdminArticle";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/articles/ArticleList";
import ArticleDetail from "./pages/articles/ArticleDetail";
import AdminLayout from "./components/layouts/AdminLayout";
import MainLayout from "./components/layouts/MainLayout";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { faR } from "@fortawesome/free-solid-svg-icons";
library.add(faB, faS, faR);
export default function App() {
  return (
    <main className="bg-slate-50 dark:bg-gray-800">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="admin/register" element={<AdminRegister />} /> */}
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/articles/list"
            element={
              <PrivateRoute>
                <Topbar />
                <CreateArticle />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/articles/create"
            element={
              <PrivateRoute>
                <Topbar />
                <CreateArticle />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <PrivateRoute>
                <Topbar />
                <EditArticle />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}
