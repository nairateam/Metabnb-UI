import './card.css'
import rating from '../../assets/images/rating.svg'

const SingleCard = ({image}) => {
    return ( 
        <div className="card__wrap">
            <div className="card_img">
                <img src={image} alt="" />
            </div>
            <div className="card_text">
                <p>Desert King</p>
                <h5>1MBT per night</h5>
            </div>
            <div className="card_text">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
            </div>
            <div className="card_text">
                <img src={rating} alt="" />
            </div>
        </div>
     );
}
 
export default SingleCard;