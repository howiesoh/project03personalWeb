import React from "react";

import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-neutral-50 selection:text-neutral-950">
      <div className="fixed -z-10 top-0 h-full w-full ">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Page1 />
        <About />
        <Tech />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
