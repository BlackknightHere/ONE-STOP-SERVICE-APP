'use client'

import React, { useEffect, useState } from 'react';
import MenuTab from '../components/MenuTab';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

interface ClassDetails {
    code: string;
    name: string;
    section: string;
    studentCount: number;
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
                console.log("Fetched data:", data);  // Log the fetched data
                if (data.classs && typeof data.classs === 'object') {
                    const classesArray = Object.values(data.classs);
                    console.log("Transformed array:", classesArray);  // Log the transformed array
                    setClasses(classesArray as ClassDetails[]);
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
        <div>
            <div className='expand_class flex flex-row mt-8 ml-10'>
                <img src="expand_more.png" alt="expand_more" />
                <h1 className='ml-1 font-semibold'>Class</h1>
            </div>
            {Array.isArray(classes) && classes.map((cls, index) => (
                <div key={index} className="rounded-2xl ring-gray-400 ring-1 flex justify-center items-center py-11 shadow-gray-200 shadow-lg">
                    <div className='bg-green-700 py-10 px-0.5 -ml-8 mr-5 -mt-5 rounded-xl'></div>
                    <div className='flex flex-row'>
                        <p className='font-semibold text-xs'>
                            <span className='font-bold text-2xl'>{cls.code}</span><br />
                            {cls.name}<br />
                            {cls.section}
                        </p>
                    </div>
                    <img src="profile3.png" alt="profile" className='ml-2 mr-32 absolute mt-28 mb-0.5' width={15} />
                    <p className='absolute mt-28 font-semibold text-xs mr-20'>{cls.studentCount}</p>
                    <img src="teacher.png" alt="teacher" width={15} className='absolute mt-28 ml-2 mr-15' />
                    <p className='absolute mt-28 ml-24 mr-2 font-semibold'>{cls.teacher}</p>
                </div>
            ))}
            <MenuTab />
        </div>
    );
}
