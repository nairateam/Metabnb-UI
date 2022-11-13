import '../style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import footLogo from '../assets/images/footlogo.svg'

const Footer = () => {
    return ( 
        <div className="container footer">
            <div className="top_footer">
                <div className="foot_item">
                    <img src={footLogo} alt="" />

                </div>
                <div className="foot_item">
                    <h4>Community</h4>
                    <p>NFT</p>
                    <p>Tokens</p>
                    <p>Landlords</p>
                    <p>Discord</p>
                </div>
                <div className="foot_item">
                    <h4>Places</h4>
                    <p>Castle</p>
                    <p>Farms</p>
                    <p>Beach</p>
                    <p>Learn more</p>
                </div>
                <div className="foot_item">
                    <h4>About Us</h4>
                    <p>Roadmap</p>
                    <p>Creators</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="bottom_footer">
                <p><FontAwesomeIcon icon={faCopyright} /> 2022 Metabnb</p>
            </div>
        </div>
     );
}
 
export default Footer;