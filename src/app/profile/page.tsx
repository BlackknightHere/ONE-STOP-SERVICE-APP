import React, { useState } from 'react'
import MenuTab from '../components/MenuTab';
import MenuSection from '../components/Menusection';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
//const page = async () => {
  // const docRef = doc(db, "student", "uGy8F7HeWVgbRJDq1sPdsk5jAI23");
  // const docSnap = await getDoc(docRef);
  // let sid: string | undefined;
  // let name: string | undefined;
  // let major: string | undefined;

  // const student = docSnap.data();
  // if (student) {
  //     sid = student.id;
  //     name = student.name;
  //     major = student.major;
      // You can use sid, name, major here
//   } else {
//       console.log("Data is undefined");
//   }
// }
export default async function UserProfile() { // Using a descriptive tag  
  const docRef = doc(db, "student", "uGy8F7HeWVgbRJDq1sPdsk5jAI23");
  const docSnap = await getDoc(docRef);
  let sid: string | undefined;
  let name: string | undefined;
  let major: string | undefined;

  const student = docSnap.data();
  if (student) {
      sid = student.id;
      name = student.name;
      major = student.major;
  }
    return(
    <main className="flex flex-col">  {/* Main container as column */}
      <a href="/profile/profile_detail">
        <div className="bg-yellow-400 py-3 mx-2 mt-20 rounded-xl flex items-center">
          <img src="profile.png" className="ml-2 mt-1 mr-4" alt="Profile Picture" />
          <div className="flex-grow">
            <h3 className="font-inter text-black text-xl ">{name}</h3>
            <p className="font-inter text-black text-sm">{sid}</p>
            <p className="text-black text-sm font-inter">{major}</p>
          </div>
        </div>
      </a>
      <div className='mt-4'>
        <h1 className="text-xl font-bold ml-2">Main Menu</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="การศึกษา" icon="education.png" link='/profile/education' /> {/* Using a reusable MenuSection component */}
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="คณะ" icon="faculty.png" link='/profile/faculty'/>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="สถิติ" icon="statistic.png" link='/profile/statistics' />
        <hr className="h-4 font-bold mt-2" />
      </div>
      <div className='mt-1'>
        <h1 className="text-xl font-bold ml-2">Favourite</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ชมรม" icon="/clubicon.png" link='/profile/entertainment/club'/> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="Entertainment" icon="/entertainmenticon.png"link='/profile/entertainment' /> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="Tu Blog" icon="/blog.png" link='/profile/entertainment/tu_blog' /> 
        <hr className="h-4 font-bold mt-2" />
      </div>
      <div className='mt-1'>
      <h1 className="text-xl font-bold ml-2">Annoucement</h1>
        <div className='flex justify-center mx-7 mt-5 '>
        <img src="/news1.jpg" alt="news" className='rounded-xl' />

        </div>
        <h1 className="text-xl font-bold ml-2 mt-4">Unniversity news</h1>

        <div className='flex flex-row justify-around -gap-6'>
                <div className=' bg-neutral-100 px-14 py-12 rounded-3xl mt-6 ml-2  '>
                  <div className=''>
                  <img src="/news4.png" alt="assignment" className='absolute -ml-11 -mt-8 rounded-xl'  width={90} height={200}/>

                  </div>
                </div>
                <div className=' bg-neutral-100 px-14 py-12 rounded-3xl mt-6 ml-2  '>
                  <div className=''>
                  <img src="/news5.png" alt="assignment" className='absolute -ml-11 -mt-8 rounded-xl'  width={90} height={200}/>

                  </div>
                </div>
                <div className=' bg-neutral-100 px-14 py-12 rounded-3xl mt-6 ml-2  '>
                  <div className=''>
                  <img src="/news6.png" alt="assignment" className='absolute -ml-11 -mt-8 rounded-xl'  width={90} height={200}/>

                  </div>
                </div>
              
            </div>
      </div>
      {/*เดี๋ยวมาดูต่อว่าต้องใช้ flexไหน*/}
      <div className='py-12'>

      </div>
      <div className=''>
        <MenuTab/>

      </div>

    </main>
    )
}
