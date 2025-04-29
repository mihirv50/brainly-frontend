import Hero from "./Components/ui/Hero";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#EBEBEB]">
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Hero/>}/>

        </Routes>
      </div>
    </>
  );
};

export default App;
