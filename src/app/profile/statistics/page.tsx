/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"
export default function statistics(){
    return(
        <div>
            <MenuTab/>
            <div className='flex ml-5 mt-20'>
        <a href="/profile">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Statisitcs</h1>
    </div>
            
            <div className="max-w-3xl mx-auto px-8">
                
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl"
                    style={{ display: 'flex', flexDirection: 'column', minHeight: '74vh' }}>
                        <h1 className="font-thin ml-2 mt-5">
                            ระบุวันที่ต้องการดู
                        </h1>
                        
                        
                        <input
                            role="tab-panel"
                            type="text"
                            required
                            className="text-center text-black p-1 mt-5 bg-white rounded-xl w-full"
                            />
                           

                        <h1 className="font-thin ml-2 mt-9">
                                นักศึกษาที่ยังศึกษาอยู่ทั้งหมด
                            </h1>

                            <div className="bg-white rounded-xl mt-5" style={{display: 'flex' , flexDirection: 'column' , minHeight: '53vh'}}>
                                
                            </div>




                    </div>
                    
                
            </div>
        </div>
        

            
    )
}
