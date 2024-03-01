import settlements from "../../assets/phone-screen.png"

export const ChatEarn =()=>{

return(

<>
<section className="bg-white md:flex justify-between border border-[black] ">

<div className="px-[5em] py-[4em] basis-[50%] " >
    <img src={settlements} alt="#" className="w-full" />
</div>

<article className=" basis-[50%] border border-[blue] bg-white text-black md:pt-[7em] py-[3em]  px-[3em]" >
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