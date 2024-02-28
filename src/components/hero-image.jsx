import centerPhone from "../assets/center-phone.png";
import rightPhone from "../assets/right-phone.png";
import leftPhone from "../assets/left-phone.png";

const HeroImage = () => {
  return (
    <div className="flex w-[90%] mx-auto relative border border-[purple]">
      <div className="border border-[red] absolute z-[10] right-[12px]">
        <img src={leftPhone} alt="left_phone" />
      </div>
      <div className="border border-[blue] absolute z-[20]">
        <img src={centerPhone} alt="center_phone" />
      </div>
      <div className="border border-[yellow] absolute z-[10] ">
        <img src={rightPhone} alt="right_phone" />
      </div>
    </div>
  );
};

export default HeroImage;
