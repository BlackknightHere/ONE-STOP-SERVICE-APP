import React from 'react';
import MenuTab from '@/app/components/MenuTab';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';


export default async function UserProfile() { 
  // Using a descriptive tag
  const docRef = doc(db, "student", "uGy8F7HeWVgbRJDq1sPdsk5jAI23");
  const docSnap =  getDoc(docRef);
  let addr: string | undefined;
  let phoneNum: string | undefined;
  const info = (await docSnap).data();
  if(info){
    addr = info.address;
    phoneNum = info.phone;
    console.log(addr, phoneNum)
  } 
  else{
    console.log("data is undefined");
  }
  return (
    <main className="flex flex-col ">  {/* Main container as column */}
        <div className='mt-20'>
            <a href="/profile">
                <img src="/left.png" alt="" className='absolute ml-2'/>
            </a>
            <p className="text-2xl font-bold ml-9 -mt-1">ข้อมูลนักศึกษา</p>
            <div className='flex flex-col justify-center items-center'>
                <img src="/card.png" alt="card" className='mt-10 ' width={250}/>
            </div>
            <div className='bg-gray-300 py-3 mx-5 mt-5 rounded-2xl'>
                <div className='text-left ml-4 -mt-1  text-xs'>
                    <p className='font-bold text-lg'>ที่อยู่</p> <br />
                    <p className='-mt-3'>{addr}</p>

                </div>
            </div>
            <div className='bg-gray-300 py-3 mx-5 mt-5 rounded-2xl'>
                <div className='text-left ml-4 -mt-1  text-xs'>
                    <p className='font-bold text-lg'>เบอร์โทร</p> <br />
                    <p className='-mt-3'>{phoneNum}</p>
                </div>
            </div>
            <MenuTab/>
        </div>
    </main>
  );
}


function MenuSection({ title, icon = null }: { title: any; icon?: any }) {
    return (
      <a href="/profile/education">
        <div className="flex -mt-2 items-center">
        {icon && <img src={icon} className="ml-2" alt={title} />}
        <h1 className="ml-3 font-serif text-lg">{title}</h1>
        <img src="/rectangle.png" className="-mt-1 ml-auto mr-4" />
        <hr className="h-4 font-bold mt-6" />
      </div>
      </a>
    );
  }
  


