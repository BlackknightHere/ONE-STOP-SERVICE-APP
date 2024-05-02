import MenuTab from "@/app/components/MenuTab";


export default function Payment(){
return(
<main>
    <div className="flex ml-5 mt-20">
        <a href="/bank">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>การเงิน</h1>
    </div>
    <div className="max-w-3xl mx-auto px-8 ml-2">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-6 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -ml-5 ">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "style={{marginLeft:'10.6rem'}}></div>
            <a href="/bank">
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                    className="relative block  px-6 tab rounded-xl">
                    <span className="text-gray-800 font-semibold">
                        ฝาก/ถอน
                    </span>
                </button>
            </a>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                className="relative block px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    จ่ายค่าเทอม
                </span>
            </button>
        </div>
    </div>

    {/* <div>
        <h1 className=" ml-10 mt-8 font-semibold text-gray-600">
            รายละเอียด
        </h1>
        <div className="p-1 py-52 mt-8 rounded-xl mx-12 bg-gray-100">
            <h1>

            </h1>
        </div>
    </div> */}
    <div className="">
        <h1 className=" ml-10 mt-8 font-semibold text-gray-600">
            รายละเอียด
        </h1>
        <div className="flex justify-center mt-5">
            <img src="/payment.png" alt="" />

        </div>
        <div className="flex justify-center mt-4">
            <input type="submit" value="ยืนยัน" id="submit"
                className="p-1 px-20 bg-gray-300 text-black font-bold rounded-xl" />
        </div>

    </div>
    <MenuTab></MenuTab>

</main>
)
}