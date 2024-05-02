/* eslint-disable @next/next/no-img-element */

import React from "react";
import MenuTab from "@/app/components/MenuTab";
export default function Test(){
return(
<div>
    <MenuTab />
    <div className='flex ml-5 mt-20'>
        <a href="/class">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>ตารางสอบ</h1>
    </div>
    {/* <img
        src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihbt7ypriSK4h31gVno-7egf8nSZsr4wm9Z5dGLESRGpy1-4RJ6MEJZlOy0t0LedCAdRTOSp6OeJS-5H8vvh1ZrW8OnbMpH0C_s=w2560-h1398-v0"
        alt="ตารางเรียน" className="mt-8" /> */}
    <div className="max-w-3xl mx-auto px-8">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-7 -ml-3 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-200 ">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6  mt-1 rounded-xl bg-white  " style={{marginLeft:'10.6rem'}}></div>
            <a href="/class/all_class">
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ตารางเรียน
                </span>
            </button>
            </a>
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                    className="relative block px-6 tab rounded-xl">
                    <span className="text-gray-800 font-semibold">
                        ตารางสอบ
                    </span>
                </button>
        </div>
    </div>

    <div className="flex justify-center"> 
    <img src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihacQG7XREU_WMGCN6yfdaQiiDkGzPGMBEk-bELhHg4EgzorYwWo86WpFrmebCd7tzvGoe32naPHk0cWCRMWKv2hWSKuVvOpEyI=w1276-h1395-v0"
        alt="รูปตารางสอบ" className="mt-10 " width={350}/>
    </div>










</div>







)
}