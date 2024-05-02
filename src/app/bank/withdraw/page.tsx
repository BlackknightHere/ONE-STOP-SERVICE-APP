import MenuTab from "@/app/components/MenuTab";

export default function Deposit(){
return(
<main>
    <div className="flex ml-5 mt-20">
        <a href="/profile/entertainment">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>การเงิน</h1>
    </div>
    <div className="max-w-3xl mx-auto px-8 ml-2">
        <div role="tablist" aria-label="tabs"
            className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-6 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -ml-5 ">
            <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
            <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                className="relative block  px-6 tab rounded-xl">
                <span className="text-gray-800 font-semibold">
                    ฝาก/ถอน
                </span>
            </button>
            <a href="/bank/payment">
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                    className="relative block px-6 tab rounded-xl">
                    <span className="text-gray-800 font-semibold">
                        จ่ายค่าเทอม
                    </span>
                </button>
            </a>

        </div>
    </div>
    <a href="/bank/withdraw">
    <h1 className=" flex flex-row ml-10 mt-8 font-semibold text-gray-600">
        ถอนเงิน
    </h1>
    </a>
    <div className="p-1 bg-gray-100 py-24 mx-8 my-5 rounded-xl mt-5 ">
        <div className="ml-5 absolute -mt-20">
        <h1 >
            จำนวนเงิน
        </h1>
        </div>
        <input type="search" name="text" id="text" className="bg-white pr-24 ml-3 rounded-xl absolute -mt-12" />
        <h1 className="ml-5 absolute -mt-3">
            เลขบัญชี
        </h1>
        <input type="text" name="text" id="text" className="bg-white pr-24  ml-3 rounded-xl absolute mt-5" />
        <div className="mt-16">
            <h1 className="ml-5 absolute -mt-3">
            ชื่อ นามสกุล
            </h1>
            <input type="text" name="text" id="text" className="bg-white pr-24  ml-3 rounded-xl absolute mt-5" />
        </div>
        <div className="mt-32">
            <h1 className="ml-5 absolute -mt-3">
                รหัสนักศึกษา
            </h1>
            <input type="text" name="text" id="text" className="bg-white pr-24  ml-3 rounded-xl absolute mt-5" />
        </div>


    </div>
    <div className="flex justify-center mt-10">
        <input type="submit" value="ยืนยัน" id="submit"
            className="p-1 px-20 bg-gray-300 text-black font-bold rounded-xl" />
    </div>
    <MenuTab></MenuTab>
</main>
)
}