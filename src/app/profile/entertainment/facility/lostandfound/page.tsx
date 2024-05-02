import MenuTab from "@/app/components/MenuTab";

export default function LostAndFound(){
return(
<main>
    <div className="flex ml-5 mt-20">
        <a href="/profile/entertainment/facility">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Lost and Found</h1>
    </div>
    <div className='flex mt-5'>
        <h1 className='text-sm mt-4 ml-8'>เพิ่มรายละเอียดของสิ่งของ / รูป</h1>
        <a href="/profile/entertainment/facility/lostandfound/add_item">
        <img src="/add_circle.png" alt="add_circle" width={30} className=' ml-28 mt-2' />
        </a>
    </div>
    <div className="bg-gray-200 p-2 mx-6 rounded-xl mt-8 pb-3">
        <h1 className="font-bold text-lg ml-4">
            Airpods 3
        </h1>
        <h1 className="text-sm ml-4 mt-1">
            เคสสีฟ้าลายโดเรม่อน
        </h1>
        <div className="flex justify-center">
            <img src="/doraemon.png" alt="doraemon" className="mt-2 mb-2" />
        </div>
    </div>
    <div className="bg-gray-200 p-2 mx-6 rounded-xl mt-5 pb-3">
        <h1 className="font-bold text-lg ml-4">
        กระเป๋าตัง
        </h1>
        <h1 className="text-sm ml-4 mt-1">
        สีนำ้ตาลมีตุ๊กตากบห้อยอยู่
        </h1>
    </div>
    <MenuTab></MenuTab>
</main>
);
}