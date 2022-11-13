import '../style/pts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import cardImage from '../components/data/cardImage';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SingleCard from '../components/ui/singleCard';
import { useState } from 'react';

const Pts = () => {
    const [cardImages] = useState(cardImage)
    return ( 
        <>
        <Nav />
        <div className="pts container">
            <div className="places">
                <button>Restaurant</button>
                <button>Cottage</button>
                <button>Castle</button>
                <button>Fantasy City</button>
                <button>Beach</button>
                <button>Carbins</button>
                <button>Off-grid</button>
                <button>Farm</button>
            </div>
            <div className="location">
                <input type="text" placeholder="Location" />
                <span><FontAwesomeIcon icon={faSliders} /></span>
            </div>
        </div>
        <div className="container card__flex">
                {
                    cardImages.map((object)=>(
                        <SingleCard image={object.nft} />
                    ))
                }
            </div>
        <Footer />
        </>
     );
}
 
export default Pts;