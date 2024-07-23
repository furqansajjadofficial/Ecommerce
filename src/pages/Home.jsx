import React from "react";
import { Carousel , FilterButtons} from "../components";
import { Outlet } from "react-router-dom";


function Home() {

  return (
    <div className="w-full">
      <Carousel />
      <FilterButtons />
      <Outlet />
    </div>
  );
}

export default Home;
