import expertsImage from "../../assets/sq-img.png"

export const Ear1Connect = ()=>{


    return(

<>

<section className="bg-white md:flex justify-between border border-[black] ">

<article className=" basis-[50%] border border-[blue] py-[3em] px-[3em]" >

    <button className=" py-[.2em] px-[2em] rounded-[15px] bg-[orange]" >
        Fans
    </button>

    <h2 className="text-[2rem] font-bold" >
Connect with top influencers in your field
    </h2>

    <p>
From Tech to Music to business. Ear1 has a wide range of industry experts in diverse fields you have always wanted to connect with. Now is your Best chance.
    </p>
</article>


<div className="px-[5em] py-[4em] basis-[50%] " >
    <img src={expertsImage} alt="experts_image" className="" />
</div>

</section>

</>

    )
}