import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import OurProject from "./component/OurProject";
import Service from "./component/Service";
import Footer from "./component/Footer";
import Product from "./component/Product";

export default function App() {
  return (
    <>

        <Navbar />
        <Header />
        <Service />
        <OurProject />
        <Product />
        <Footer />
 
    </>
  );
}
