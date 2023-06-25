import React from "react";
import Topbar from "../../components/Navbar/Topbar";
import Hero from "../../components/HeroSection/Hero";
import Counter from "../../components/Counter/Counter";
import Services from "../../components/Services/Services";
import Collection from "../../components/Collection/Collection";
import Product from "../../components/products/product";
import Promo from "../../components/Promo/Promo";
import Post from "../../components/Post/Post";
import Contact from "../../components/contact/Contact";
import OtherPost from "../../components/OtherPost/OtherPost";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Services />
      <Collection />
      <Product />
      <Promo />
      <Post />
      <Contact />
      <OtherPost />
      <Footer />
    </div>
  );
};

export default Main;
