import '../style/home.css'
import mdf from '../assets/images/mdfimage.svg'

const MidFooter = () => {
    return ( 
        <div className="mid__footer container">
            <div className="md_text">
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. 
                    These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <div className="md_image">
                <img src={mdf} alt="MetaBNB Footer Banner" />
            </div>
        </div>
     );
}
 
export default MidFooter;