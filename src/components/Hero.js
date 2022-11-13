import '../style/home.css'
import heroImage from '../assets/images/heroimage.svg'
import mtoken from '../assets/images/partners/mtoken.svg'
import metamask from '../assets/images/partners/metamask.svg'
import opensea from '../assets/images/partners/opensea.svg'

const Hero = () => {
    return ( 
        <>
        <div className="hero container">
            <div className="hero__text">
                <h2>
                Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                </h2>
                <p>
                we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your 
                imagination to reality at your comfort zone
                </p>
                <div className="hero__search">
                    <input type="text" placeholder='Search for location' />
                    <button>Search</button>
                </div>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="MetaBNB Banner" />
            </div>
        </div>
        <div className="hero__partners">
            <img src={mtoken} alt="MBtoken" />
            <img src={metamask} alt="Metamask" />
            <img src={opensea} alt="Opensea" />
        </div>
        </>
     );
}
 
export default Hero;