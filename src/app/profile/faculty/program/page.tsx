/* eslint-disable @next/next/no-img-element */

import React from "react";
import MenuTab from "@/app/components/MenuTab";
export default function program(){
return(
<div>
    <MenuTab />
    <div className='flex ml-5 mt-20'>
        <a href="/profile/education/study_result">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>โปรแกรม</h1>
    </div>

    <div className="max-w-3xl mx-auto px-8">
        <div className="max-w-3xl mx-auto px-8">
            <div role="tablist" aria-label="tabs"
                className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-8 -ml-9 mt-8 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-200 -mx-1">
                <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-39  mt-1 rounded-xl bg-white  ">
                </div>
                <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={0}
                    className="relative block  px-6 tab rounded-xl">
                    <span className="text-gray-800 font-semibold">
                        คณะ
                    </span>
                </button>
                <a href="/profile/faculty/program">
                    <button role="tab" aria-selected='true' aria-controls="panel-1" id='tab-1' tabIndex={-1}
                        className="relative block px-6 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            โปรแกรม
                        </span>
                    </button>
                </a>

            </div>
        </div>

        <div role="tab-panel " id="panel-1" className="w-100 h-28 p-3 mt-8 bg-gray-300 rounded-xl">
            <h1 className="text-sm font-semibold mt- ml-2 ">
                AdodeCreative Cloud
            </h1>
            <p className="text-xs mt-1 ml-2">
                รายละเอียด
            </p>

            <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/a/d/adobe_with_txt.png"
                alt="Adobe" className="fotorama__img--full size-16 h-13 w-20 ml-32 -mt-3" />

            <button
                className="relative w-20 h-6 grid grid-cols-2 gap-12 items-center px-10 -mt-9 ml-56 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-blue-300 -mx-1">
                <span className="text-blue-700 font-medium text-xs -ml-7">
                    Download
                </span>
            </button>



        </div>
        <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-300 rounded-xl h-28">
            <h1 className="text-sm font-semibold mt- ml-2 ">
                Azure dev toolfor teaching
            </h1>
            <p className="text-xs mt-2 ml-2">
                รายละเอียด
            </p>
            <img src="/Azure.png" alt="Azure" className="fotorama__img--full size-14 h-13 w-15 ml-36 -mt-3" />
            <button
                className="relative w-20 h-6 grid grid-cols-2 gap-12 items-center px-10 -mt-9 ml-56 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-blue-300 -mx-1">
                <span className="text-blue-700 font-medium text-xs -ml-7">
                    Download
                </span>
            </button>

        </div>
        <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-300 rounded-xl h-28">
            <h1 className="text-sm font-semibold mt- ml-2 ">
                Microsoft 365
            </h1>
            <p className="text-xs mt-2 ml-2">
                รายละเอียด
            </p>
            <img src="/microsoft365.png" alt="microsoft365"
                className="fotorama__img--full size-14 h-13 w-15 ml-36 -mt-3" />
            <button
                className="relative w-20 h-6 grid grid-cols-2 gap-12 items-center px-10 -mt-9 ml-56 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-blue-300 -mx-1">
                <span className="text-blue-700 font-medium text-xs -ml-7">
                    Download
                </span>
            </button>
        </div>
        <div role="tab-panel " id="panel-1" className="p-3 mt-5 bg-gray-300 rounded-xl h-28">
            <h1 className="text-sm font-semibold mt- ml-2 ">
                Matlab
            </h1>
            <p className="text-xs mt-2 ml-2">
                รายละเอียด
            </p>
            <img src="https://lh3.googleusercontent.com/fife/ALs6j_EN_GUVWH3ztNtrNDWUetBdsXIOESXd0cJVBPxxP8ok4ycgmYfqoUn3x1GTNKgfkZaxM61xOoxc1rVKsL-db0EwPitcxWApljvEEDK7jvRzg8Wj_iUuxPnm4E3QxdNlx69l_fBvkOdwpV0RaE1riwt5gBk6jxJHy__7AEJh-5mbRWZpmtWndz71YhxaHN53IMguLgCU689_wttvPshA9EibJ7_CKGA_f4mP46UBwJzRuTh3Wg0wFPvj5W4x7krUmR2lU1ZT2Rkr0C51giaiEHB5h9FwKwK686OPZllum115rPAvT1Tbp29s-JZMRntVdPzZ1GfnnQArIw9nkc8DT0mr9q3l4i2LQngkh0f4Rj7SK3corn-9gsIXXqVYaGeeIJXGFYroJUhtwt5c-Q79dbM-_ARyR9XiIkdPcqEGOQB4JWN3AjR4dT2TmT8QFiJuYGQjELouar9wqm7dGJIyWA9ME5-v_8X6vopsFALxvsw9hpBir_WUm9NHf_L1Y9y7OySgpYOvuLJCrHlwh5s_lUWDpS2ftUfMH2Ir9ETrMOsmriKCtSmvws6t_OGpl_uigHonmla6SFk7MugO3hWOVyKKoVrhAJVAfXVRO7oZg9nT6n4pSMdFgj8K79ASeIeB2thVDJzezmVVHKLMWlOAvZmeq-5Qg0HkaGR2hnc5c1V_6-kJV--ADxXKzVarGB9g3rGUI32vEHEES2t0VBNGBFGt-NUw5MPSo2UWS_DbOCTwBAF5K46ycdJxxVSRaYc_TjO3HS9v8xZkkd9xC4U5ZNi__f7pyFzAMGqoy9UykaDTK3tNYMVV-5Gw5dMLxbp5UbRUKxs8oTHWPCFyoQ6UADPHoip4x5XQZZ94b44ij-PoZEY4pTIbP2e42gN7FMWTS08UY59nR5boKvMhBqRD3zXDqoHyF8SYreJlYpMawrn6pq769XUwe2itZMJT5olX6qwP--8yLoxcNq5XtNAdQGVU5XJxhddudXt3kXg-uoxguyYHruVvhKSAs7WFzf_9CV_CQEuJLfbzvuT2iB2pweQt3TrRdv1W4csAJx6enG2Dvub-u8d_fRtnN_xJ1x8rm4TZZooRVtk4NChhPP-Hm0iMqDop-WaPJtymrLgv8WVOCPxB0qqxOBxE1_H-e5v-Z5bkTu7RWg4nautQTXxDiWwaHLTjAEUjzNLSLXJS0gSfD8LBGL9d3jutQhzy5eRyju3BuYGz3mVfM-tY9Bo9P6EowIxalQl0rFD26G-3YV5GYVY_pC4xuHyszywG6QyoPldFs4Qqz5BDwazPN1RPm2ARuUT7cDrwwxkpfNrD3BxsmoqyI62wNA9ZNmOqbeNW011XUbSsojZOvs8LJ2VwPUytoa2eG-HBK4-OLnkE9NB5qq6ZGILR6Xg4JpeT-yL7K-nuTy0NXtKuckRBZCquo6omNdRE3e2xGfXMYK3oFY_zrfD49Pq1bPeRSR0OKj_MCmhYv-mg3vBl-cTST7OJ2YHI7wr8jD6gLguxzwv9w-ijaoQlHh-LDjqPL94_SM2yLg6XKwYNg6RUYCQRT4U71NO41mviJCfbJXXQnWcx5wg-LLxOtRaaeXn4eUcDUbi4KvZqlTuOmlo6C5ViQCSjmDm9ES3UgwhAsGAYGZ6CzUHUTimkeIrBGr6_Vd3CUGo86y_D_BCWUjd4CtZ5wWxHsH0iCDgqWcpPrQgsLZg8flLvmMMRLgXxkX5izc0=w1279-h1371"
                alt="matlab" className="fotorama__img--full size-14 h-13 w-15 ml-36 -mt-3" />
            <button
                className="relative w-20 h-6 grid grid-cols-2 gap-12 items-center px-10 -mt-9 ml-56 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-blue-300 -mx-1">
                <span className="text-blue-700 font-medium text-xs -ml-7">
                    Download
                </span>
            </button>
        </div>



    </div>


</div>



)
}