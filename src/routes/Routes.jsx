import React from "react";
import News from "../components/pages/News.jsx";
import Main from "../components/pages/Main";
import NotFound from "../components/pages/notFound/NotFound.jsx";
import Profile from "../components/pages/profile/Profile.jsx";
import Login from "../components/pages/Login";
import FormRegister from "../components/organisms/formRegister/FormRegister.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/templates/Layout.jsx";

const Routeses = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="news" element={<News />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<FormRegister />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default Routeses;
