'use client'

import React, { useEffect, useState } from 'react';
import MenuTab from '../components/MenuTab';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

interface ClassDetails {
    code: string;
    name: string;
    section: string;
    student: number;
    teacher: string;
}

export default function Class() {
    const [classes, setClasses] = useState<ClassDetails[]>([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const docRef = doc(db, "user-class", "uGy8F7HeWVgbRJDq1sPdsk5jAI23");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.classs && typeof data.classs === 'object') {
                    const classesArray = Object.values(data.classs) as ClassDetails[];
                    setClasses(classesArray);
                } else {
                    console.log("Field 'classs' is missing or not an object");
                }
            } else {
                console.log("No such document!");
            }
        };
        fetchClasses();
    }, []);

    return (
        <><div className='search-nav mt-20 relative '>
            <img src="search.png" alt="search" className='ml-10 absolute mt-1' />
            <input
                type="search"
                name="search"
                placeholder='Search'
                className='ml-8 pl-10 pr-24 py-1 placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-700 focus:ring-2' />
        </div><div className='bg-gray-100 min-h-screen p-5'>
                <div className='mb-4'>
                    <h1 className='text-2xl font-semibold text-gray-800 mb-3'>Classes</h1>
                    {classes.map((cls, index) => (
                        <div key={index} className="bg-white p-4 shadow rounded-lg mb-4 flex items-center justify-between">
                            <div>
                                <h2 className='text-xl font-bold text-blue-800'>{cls.name}</h2>
                                <p className='text-gray-600'>{cls.section}</p>
                                <p className='text-gray-500'>Code: {cls.code}</p>
                                <p className='text-gray-500'>Teacher: {cls.teacher}</p>
                            </div>
                            <div className='text-right'>
                                <span className='text-green-500 font-bold'>{cls.student} Students</span>
                            </div>
                        </div>
                        ))}
                </div>
                <div className='expand_class flex flex-row mt-8 ml-10'>
                <img src="expand_more.png" alt="expand_more" className=''/>
                <h1 className='ml-1 font-semibold'>Apps</h1>
            </div>
            <div className='flex flex-row justify-around -gap-6'>
                <div className=' bg-neutral-300 px-14 py-20 rounded-3xl mt-5 ml-2  '>
                    <img src="assignment.png" alt="assignment" className='absolute -ml-10 -mt-14'  width={90}/>
                    <p className='absolute -ml-11 mt-9 font-semibold'>Assingment</p>
                </div>
                <a href="/class/all_class">
                <div className=' bg-neutral-300 px-14 py-20 rounded-3xl mt-5  '>
                    <img src="calendar.png" alt="calendar" className='absolute -ml-11 -mt-14'  width={90}/>
                    <p className='absolute -ml-8 mt-9 font-semibold'>Calendar</p>
                </div>
                </a>
                <div className=' bg-neutral-300 px-14 py-20 rounded-3xl mt-5 mr-2 '>
                    <img src="assessment.png" alt="assessment" className='absolute -ml-11 -mt-14'  width={90}/>
                    <p className='absolute -ml-12 mt-9 font-semibold'>Assessment</p>
                </div>
            < MenuTab />               
            </div>
            <div className='placeholder-gray-500'style={{height:90}}>

            </div>
            </div>
            </>
    );
    
}
