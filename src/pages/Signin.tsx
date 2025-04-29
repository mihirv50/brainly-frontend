import { useRef } from "react";
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
      const signinData = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/V1/signin`, {
          username,
          password,
        });
        const jwt = response.data.token
        localStorage.setItem("token",jwt);
        navigate("/dashboard")
      };
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl  outline-none border-gray-200 min-w-48 flex flex-col p-8">
        <h1 className="font-bold text-center text-2xl mb-4">Sign In</h1>
        <Input ref={usernameRef} placehloder="username" />
        <Input ref={passwordRef} placehloder="password" />
        <div className="flex justify-center mt-4">
          <Button onClick={signinData} loading={false} variant="primary" size="md" text="Signin" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
