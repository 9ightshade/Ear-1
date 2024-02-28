import HeroImage from "../components/hero-image";
import HeroText from "../components/hero-text";
import Logo from "../components/logo";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div className="bg-[#188418] h-[100vh]">
      <header className=" flex items-center text-white justify-between p-[1em] ">
        <Logo />
        <Nav />
      </header>

      <main>
              <HeroText />
              <HeroImage/>
      </main>
    </div>
  );
};
export default Home;
