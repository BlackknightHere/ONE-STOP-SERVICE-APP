import MenuTab from "@/app/components/MenuTab";

export default function Gogo(){
return(
<main>
    <div className="flex ml-5 mt-20">
        <a href="/profile/entertainment/facility">
            <img src="/back.png" alt="back" width={40} height={30} className='' />
        </a>
        <h1 className='font-bold text-2xl mt-1'>GoGO</h1>
    </div>
    <div className="flex justify-center mt-5">
        <img src="/gogo.png" alt="anywheel" />

    </div>
    <MenuTab></MenuTab>

</main>

)
}