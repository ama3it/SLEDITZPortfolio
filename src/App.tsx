import { useEffect, useState } from "react";
import "./App.css";
// import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Parallax from "./components/Parallax";
import Pricing from "./components/PricingTable";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Services from "./components/Services";
import SocialButton from "./components/SocialButton";
import ThemeToggle from "./components/ThemeToggle";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
     
      <div className={`font-poppins text-[15px] text-slate-900 dark:text-white dark:bg-slate-900 ${loading ? 'hidden' : ''}`}>
        <Nav />
        <Hero />
        <section className="relative overflow-hidden md:py-24 py-16">
          {/* <About /> */}

          <Services />
          <Projects />

          <Review />
          <Blog />
          <Parallax />
          <Pricing />
          <Contact />
        </section>
        <ThemeToggle />
        <SocialButton />
        <BackToTop />
        <Footer />
      </div>

      {loading ? <Preloader /> : ""}
    </>
  );
};

export default App;
