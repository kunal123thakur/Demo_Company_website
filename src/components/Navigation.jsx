import React, { useRef } from "react";
import gsap from "gsap";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const navigationRef = useRef(null);
  useEffect(() => {
    const navigationElement = navigationRef.current;
    gsap.fromTo(
      navigationElement,
      { y: 0, paddingTop: "90px", paddingBottom: "60px" }, // Initial state: Move from Y position 100
      { y: 0, duration: 1, ease: "none",paddingTop: "35px", paddingBottom: "35px"  } // Final state: Move to Y position 0
    );
   
    window.addEventListener("wheel", (e) => {

      // console.log(e.deltaY);
      if (e.deltaY > 0) {
        // console.log("up");
        gsap.to(navigationElement, {
        //   transform:'translateX(-200%)',
          duration: 0.2,
          // repeat:-1,
          // ease: "none"
          opacity:0
        });
       
      } else {
        // console.log("down");
        gsap.to(navigationElement, {
            // transform:'translateX(0%)',
            delay:0.1,
            paddingTop:"35px",
            paddingBottom:"35px",
            // repeat:-1,
            // ease: "none",
            opacity:1
        
        });
      }
    });
  });
  return (
    <div ref={navigationRef} id="navigation" className="flex justify-between top-0  !bg-zinc-800/40 backdrop-blur-xl bg-black  fixed w-full  py-6 px-12 z-20 rounded-b-md ">
        <div className="logo">
        <img className="flex items-center relative justify-center  w-[10vw] h-[3vw]" src="public\img\vmad.png" alt="" />
        </div>

        <div className="flex gap-6  text-lg">
            {["home","projects","about","card","contact"].map((item, index)=>{
                // return <Link to={`/${item}`} key={index}>{item}</Link>
                return <h3 to={`/${item}`}  key={index}  className={`font-bold text-xl hover:underline  capitalize ${index=== 4  && "ml-[20vw]"}`}  >{item}</h3>
                
            })}
        </div>
    </div>
  );
}

export default Navigation;