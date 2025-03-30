import gsap from 'gsap';
import React from 'react';

function Card() {
    const handleHover1 = () => {
        gsap.to("#sapna1", {
            y: 0,
            duration: 0.3,
            ease: "none",
            stagger:0.1,
            opacity:1
        });
        gsap.to(".img1",{
            transform: 'scale(1)'
        })
        gsap.to(".bada1",{
            transform:'scale(1.05)'
        })
    }

    const handleHoverExit1 = () => {
        gsap.to("#sapna1", {
            y: 100,
            // duration: 0.1,
            ease: "none"
        });
        gsap.to(".img1",{
            transform: 'scale(1.2)'
        })
        gsap.to(".bada1",{
            transform:'scale(1)'
        })
        
    }
    const handleHover2 = () => {
        gsap.to("#opacity2",{
            opacity:1
        })
        gsap.to("#sapna2", {
            y: 0,
            duration: 0.3,
            ease: "none",
            stagger:0.1,
            opacity:1
        });
        gsap.to(".img2",{
            transform: 'scale(1)'
        })
        gsap.to(".bada2",{
            transform:'scale(1.05)'
        })

    }

    const handleHoverExit2 = () => {
        gsap.to("#sapna2", {
            y: 100,
            // duration: 0.1,
            ease: "none"
        });
        gsap.to("#opacity2",{
            opacity:0
        })
        gsap.to(".img2",{
            transform: 'scale(1.2)'
        })
        gsap.to(".bada2",{
            transform:'scale(1)'
        })
    }

    return (
        <div className='h-full w-full flex px-10 gap-2'>
            {/* bg-red-300 */}
            <div className='  relative w-1/2 h-[85vh] p-2 '>
                <div
                    onMouseEnter={handleHover1}
                    onMouseLeave={handleHoverExit1}
                    className='bada1 relative w-full h-full overflow-hidden rounded-lg    '
                >
                    <img className='img1 w-full h-full object-cover z-1 absolute scale-[1.2] ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
                <div
                     
                    className='text-[#CDEA68] flex font-bold absolute z-20 left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl  overflow-hidden'
                >
                    {"FYDE".split("").map((item, index) => (<span id='sapna1'  key={index} className='inline-block opacity-0 '>{item}</span>))}
                </div>
            </div>
            {/* bg-red-300 */}
            <div className=' relative w-1/2 h-[85vh] p-2 '>
                <div
                    onMouseEnter={handleHover2}
                    onMouseLeave={handleHoverExit2}
                    className='bada2 relative w-full h-full overflow-hidden rounded-lg    '
                >
                    <img className='img2 w-full h-full object-cover z-1 absolute scale-[1.2] ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
                <div
                    id='opacity2'
                    className='text-[#CDEA68] flex font-bold absolute z-20 right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-8xl  overflow-hidden opacity-0'
                >
                    {"VISE".split("").map((item, index) => (<span id='sapna2'  key={index} className='inline-block opacity-0 '>{item}</span>))}
                </div>
            </div>
            {/* <div className='bg-red-300 relative w-1/2 h-[85vh] p-2 '>
                <div className='relative w-full h-full overflow-hidden rounded-lg'>
                    <img className='w-full h-full object-cover z-1 absolute' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
                <div className='text-[#CDEA68] font-bold opacity-0 absolute z-20 right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-6xl'>VISE</div>
            </div> */}
        </div>
    );
}

export default Card;