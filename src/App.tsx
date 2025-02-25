import React from "react";
import Sidebar from "./Components/ui/Sidebar";
import Hero from "./Components/ui/Hero";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen  bg-[#EBEBEB] flex">
        <Sidebar />
        <Hero/>
      </div>
    </>
  );
};

export default App;
