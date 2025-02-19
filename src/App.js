import React from "react";
import reviews from "./data";
import Testimonials from "./Testimonials";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-gray-200 justify-center items-center hover:shadow-xl">
      <div className=" text-center ">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-2 mx-auto"></div>
        <Testimonials reviews={reviews}/>
      </div>
  </div>
  )
};

export default App;
