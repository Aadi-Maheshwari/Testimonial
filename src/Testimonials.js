import { useState } from "react";
import Card from "./Card"
import { FiChevronLeft , FiChevronRight } from "react-icons/fi";
const Testimonials = ( props) => {
  let reviews = props.reviews;
  const [index,setindex] = useState(0);
  function leftshifthandler(){
    if(index-1<0){
      setindex(reviews.length - 1);
    }
    else{
      setindex(index - 1);
    }
  }
  function rightshifthandler(){
    if(index +1 >= reviews.length){
      setindex(0);
    }
    else{
      setindex(index + 1);
    }
  }
  function surprisehandler(){
    let surprise = Math.floor(Math.random() * reviews.length) ;
    setindex(surprise);
  }
  return(
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-7">
      
        <Card review = {reviews[index]}/>
    <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
      <button 
      onClick={leftshifthandler}
      className="cursor-pointer hover:text-violet-500">
        <FiChevronLeft/>
      </button>
      <button 
      onClick={rightshifthandler}
      className="cursor-pointer hover:text-violet-500">
        <FiChevronRight/>
      </button>
    </div>
    <div className="mt-6 ">
      <button
       onClick={surprisehandler}
       className="bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg " >
        Surprise Me
      </button>
    </div>
    </div>
  )
}
export default Testimonials;