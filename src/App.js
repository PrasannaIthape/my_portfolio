import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Navbar from "./components/navbar";
import Resume from "./pages/resume";
import Project from "./pages/project";
import Contact from "./pages/contact";

import Footer from "./components/footer";

function App() {
  return (
    //
    <>
      <div>
        <Navbar />
        <Header />
        <About />
        <Resume />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
