import React from 'react';
import MenuTab from '@/app/components/MenuTab';
import MenuSection from '@/app/components/Menusection';

export default function UserProfile() { // Using a descriptive tag
  return (
    <main className="flex flex-col">  {/* Main container as column */}
    <div className="flex ml-5 mt-20">
        <a href="/profile/entertainment/facility">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Baan Tu</h1>
    </div>
        <div className="bg-green-300 py-3 mx-2 mt-5 rounded-xl flex items-center">
          <img src="/profile.png" className="ml-2 mt-1 mr-4" alt="Profile Picture" />
          <div className="flex-grow">
            <h3 className="font-inter text-black text-xl ">นาย โรเลม ยิปซี</h3>
            <p className="font-inter text-black text-sm">6512345678</p>
            <p className="text-black text-sm font-inter">คณะหมูกรอบไข่ดาวพิเศษไข่ดาวเพิ่มข้าว</p>
          </div>
        </div>
      <div className='mt-4'>
        <h1 className="text-xl font-bold ml-2">Favourite</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ค่าเข้า" icon="" link=''/> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="พัสดุ" icon="" link=''/> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="แจ้งเรื่อง" icon=""link='' /> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ข่าวสาร" icon="" link='' /> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="แม่บ้าน" icon=""  link=''/> 
        <hr className="h-4 font-bold mt-2" />
      </div>


      {/*เดี๋ยวมาดูต่อว่าต้องใช้ flexไหน*/}

      <div className=''>
        <MenuTab/>

      </div>

    </main>
  );
}



  


