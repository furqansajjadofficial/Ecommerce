import React from "react";
import { Carousel } from "../components";

import FirstImage from "../assets/Crousel/First.jpeg";
import SecondImage from "../assets/Crousel/Second.jpeg";
import ThirdImage from "../assets/Crousel/Third.jpeg";
import FourthImage from "../assets/Crousel/Fourth.jpeg";
import FifthImage from "../assets/Crousel/Fifth.jpeg";

function Home() {

  return (
    <div className="w-full">
      <Carousel />
    </div>
  );
}

export default Home;
