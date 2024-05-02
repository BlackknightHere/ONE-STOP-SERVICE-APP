/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"

export default function borrow(){
    return(
        
        <div>
            <MenuTab/>
            <div className="flex ml-5 mt-20">
                <a href="/profile/entertainment/facility/tulibrary">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>Library</h1>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">

                <div className="flex justify-center mt-5">
                    <div className="text-center text-green font-bold">
                        <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '130px' }}>
                            <img src="/Book10.jpg" alt="book10" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* รายละเอียด */}
                <div className="bg-gray-200 mt-14 rounded-xl px-7 py-5" style={{height: '400px'}}>
                    <div className="text-sm" style={{ color: 'red' }}>Title:</div>
                    <div className="text-sm text-gray-500" >โครงการศึกษาตลาดนักท่องเที่ยวต่างประเทศกลุ่มคุณภาพสูง: อิตาลี และสเปน: อิตาลี: รายงานฉบับสมบูรณ</div>
                    <div className="text-sm mt-4" style={{ color: 'red' }}>Contributors:</div>
                    <div className="text-sm text-gray-500">บริษัทอินทัช รีเสิร์ช แอนด์ คอนซัลแทนซี่การท่องเที่ยวแห่งประเทศไทย</div>
                    <div className="text-sm mt-4" style={{ color: 'red' }}>Publisher:</div>
                    <div className="text-sm text-gray-500">การท่องเที่ยวแห่งประเทศไทย</div>
                    <div className="text-sm mt-4" style={{ color: 'red' }}>Date:</div>
                    <div className="text-sm text-gray-500">2018</div>
                    <div className="text-sm mt-4" style={{ color: 'red' }}>ID TU Digital:</div>
                    <div className="text-sm text-gray-500">137620</div>
                </div>

                <div className="flex justify-center mt-9">
                    <a href="/profile/entertainment/facility/tulibrary/borrow/success">
                        <button 
                            type="button"
                            className="bg-green-500 hover:bg-green-600 text-white font-simple py-2 px-6 rounded-xl">
                            ยืม
                        </button>
                    </a>
                </div>

                
            </div>
            <div className="py-16"></div>
        </div>
        

            
    )
}