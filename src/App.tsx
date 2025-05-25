import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import OurProject from "./component/Article";
import Footer from "./component/Footer";
import Product from "./component/Product";
import Course from "./component/Course";

export default function App() {
  return (
    <>
    

      <Navbar />
      <Header />
      <Course />
      <OurProject />
      <Product />
      <Footer />
    </>
  );
}
