
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Brand from "./sections/Brand";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import "./styles/main.scss";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="Section"><Hero /></section>
        <section id="brand" className="Section"><Brand /></section>
        <section id="products" className="Section"><Products /></section>
        <section id="reviews" className="Section"><Reviews /></section>
        <section id="contact" className="Section"><Cta /></section>
      </main>
      <Footer />
    </>
  );
}
