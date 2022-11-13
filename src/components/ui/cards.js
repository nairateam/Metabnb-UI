import SingleCard from "./singleCard";
import cardImage from "../data/cardImage";
import { useState } from "react";
// import { useState } from "react";




const Cards = () => {

    const [cardImages] = useState(cardImage)
    return ( 
            <div className="container card__flex">
                {
                    cardImages.slice(0, 8).map((object)=>(
                        <SingleCard image={object.nft} />
                    ))
                }
            </div>

     );
}
 
export default Cards;