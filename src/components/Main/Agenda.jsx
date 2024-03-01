import agenda from "../../assets/logo-slant.svg"
export const Agenda = ()=>{




    return(
<>

<section className="bg-[#FAFAFA] md:flex justify-between " >
<article className=" basis-[50%] py-[4em] px-[2em] md:px-[4em] ">
<h2 className="text-[green] text-[3rem] font-bold " >
What can Ear1 help you do?
</h2>
<p>
Are you an individual looking to connect with an influencer without the hassle of waiting for the reply over a long time, or an influencer looking to filter your dm’s and connect with your audience, Ear1 has got you covered.
</p>
</article>
<div className="basis-[50%] pl-[4em] hidden md:block " >
    <img src={agenda} alt="" className=" " />
</div>


</section>

</>

    )
}