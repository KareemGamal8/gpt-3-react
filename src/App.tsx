import "design-system/global/global.css";
import AboutUs from "./components/about-us";
import Blog from "./components/blog";
import Companies from "./components/companies";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Possibility from "./components/possibility";
import Register from "./components/register";

function App() {
  return (
    <>
      <Hero />
      <Companies />
      <AboutUs />
      <Features />
      <Possibility />
      <Register />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
