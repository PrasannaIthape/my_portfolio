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


    // Handle the click event to show/hide the Project component and loader
    const handleProjectClick = () => {
      setIsLoading(true);  // Show loader when the link is clicked
      setIsProjectVisible(true);  // Hide the Project component initially
  
      // Simulate a 3-second loading time
      setTimeout(() => {
        setIsLoading(false);  // Hide loader after 3 second
  
        // Scroll to the Project component
        const projectElement = document.getElementById("projects");
        if (projectElement) {
          projectElement.scrollIntoView({ behavior: "smooth" });  // Smooth scroll to Project component
        }
      }, 3000);  // 3 seconds delay
    };

    
  return (
    <>
      <div>
      <Navbar onProjectClick={handleProjectClick} />
      <Header />
        <About />
        <Resume />
         {/* Loader */}
         {isLoading && <div className="loader">Loading...</div>}
        {isProjectVisible && <Project />}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
