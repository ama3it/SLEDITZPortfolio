import "./App.css";
import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Parallax from "./components/parallax/Parallax";
import Pricing from "./components/PricingTable/PricingTable";
import Projects from "./components/Projects/Projects";
import Review from "./components/Review/Review";
import Services from "./components/Services/Services";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <div className="font-poppins text-[15px] text-slate-900 dark:text-white dark:bg-slate-900">
      <Nav />
      <Hero />
      <section className="relative overflow-hidden md:py-24 py-16">
        <About />

        <Services />
        <Projects />

        <Review />
        <Blog />
        <Parallax/>
        <Pricing/>
        <Contact/>
      </section>
      <ThemeToggle/>
      <BackToTop/>
      <Footer />
    </div>
  );
};

export default App;
