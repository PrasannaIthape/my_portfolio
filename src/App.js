import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Navbar from "./components/navbar";
import Resume from "./pages/resume";
import Project from "./pages/project";
import Contact from "./pages/contact";

import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [isProjectVisible, setIsProjectVisible]=useState(false);
  const [isLoading, setIsLoading] = useState(false);  // State to manage loading


   
    const handleProjectClick = () => {
      setIsLoading(true);  
      setIsProjectVisible(true);  
  
      
      setTimeout(() => {
        setIsLoading(false);  // Hide loader after 3 second
  
        // Scroll to the Project component
        const projectElement = document.getElementById("projects");
        if (projectElement) {
          projectElement.scrollIntoView({ behavior: "smooth" });  
        }
      }, 2000);  // 2 seconds delay
    };

    
  return (
    <>
      <div>
      <Navbar onProjectClick={handleProjectClick} />
      <Header />
        {/* <About /> */}
        <Resume />
         {/* Loader */}
         {isLoading && <div className="loader">Loading...</div>}
        {isProjectVisible && <Project />}
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
