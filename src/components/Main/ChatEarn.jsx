import settlements from "../../assets/Black-Matte2.svg";
import shape from "../../assets/shape.svg"
export const ChatEarn =()=>{

return(

<>
<div className="flex justify-end py-[1.5em] pr-[4em]" >
    <img src={shape} alt="" />
</div>
<section className="bg-white md:flex justify-between ">



<div className=" basis-[50%] " >
    <img src={settlements} alt="#" className="w-full" />
</div>

<article className=" basis-[50%] bg-white text-black py-[3em]  px-[3em]" >
   <button className=" py-[.2em] px-[2em] text-black font-bold rounded-[15px] bg-[orange]" >
    Influencer
    </button>


    <h2 className="text-[2rem] font-bold" >
Earn <span className="text-[green] " >MONEY </span> 
while you chat    </h2>

    <p>
As an influencer you get paid by your audience to connect with them. That way to maximize time while earning.
    </p>
</article>




</section>



</>


)


}