import React from "react";
import Sidebar from "./Components/ui/Sidebar";
import Hero from "./Components/ui/Hero";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#F9FBFC] flex">
        <Sidebar />
        <Hero/>
      </div>
    </>
  );
};

export default App;
