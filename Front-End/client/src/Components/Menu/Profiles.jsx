import React from "react"
import boy from '../assates/Boy.jpg'
import girl from '../assates/girl.jpg'
import memoji from '../assates/memoji.jpg'
import Yobu from '../assates/Yobu.jpg'
import avatarg from '../assates/avatar2g.jpg'
function Profiles() {
  return (
    <div>
        <div className=" flex flex-wrap justify-between items-center">
           <div>
            <img src={boy} alt="Boy" className="h-12 rounded-full p-1 border-[2px] border-gray-200" />
           </div>
           <div>
            <img src={girl} alt="Boy" className="h-12 rounded-full p-1 border-[2px] border-gray-200" />
           </div>
           <div>
            <img src={memoji} alt="Boy" className="h-12 rounded-full p-1 border-[2px] border-gray-200" />
           </div>
           <div>
            <img src={Yobu} alt="Boy" className="h-12 rounded-full p-1 border-[2px] border-gray-200" />
           </div>
           <div>
            <img src={avatarg} alt="Boy" className="h-12 rounded-full p-1 border-[2px] border-gray-200" />
           </div>
           <div className="h-12 w-12 rounded-full px-2 py-[0.8em] bg-gray-200 text-center items-center jusify-center  ">
            <span className="text-center font-bold" >
                10+
            </span>
           </div>
        </div>
    </div>
  )
}

export default Profiles