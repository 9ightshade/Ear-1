import { Cta } from "./Cta"

export const HeroText = ()=>{

return(

<div className="text-white w-[70%] mx-auto pb-[2em]" >

<h1 className="text-center text-[2rem] font-[700]" >
Build direct, meaningful connections.
</h1>
<p className="text-center w-[80%] mx-auto " >
Ear1 helps you connect directly with your favourite influencers for a small fee. What’s more? We assure you of getting a reply.
</p>

<div  className="md:flex w-[50%] mx-auto gap-[1.5em] justify-center">
<Cta/>
</div>
</div>



)


}