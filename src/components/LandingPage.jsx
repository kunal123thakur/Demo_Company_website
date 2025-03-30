import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const titles = [
        <div className=' {bg-fuchsia-700} flex relative overflow-visible'>
          <div className="pt-20">Welcome to</div>  <span className="text-blue-500  bottom-7  "><h1 className="special-font hero-heading  {bg-black} z-0">
          V<b>MA</b>D
        </h1></span>
        </div>,
        "Technologies",
        // "people",
      ];
      const below_border = [
        "For public and private companies",
        "MSME and ISO certified",
      ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-white pt-1"
    >
      <div className="TextStructure mt-52 px-20">
        {titles.map((title, index) => (
          <div key={index} className="Masker ">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
                  className="mr-[0.5vw] w-[9vw] bg-red-200 rounded-md h-[5vw] relative -top-[0.4]"
                ></motion.div>
              )}
              <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center tracking-tight leading-none py-5 px-20">
        {below_border.map((phrase, index) => (
          <p key={index} className="text-md font-light ">
            {phrase}
          </p>
        ))}

        <div className="start flex gap-5 items-center">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-md  ">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
















// import { motion } from "framer-motion";

// const LandingPage = () => {
//   const titles = [
//     <>
//       Welcome to <span className="text-blue-500">Vmad</span>
//     </>,
//     "Technologies",
//     "people",
//   ];
//   const below_border = [
//     "For public and private companies",
//     "MSME and ISO certified",
//   ];
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-.3"
//       className="w-full h-screen bg-zinc-100 pt-1 bg-gradient-to-b md:bg-gradient-to-r from-purple-400 via-blue-100 to-white"
//     >
//       <div className="TextStructure mt-52 px-20 bg-red-700">
//         {titles.map((title, index) => (
//           <div key={index} className="Masker ">
//             <div className="w-fit flex items-center overflow-hidden">
//               {index === 1 && (
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "9vw" }}
//                   transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
//                   className="mr-[0.5vw] w-[9vw] bg-slate-400 rounded-md h-[5vw] relative -top-[0.4] overflow-hidden "
//                 >
//                   <div className="flex items-center justify-center relative bottom-1">
//                     <img
//                       className="flex items-center justify-center w-[9vw] rounded-md h-[6vw] relative -top-[0.4]"
//                       src="\img\beauti01.png"
//                       alt=""
//                     />
//                   </div>
//                 </motion.div>
//               )}
//               <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold">
//                 {title}
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="p-8 mt-5 bg-slate-500 w-[50vw]">
//         <h2>We provide comprehensive IT solutions tailored to your needs, from web development to machine learning. Join our project-based internships to gain hands-on experience and shape your future in technology!</h2>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;