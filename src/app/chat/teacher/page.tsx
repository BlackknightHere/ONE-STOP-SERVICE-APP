/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"
export default function teacher(){
return(
<div>
    <MenuTab />
    <div className="flex ml-5 mt-20">
        <a href="/chat">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>อาจารย์</h1>
    </div>

    <div className="max-w-3xl mx-auto px-8">



        <div role="tab-panel " id="panel-1" className="p-3 mt-10 bg-gray-200 rounded-xl">
            <h1 className="font-semibold ml-2">
                เบอร์โทรศัพท์
            </h1>
            <p className="text-xs mt-2 ml-2">
                0654849845
            </p>
        </div>
        <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
            <h1 className="font-semibold ml-2 ">
                @Line
            </h1>
            <p className="text-xs mt-2 ml-2">
                รายละเอียด
            </p>
        </div>
        <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-200 rounded-xl">
            <h1 className="font-semibold ml-2 ">
                ส่งข้อความาทาง MS TEAM
            </h1>
            {/* <div role="tab-panel" id="panel-1" className="p-3 mt-5 bg-white rounded-xl"></div> */}

            <input role="tab-panel" type="text" required
                className="text-center text-black p-1 mt-5 bg-white rounded-xl w-full" />

        </div>



    </div>
</div>



)
}