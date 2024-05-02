/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"
export default function complaint(){
    return(
        <div>
            <MenuTab/>
            <div className='flex ml-5 mt-20'>
        <a href="/profile/education/request">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>เขียนคำร้อง</h1>
    </div>
            
            <div className="max-w-3xl mx-auto px-8">
                            
                <div className="text-left text-black p-1 pl-5 mt-8 bg-gray-100 rounded-xl w-full" style={{ height: '580px'}}>
                    
                    <div className="flex">
                        <label htmlFor="คำร้อง" className="mt-5 ml-2">คำร้อง :</label>
                        <select name="คำร้อง" id="คำร้อง" className="ml-2 rounded-xl p-1 pl-3 mt-4" style={{ width: '250px'}}>
                            <option value="คำร้องทั่วไป">คำร้องทั่วไป</option>
                            <option value="คำร้องขอถอนรายวิชาล่าช้ากรณีพิเศษ">คำร้องขอถอนรายวิชาล่าช้ากรณีพิเศษ</option>
                            <option value="คำร้องขอจดทะเบียนล่าช้ากรณีพิเศษ">คำร้องขอจดทะเบียนล่าช้ากรณีพิเศษ</option>
                            <option value="ขอผ่อนผันการชำระค่าใช้จ่ายจดทะเบียน">ขอผ่อนผันการชำระค่าใช้จ่ายจดทะเบียน</option>
                            <option value="ขอคืนค่าธรรมเนียมเต็มจำนวน">ขอคืนค่าธรรมเนียมเต็มจำนวน</option>
                            <option value="ขอคืนค่าธรรมเนียมกึ่งหนึ่ง">ขอคืนค่าธรรมเนียมกึ่งหนึ่ง</option>
                            <option value="ขอจดทะเบียนเกินข้อบังคับมหาวิทยาลัย">ขอจดทะเบียนเกินข้อบังคับมหาวิทยาลัย</option>
                            <option value="ขอจดทะเบียนตํ่ากว่าข้อบังคับของมหาวิทยาลัย">ขอจดทะเบียนตํ่ากว่าข้อบังคับของมหาวิทยาลัย</option>
                            <option value="ขอจดทะเบียนข้ามหลักสูตร">ขอจดทะเบียนข้ามหลักสูตร</option>
                            <option value="ขอจดทะเบียนข้ามสถาบัน">ขอจดทะเบียนข้ามสถาบัน</option>
                            <option value="ขอกักตัวสอบ">ขอกักตัวสอบ</option>
                            <option value="ขอเทียบโอนรายวิชาและหน่วยกิต">ขอเทียบโอนรายวิชาและหน่วยกิต</option>
                            <option value="กรณีขาดสอบ">กรณีขาดสอบ</option>
                            <option value="ขอทบทวนผลการศึกษา">ขอทบทวนผลการศึกษา</option>
                            <option value="ขอเปิดรายวิชากรณีพิเศษ">ขอเปิดรายวิชากรณีพิเศษ</option>
                            <option value="ขอเพิ่มโคตารายชื่อวิชา">ขอเพิ่มโคตารายชื่อวิชา</option>
                            <option value="ขอรับเอกกสารการฝึกงาน">ขอรับเอกกสารการฝึกงาน</option>
                            <option value="ขอคืนสถานภาพนักศึกษา">ขอคืนสถานภาพนักศึกษา</option>
                            <option value="ขอลาพักการศึกษา">ขอลาพักการศึกษา</option>
                            <option value="ขอลาออก">ขอลาออก</option>
                            <option value="ขอปรับโครงสรา้งหนี้กรณีผ่อนผัน">ขอปรับโครงสรา้งหนี้กรณีผ่อนผัน</option>
                            <option value="ขอยื่นแจ้งจบล่าช้า">ขอยื่นแจ้งจบล่าช้า</option>
                            <option value="ขอยกเลิกการยื่นแจ้งจบ">ขอยกเลิกการยื่นแจ้งจบ</option>
                            <option value="ขอย้าย Section">ขอย้าย Section</option>        
                        </select>      
                    </div>
                    
                    <div className="flex">
                        <label htmlFor="ภาคเรียนที่ :" className="mt-5 ml-2">ภาคเรียนที่ :</label>
                        <select name="ภาคเรียนที่" id="ภาคเรียนที่" className="ml-2 rounded-xl p-1 pl-3 mt-4" style={{ width: '50px'}}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="ฤดูร้อน">ฤดูร้อน</option>
                        </select>
                        
                        <h2 className="mt-5 ml-3">ปีการศึกษา :</h2>
                        <input 
                        type="text" 
                        className="mt-4 rounded-xl ml-2 px-3"
                        style={{ width: '70px'}}/>
                    </div>
           
                    <div className="flex">
                        <h1 className="ml-2 mt-5">เรื่อง :</h1>
                        <input 
                        type="text"
                        className="mt-4 rounded-xl ml-2 px-3" style={{ width: '265px'}}/>
                    </div>

                    <h3 className="mt-5 ml-2">มีความประสงค์ (ระบุเหตุผลรายละเอียดประกอบ) :</h3>
                    <input 
                    type="text" 
                    className="mt-3 ml-2 rounded-xl px-3 pb-40" 
                    style={{ width: '310px', verticalAlign: 'top' }}/>

                    <h4 className="mt-5 ml-2">อาจารย์ผู้สอน :</h4>
                    <input 
                    type="text"
                    className="mt-3 ml-2 rounded-xl px-3" 
                    style={{ width: '310px'}}/>

                    <h5 className="mt-5 ml-2">รหัสวิชา :</h5>
                    <input 
                    type="text"
                    className="mt-3 ml-2 rounded-xl px-3" 
                    style={{ width: '310px'}}/>

                </div>

                {/* ปุ่มส่งคำร้อง */}
                <div className="flex justify-center mt-10">
                    <button 
                    className=" bg-yellow-300 hover:bg-yellow-400 w-40 h-8 rounded-xl">
                        ส่งคำร้อง
                    </button>

                </div>











                    
            
            </div>
        </div>
        

            
    )
}