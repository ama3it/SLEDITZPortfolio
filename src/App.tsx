import "./App.css"; 
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="font-poppins text-[15px] text-slate-900 dark:text-white dark:bg-slate-900">
      <Nav />
      <Hero/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
