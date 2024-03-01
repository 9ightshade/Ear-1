import playstore from "../../assets/play-store.svg";
import appstore from "../../assets/app-store.svg";
// import downloadIcon from "../../assets/arrow-up.svg";

export const Cta = ()=>{

return(

<>
<div className="max-w-[200px] mt-[1.5em]">
    <img src={playstore} alt="playstore" />
</div>

<div className="max-w-[200px] mt-[1.5em] " >
    <img src={appstore} alt="appstore" />
</div>

</>


)

};



// export const DownloadIcon = ()=>{

// return(

// <div className="bg-white" >
// <img src={downloadIcon} alt="download" />


// </div>


// )




// }