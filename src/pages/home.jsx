import Logo from "../components/logo";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div>
      <header className="bg-[#188418] flex items-center text-white justify-between ">
        <Logo />
        <Nav />
      </header>
    </div>
  );
};
export default Home;
