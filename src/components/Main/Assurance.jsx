import noise from "../../assets/Iconfilter.svg";
import features from "../../assets/Features.svg"
import BlackMatte41 from "../../assets/Black-Matte-4-1.svg"
export const Assurance = ()=>{

return(


<>

<section className="pl-[3em]" >

<div className="flex justify-end py-[2em] pr-[3em] " >
<button className="max-w-[40px]" >
        <img src={noise} alt="chat" className="w-full" />
    </button>
</div>


<h2 className="text-[#007640] text-[2rem] w-[30%] border" >
The ear1 assurance
</h2>
</section>

<section className="md:flex items-center justify-center px-[5em]" > 
<div>
    <img src={features} alt="" />
</div>

<div>
    <img src={BlackMatte41} alt="" />
</div>


</section>

</>

)


}