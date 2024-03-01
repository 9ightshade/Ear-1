import leftPhone from "../../assets/left-phone.png";
import centerPhone from "../../assets/center-phone.png";
import rightPhone from "../../assets/right-phone.png";
export const TrioImages = ()=>{

return(

<>
<div className=" w-[80%] mx-auto md:flex justify-center relative overflow-hidden hidden ">


<div className=" z-[1] absolute top-[1.5em] right-[5em]  " >
    <img src={leftPhone} alt="" className="w-full" />
</div>
<div className=" z-[2] basis-[50%] " >
    <img src={centerPhone} alt="" className="w-full" />
</div>
<div className=" z-[1] absolute left-[13em] top-[4em] ">
    <img src={rightPhone} alt="" className="w-full" />
</div>



</div>



</>


)


}