/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"
export default function friend(){
return(
<div>
    <MenuTab />
    <div className="flex ml-5 mt-20">
        <a href="/chat">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>เพื่อน</h1>
    </div>

    <div className="max-w-3xl mx-auto px-8">


        <div className="text-gray-400 mt-4 ">รายชื่อ</div>
        <a href="/chat/friend/somsri">
            <div role="tab-panel " id="panel-1" className="p-3 mt-2 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    สมศรี BTS
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
        <a href="/chat/friend/tony">
            <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    Tony
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
        <a href="/chat/friend/rutana">
            <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    รัตนา พาตลุย
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
        <a href="/chat/friend/john">
            <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    จอร์น โนอาร์
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
        <a href="/chat/friend/somsak">
            <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    สมศักด์ ฟัคกิ้ง
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
        <a href="/chat/friend/sawad">
            <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    สวัสด์ จันทร์อังคาร
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
        <a href="/chat/friend/shalong">
            <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
                <h1 className="font-semibold ml-2 ">
                    เฉลิม ฉลอง
                </h1>
                <p className="text-xs mt-2 ml-2">
                    รายละเอียด
                </p>
            </div>
        </a>
    </div>
    <div className="py-16"></div>
</div>



)
}