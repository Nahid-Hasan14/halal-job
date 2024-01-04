import React from "react";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
