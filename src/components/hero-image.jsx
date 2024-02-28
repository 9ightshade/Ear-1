import centerPhone from "../assets/center-phone.png";
import blackMatte2 from "../assets/Black-Matte-2.png";
import leftPhone from "../assets/left-phone.png";

const HeroImage = () => {
  return (
    <div className="flex w-[90%] mx-auto relative ">
      <div className="border border-[red]">
        <img src={leftPhone} alt="left_phone" />
      </div>
      <div className="border border-[blue]">
        <img src={centerPhone} alt="center_phone" />
      </div>
      <div className="border border-[yellow]  transform rotate-45">
        <img src={blackMatte2} alt="black_matte2" />
      </div>
    </div>
  );
};

export default HeroImage;
