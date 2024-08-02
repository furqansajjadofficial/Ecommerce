import React from "react";
import { Header } from "../components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userData = useSelector((state) => state.auth.userData);
  const navLinks = {
    
  }


  return (
    <div>
      <Header />
      <h1 className="text-red-600 text-center text-3xl my-5">
        Hello ! This is dashboard
      </h1>
      <div className="w-full flex justify-between">
        <div className="w-[30%] border-2 border-red-600 h-96 pl-5">
          <h1 className="text-red-600 text-3xl mt-5">This is side Bar</h1>
        </div>
        <div className="w-[69%] border-2 border-blue-600 h-96 text-center">
        <h1 className="text-red-600 text-3xl mt-5">Main content goes here</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
