import { Hero } from "../components/Hero/Hero";
import { Main } from "../components/Main/Main";
import { Nav } from "../components/Nav/Nav";


const Home = () => {
  return (
    <div className="bg-[green] h-[100vh]">
 <Nav/>
 <Hero/>
 <Main/>
    </div>
  );
};
export default Home;
