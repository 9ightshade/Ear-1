import playstore from "../assets/play-store.svg";
import appstore from "../assets/app-store.svg";

const HeroText = () => {
  return (
    <div className="px-[1em] w-[50%] mx-auto ">
      <h1 className="text-center text-[3rem] text-white ">
        Build direct, meaningful connections.
      </h1>
      <p className="text-center text-white ">
        Ear1 helps you connect directly with your favourite influencers for a
        small fee. What’s more? We assure you of getting a reply.
      </p>
      <div className="flex justify-between gap-[1em]  mt-[2em]  ">
        <button className="bg-black text-white rounded-[8px] basis-[50%] ">
          <img src={playstore} alt="" />
        </button>

        <button className="bg-black text-white rounded-[8px]">
          <img src={appstore} alt="" />
        </button>
      </div>
    </div>
  );
};
export default HeroText;
