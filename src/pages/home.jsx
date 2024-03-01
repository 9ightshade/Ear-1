import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Main } from "../components/Main/Main";
import { Nav } from "../components/Nav/Nav";


const Home = () => {
  return (
    <div className="bg-[#029F58] h-[100vh]">
 <Nav/>
 <Hero/>
 <Main/>
 <Footer/>
    </div>
  );
};
export default Home;
