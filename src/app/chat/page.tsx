/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "../components/MenuTab"
import MenuSection from "../components/Menusection"
export default function chat(){
return(
<div>
    <MenuTab />

    <div className="flex ml-5 mt-20">
        <a href="/profile">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Chat</h1>
    </div>

    <div className='mt-4'>
        
        <h1 className="text-xl font-bold ml-2">การสื่อสาร</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ติดต่อซัพพอร์ต (IT.)" link="/chat/support" /> {/* Using a reusable MenuSection component */}
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ติดต่ออาจารย์" link="/chat/teacher" />
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="เพื่อน" link="/chat/friend" />
        <hr className="h-4 font-bold mt-2" />
    </div>









</div>



)
}