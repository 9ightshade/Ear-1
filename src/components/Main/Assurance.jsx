import noise from "../../assets/Iconfilter.svg";
import features from "../../assets/Features.svg"
import BlackMatte41 from "../../assets/Black-Matte-4-1.svg"
import handphone from "../../assets/hand-phone.png"
import { Cta } from "../Hero/Cta";
export const Assurance = ()=>{

return(


<>

<section className="md:pl-[3em]" >

<div className="flex justify-end py-[2em] pr-[3em] " >
<button className="max-w-[40px]" >
        <img src={noise} alt="chat" className="w-full" />
    </button>
</div>


<h2 className="text-[#007640] text-center pb-[2em] md:pb-[0] text-[2rem] md:w-[30%] font-[500]" >
The ear1 assurance
</h2>
</section>

<section className="md:flex items-center justify-center px-[5em]" > 
<div>
    <img src={features} alt="" />
</div>

<div>
    <img src={BlackMatte41} alt=""/>
</div>





</section>



<div className="bg-[#029F58] w-[80%] mx-auto flex items-center rounded-[30px] " >
<div className="pt-[3em] pl-[2em] " >
    <img src={handphone} alt="" />
</div>
<div className=" px-[2em] " >

<h2 className="text-white font-bold text-[2rem]" >
Get ahead of your game
</h2>
<p className="text-white">
Save time and effort. Ear1 is your best choice.
</p>
<div className="flex gap-[2em]  " >
    <Cta/>
</div>
</div>


</div>


</>

)


}