/* eslint-disable @next/next/no-img-element */

import React from "react";
import MenuTab from "@/app/components/MenuTab";
export default function Class(){
return(
<div>
    <div className='flex ml-5 mt-20'>
        <a href="/class">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>คลาส</h1>
    </div>
    {/* <img
        src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihbt7ypriSK4h31gVno-7egf8nSZsr4wm9Z5dGLESRGpy1-4RJ6MEJZlOy0t0LedCAdRTOSp6OeJS-5H8vvh1ZrW8OnbMpH0C_s=w2560-h1398-v0"
        alt="ตารางเรียน" className="mt-8" /> */}
    <div className="max-w-3xl mx-auto px-8">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-7 -ml-3 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-200 ">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ตารางเรียน
                </span>
            </button>
            <a href="/class/all_class/test_table">
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                    className="relative block px-6 tab rounded-xl">
                    <span className="text-gray-800 font-semibold">
                        ตารางสอบ
                    </span>
                </button>
            </a>
        </div>
    </div>
    <div className="flex justify-center mt-5">
        <img src="/study.png" alt="study" />

    </div>
    <div className="grid grid-rows-3 grid-flow-col gap-4 mx-5 mt-5 ">
        <div className="rounded-2xl ring-gray-400 ring-1  items-center py-5 shadow-gray-200 shadow-lg ">
            <div className="flex justify-start ">
                <div className="p-1 bg-purple-500 py-19 -mt-5 rounded-l-lg absolute">

                </div>
                <div className="ml-5 -mt-2 ">
                    <h1 className="text-purple-500 font-semibold">SF222</h1>
                    <h1 className="text-xxxs font-semibold mt-2">SOFTWARE ENGINEERING MODELS AND ANALYSIS</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">Yodying Xumsaeng</h1>
                    <h1 className="text-xxs font-semibold mt-3">MON 13.30 - 16.30</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">EGR605-1, RANGSIT</h1>
                    <h1 className="text-xxs font-semibold mt-3">Assignment</h1>
                    <h1 className="text-xxxs font-semibold text-purple-500 mt-0.5">None</h1>
                </div>
            <div>
            </div>
            </div>
        </div>
        <div className="rounded-2xl ring-gray-400 ring-1  items-center py-5 shadow-gray-200 shadow-lg ">
            <div className="flex justify-start ">
                <div className="p-1 bg-blue-500 py-19 -mt-5 rounded-l-lg absolute">

                </div>
                <div className="ml-5 -mt-2 ">
                    <h1 className="text-blue-500 font-semibold">SF210</h1>
                    <h1 className="text-xxxs font-semibold mt-2">PROGRAMMING SKIL /t DEVELOPMENT 1</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">Weerachai Anotaipaiboon</h1>
                    <h1 className="text-xxs font-semibold mt-3">TUE 13.30 - 16.30</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">EGR605-1, RANGSIT</h1>
                    <h1 className="text-xxs font-semibold mt-3">Assignment</h1>
                    <h1 className="text-xxxs font-semibold text-blue-500 mt-0.5"> - excercise 2 ข้อ   Due 24 March</h1>
                </div>
            <div>
            </div>
            </div>
        </div>
        <div className="rounded-2xl ring-gray-400 ring-1  items-center py-5 shadow-gray-200 shadow-lg ">
            <div className="flex justify-start ">
                <div className="p-1 bg-green-500 py-19 -mt-5 rounded-l-lg absolute">

                </div>
                <div className="ml-5 -mt-2 ">
                    <h1 className="text-green-500 font-semibold">CN321</h1>
                    <h1 className="text-xxxs font-semibold mt-2">SOFTWARE PROCESS</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">Yodying Xumsaeng</h1>
                    <h1 className="text-xxs font-semibold mt-3">THU 13.30 - 16.30</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">EGR605-1, RANGSIT</h1>
                    <h1 className="text-xxs font-semibold mt-3">Assignment</h1>
                    <h1 className="text-xxxs font-semibold text-green-500 mt-0.5"> - ทำแอป  Due Final</h1>
                </div>
            <div>
            </div>
            </div>
        </div>
        <div className="rounded-2xl ring-gray-400 ring-1  items-center py-5 shadow-gray-200 shadow-lg ">
            <div className="flex justify-start ">
                <div className="p-1 bg-red-500 py-19 -mt-5 rounded-l-lg absolute">

                </div>
                <div className="ml-5 -mt-2 ">
                    <h1 className="text-red-500 font-semibold">CN311</h1>
                    <h1 className="text-xxxs font-semibold mt-2">OPERATING SYSTEM</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">Piya Techateerawat</h1>
                    <h1 className="text-xxs font-semibold mt-3">TUE 09.30 - 12.30</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">EGR605-1, RANGSIT</h1>
                    <h1 className="text-xxs font-semibold mt-3">Assignment</h1>
                    <h1 className="text-xxxs font-semibold text-red-500 mt-0.5">- คุยกันในกลุ่ม    Due Before Next Lecture</h1>
                </div>
            <div>
            </div>
            </div>
        </div>
        <div className="rounded-2xl ring-gray-400 ring-1  items-center py-5 shadow-gray-200 shadow-lg ">
            <div className="flex justify-start ">
                <div className="p-1 bg-orange-500 py-19 -mt-5 rounded-l-lg absolute">

                </div>
                <div className="ml-5 -mt-2 ">
                    <h1 className="text-orange-500 font-semibold">SF231</h1>
                    <h1 className="text-xxxs font-semibold mt-2">DATA STRUCTURES /t AND ALGORITHMS</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">Weerachai Anotaipaiboon</h1>
                    <h1 className="text-xxs font-semibold mt-3">WED 09.30 - 12.30</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">EGR605-1, RANGSIT</h1>
                    <h1 className="text-xxs font-semibold mt-3">Assignment</h1>
                    <h1 className="text-xxxs font-semibold text-orange-500 mt-0.5"> - ทำแอป  Due Final</h1>
                </div>
            <div>
            </div>
            </div>
        </div>
        
        <div className="rounded-2xl ring-gray-400 ring-1  items-center py-5 shadow-gray-200 shadow-lg ">
            <div className="flex justify-start ">
                <div className="p-1 bg-yellow-500 py-19 -mt-5 rounded-l-lg absolute">

                </div>
                <div className="ml-5 -mt-2 ">
                    <h1 className="text-yellow-500 font-semibold">CN321</h1>
                    <h1 className="text-xxxs font-semibold mt-2">DATA COMMUNICATION AND COMPUTER NETWORKS 1</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">Weerachai Anotaipaiboon</h1>
                    <h1 className="text-xxs font-semibold mt-3">FRI 09.30 - 12.30</h1>
                    <h1 className="text-xxxs font-semibold text-gray-500 mt-0.5">EGR605-1, RANGSIT</h1>
                    <h1 className="text-xxs font-semibold mt-3">Assignment</h1>
                    <h1 className="text-xxxs font-semibold text-yellow-500 mt-0.5">None</h1>
                </div>
            <div>
            </div>
            </div>
        </div>
        
        
        

        {/* <div
            className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">

        </div>
        <div
            className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">

        </div>
        <div
            className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">

        </div>
        <div
            className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">

        </div>
        <div
            className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">

        </div> */}
    </div>
    <div className="p-20 py-14">

        </div>
    <MenuTab/>



</div>



)
}