import logo from "../../assets/logo-white.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";
import shape from "../../assets/shape.svg"
export const Footer = ()=>{

return(

<>
<hr className="h-[9px] mt-[2em] w-[80%]  mx-auto py-[2em] "/>
<div className="md:flex justify-end w-[80%] mx-auto md:pr-[4em]" >
    <form action="" method="post" className=" w-[100%] basis-[70%]" >

<h3 className="py-[1em]  " > 
<span className="font-bold" >Be in the know.</span> Get access to amazing offers and discounts
</h3>
<div className="flex " >
<input type="email" name="email" id="email" placeholder="Enter your email address" className="border-[2px] px-[1em] py-[.5em] w-[80%] basis-[90%] rounded-l-[10px] "  /><button type="submit" className="bg-[#121212] text-white py-[1em] text-[.7rem]  px-[2em] w-[30%] basis-[10%] rounded-r-[10px] ">submit</button>
</div>
</form>
</div>



<div className="md:flex justify-center  py-[5em] " >


<div className="basis-[20%] w-[50%] mx-auto " >
<div>
    <img src={logo} alt="" />
</div>
<div className="flex py-[2em] gap-[1em] ">
<div className="bg-[#ECECEC] rounded-[50%] p-[1em]" >
    <img src={facebook} alt="" />
</div>
<div className="bg-[#ECECEC] rounded-[50%] p-[1em]" >
    <img src={twitter} alt="" />
</div>
<div className="bg-[#ECECEC] rounded-[50%] p-[1em]" >
    <img src={instagram} alt="" />
</div>
</div>
</div>

<div className=" basis-[70%] flex justify-between px-[1.5em] flex-wrap gap-[2em]" >
    <ul className="flex flex-col gap-[1em]" >
        <li className="font-bold text-[1.5rem]" >Links</li>
        <li>Home</li>
        <li>For fans</li>
        <li>For influencers</li>
        <li>FAQ’s</li>
    </ul>

    <ul className="flex flex-col gap-[1em]">
        <li  className="font-bold text-[1.5rem]">
        Get help
    </li>
    <li>Support</li>
    <li>FAQ’s</li>
    <li>Partnership</li></ul>


    <ul className="flex flex-col gap-[1em]">
<li className="font-bold text-[1.5rem]">Download</li>
<li>Andriod</li>
<li>IOS</li>

    </ul>
    <ul className="flex flex-col gap-[1em]">
        <li className="font-bold text-[1.5rem] ">Resources</li>
        <li>Terms of service</li>
        <li>Privacy policy</li>
    </ul>
</div>




</div>

<div className="flex justify-end py-[1.5em] pr-[4em]" >
    <img src={shape} alt="" />
</div>
</>


)

}