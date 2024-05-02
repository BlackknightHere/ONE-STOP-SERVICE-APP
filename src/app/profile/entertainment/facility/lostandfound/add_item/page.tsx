import MenuTab from "@/app/components/MenuTab";

export default function Add(){
return(
<main>
    <div className="flex ml-5 mt-20">
        <a href="/profile/entertainment/facility/lostandfound">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>Lost and Found</h1>
    </div>
    <div className='flex mt-5'>
        <h1 className='text-sm mt-4 ml-8'>เพิ่มรายละเอียดของสิ่งของ / รูป</h1>
    </div>
    <div className="p-1 bg-gray-100 py-24 mx-8 my-5 rounded-xl mt-5 ">
        <div className="ml-5 absolute -mt-20">
            <h1>
                ชื่อสิ่งของ
            </h1>
        </div>
        <div className="flex justify-center -mt-10">
            <div className="p-1 bg-white px-32 py-28 rounded-xl ">
                <img src="/add_circle.png" alt="add_circle" width={40}/>
                <div>
                    <h1 className="">เพิ่มรูป</h1>
                </div>
            </div>
        </div>
        <div className="mt-8">
            <h1 className="ml-5 absolute -mt-3">
                ตำแหน่งที่หาย
            </h1>
            <input type="text" name="text" id="text" className="bg-white pr-24  ml-3 rounded-xl absolute mt-5" />
        </div>
    </div>
    <div className="flex justify-center mt-10 ">
            <input type="submit" value="ยืนยัน" id="submit"
                className="p-1 px-20 bg-gray-300 text-black font-bold rounded-xl" />
        </div>
        <MenuTab></MenuTab>
</main>
)
}