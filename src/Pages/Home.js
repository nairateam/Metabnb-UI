import Footer from "../components/footer";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import MidFooter from "../components/midFooter";
import Nav from "../components/nav";

const Home = () => {
    return ( 
        <>
            <Nav />
            <Hero />
            <HomeCard />
            <MidFooter />
            <Footer />
        </>
     );
}
 
export default Home;