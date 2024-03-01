import messages from "../../assets/influencer-2.png"
import chat from "../../assets/Icon-chat.svg"
export const Messages = ()=>{
return(
<>

<section className="bg-white md:flex justify-between border border-[black] ">

<article className=" basis-[50%] border border-[blue] bg-[green] text-white py-[2em] px-[3em]" >

   <div className="flex justify-between items-center py-[1em]" >
   <button className=" py-[.2em] px-[2em] text-black font-bold rounded-[15px] bg-[orange]" >
        Fans
    </button>

    <button className="max-w-[40px]" >
        <img src={chat} alt="chat" className="w-full" />
    </button>
   </div>

    <h2 className="text-[2rem] font-bold" >
Be assured of replies
    </h2>

    <p>
From Tech to Music to business. Ear1 has a wide range of industry experts in diverse fields you have always wanted to connect with. Now is your Best chance.
    </p>
</article>


<div className="px-[5em] py-[4em] basis-[50%] bg-[#F0F0E6] " id="noise" >
    <img src={messages} alt="#" className="" />
</div>

</section>

</>


)


}