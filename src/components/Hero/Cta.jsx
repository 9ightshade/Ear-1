import playstore from "../../assets/play-store.svg";
import appstore from "../../assets/app-store.svg";
// import downloadIcon from "../../assets/arrow-up.svg";

export const Cta = ()=>{

return(

<div className="md:flex" >
<div>
    <img src={playstore} alt="playstore" />
</div>

<div>
    <img src={appstore} alt="appstore" />
</div>

</div>


)

};



// export const DownloadIcon = ()=>{

// return(

// <div className="bg-white" >
// <img src={downloadIcon} alt="download" />


// </div>


// )




// }