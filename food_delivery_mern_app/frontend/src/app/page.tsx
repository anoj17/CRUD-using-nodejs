'use client'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageRoutes } from "./enum/routes.enum";
import HomePage from "../pages/HomePage";
import Menu from "../pages/Menu";
import Navbar from "./components/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from '../pages/Login';
import SignUn from "../pages/SignUp";
import NewProduct from "../pages/NewProduct";

export default function Home() {
  return <>
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={PageRoutes.HOME} element={<HomePage />} />
          <Route path={PageRoutes.MENU} element={<Menu />} />
          <Route path={PageRoutes.ABOUT} element={<About />} />
          <Route path={PageRoutes.CONTACT} element={<Contact />} />
          <Route path={PageRoutes.LOGIN} element={<Login />} />
          <Route path={PageRoutes.SIGNIN} element={<SignUn />} />
          <Route path={PageRoutes.NEW} element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
}
