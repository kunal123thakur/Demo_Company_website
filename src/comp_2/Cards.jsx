import React, { useState } from 'react'

function Cards() {
    const data =[{img:"public/img/vmad.png",color:"{bg-[#004D43]} bg-white",button:"Internships"},
    {img:"https://ochi.design/wp-content/uploads/2022/04/logo002.svg",color:"bg-[#212121]",button:"hello buddy"},
    {img:"https://ochi.design/wp-content/uploads/2022/04/logo003.png",color:"bg-[#212121]",button:"@2018-2022"}]
    const [val,setval] = useState(data)

  return (
    <div className='h-screen bg-black py-24 px-12 w-full flex gap-4 '>
        {val.map((item,index)=> ( 
            // <h1>hello</h1>
            <div key={index} className={`h-[60vh] bg-white rounded-lg overflow-hidden ${index===0 ? "w-1/2 bg-green-900":"w-1/4 bg-red-200"}`}>
                <div className={`w-full h-full flex flex-col gap-4 ${item.color} p-8`}>
                    <div className=' w-full h-[80%] flex items-center justify-center '>
                        <img className={`${index===2 ?"w-24 h-24":""}` } src={item.img} alt="" />

                    </div>
                    <div className='border border-zinc-400 w-fit py-1 px-4 rounded-full font-extrabold'>
                        {item.button}
                    </div>


                </div>
            </ div>
))}
    </div>
  )
}

export default Cards