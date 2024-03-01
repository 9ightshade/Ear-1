import topbar from "../../assets/Topbar.svg";
import chat1 from "../../assets/Chat1.svg";
import chat2 from "../../assets/Chat2.svg";
import chat3 from "../../assets/Chat3.svg";
import messagefield from "../../assets/Messagefield.svg";
import chat from "../../assets/Icon-chat.svg"
export const Messages = ()=>{
return(
<>

<section className="bg-white md:flex justify-between  ">

<article className=" basis-[50%] bg-[#039352] text-white py-[2em] px-[3em]" >

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


<div className=" basis-[50%] bg-[#F0F0E6] py-[.5em] " id="noise " >
<div className="w-[80%] mx-auto " >
<img src={topbar} alt=""/>
</div>

    
    
<div className="w-[80%] mx-auto pl-[4em] py-[2em] " >
<img src={chat1} alt=""/>
</div>

<div className="w-[80%] mx-auto pr-[6em] " >
<img src={chat2} alt=""/>
</div>


<div className="w-[80%] mx-auto pr-[4em] py-[2em]" >
<img src={chat3} alt=""/>
</div>

<div className="w-[80%] mx-auto " >
<img src={messagefield} alt=""/>
</div>


</div>

</section>

</>


)


}