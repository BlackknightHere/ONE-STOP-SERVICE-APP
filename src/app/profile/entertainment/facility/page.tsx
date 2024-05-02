import MenuTab from "@/app/components/MenuTab";
import MenuSection from "@/app/components/Menusection";


export default function Facility(){
    return(
        <main>
            <div className="flex ml-5 mt-20">
                <a href="/profile">
                    <img src="/back.png" alt="back" width={40} height={30} className='' />
                </a>
                <h1 className='font-bold text-2xl mt-1'>สิ่งอำนวยความสะดวก</h1>
            </div>
            <div className='mt-6'>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Lost and Found" icon="/lostandfoundicon.png" link='/profile/entertainment/facility/lostandfound' /> {/* Using a reusable MenuSection component */}
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="TU Booking" icon="/tubookingicon.png" link='/profile/entertainment/facility/tu_booking'/>
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Anywheel" icon="/anywheelicon.png" link='/profile/entertainment/facility/anywheel' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="TU Blog" icon="/blog.png" link='/profile/entertainment/tu_blog' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Baan TU" icon="/baantuicon.png" link='/profile/entertainment/facility/baantu' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="GOGO" icon="/gogoicon.png" link='/profile/entertainment/facility/gogo' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Uber TU" icon="/ubericon.png" link='/profile/entertainment/facility/uber' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="ระบบขนส่ง" icon="/transporticon.png" link='/profile/entertainment/facility/transport' />
                <hr className="h-4 font-bold mt-2" />
                <MenuSection title="Libary" icon="/library.png" link='/profile/entertainment/facility/tulibrary' />
                <hr className="h-4 font-bold mt-2" />
                <MenuTab></MenuTab>
            </div>
        </main>
    )
}