import expertsImage from "../../assets/sq-img.png"

export const Ear1Connect = ()=>{


    return(

<>

<section className="bg-white md:flex justify-between ">

<article className=" basis-[50%] py-[3em] px-[3em]" >

    <button className=" py-[.2em] px-[2em] rounded-[15px] bg-[#FFBB62]" >
        Fans
    </button>

    <h2 className="text-[2rem] font-bold" >
Connect with top influencers in your field
    </h2>

    <p>
From Tech to Music to business. Ear1 has a wide range of industry experts in diverse fields you have always wanted to connect with. Now is your Best chance.
    </p>
</article>


<div className="px-[5em] py-[4em] basis-[50%]  " >
    <div className="bg-[#029F58] w-[80%] mx-auto " >
    <img src={expertsImage} alt="experts_image" className="w-full" />
    </div>
    
</div>

</section>

</>

    )
}