import logo from "../../assets/logo-white.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";
export const Footer = ()=>{

return(

<>
<hr className="h-[9px] mt-[2em] w-[80%]  mx-auto py-[2em] "/>
<form action="" method="post">

<h3 className="border" > 
<span className="font-bold " >Be in the know.</span> Get access to amazing offers and discounts
</h3>
<div className="flex border " >
<input type="email" name="email" id="email" placeholder="Enter your email address" className="border-[2px] py-[.7em]"  /><button type="submit" className="bg-[#121212] text-white py-[1em] px-[2em] ">submit</button>
</div>
</form>

<div>
    <img src={logo} alt="" />
</div>
<div>
<img src={facebook} alt="" />
<img src={twitter} alt="" />
<img src={instagram} alt="" />
</div>

<div>

</div>


</>


)

}