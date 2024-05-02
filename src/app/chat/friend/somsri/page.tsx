/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"


export default function somsri(){
return(
<div>
    <MenuTab />
    <div className="flex ml-5 mt-20">
        <a href="/chat/friend">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Somsri</h1>
    </div>
    <div className="max-w-3xl mx-auto px-8">

        <div className="p-3 mt-2 bg-gray-200 rounded-xl"
            style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>



            <div className="flex place-items-end  absolute bottom-44 ml-5">
                <img src="/plus.png" alt="Your Image" className="ml-1 absolute mb-0.5" width={25} />
                <input role="tab-panel" type="text" placeholder="Aa" required
                    className="text-left text-black p-1 pl-3 bg-white rounded-xl ml-10 pr-10 " />
                <img src="/microphone.png" alt="mic" width={30} className="ml-1" />
            </div>



        </div>




    </div>
</div>
)
}