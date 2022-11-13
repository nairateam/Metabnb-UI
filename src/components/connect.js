import '../style/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Connect = () => {
    return ( 
        <div className="connect">
            <div className="top_connect">
                <h2>Connect Wallet</h2>
                <FontAwesomeIcon icon={faCancel} />
            </div>
            <div className="foot_connect">
                <p>Choose your preferred wallet:</p>
                <span>
                    <h5>Metamask</h5>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span>
                    <h5>Metamask</h5>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </div>
     );
}
 
export default Connect;