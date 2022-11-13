import React, { useRef, useState } from 'react'
import '../style/nav.css'
import { NavLink, useNavigate  } from 'react-router-dom'
import { Link} from 'react-scroll'
import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wc from '../assets/images/wc.svg'
import mm from '../assets/images/mm.svg'
import footLogo from '../assets/images/footlogo.svg'
import { faBars, faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';

function Nav() {

  const navRef = useRef();
  const showNav = () =>{
    navRef.current.classList.toggle('res_nav')
  }

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>

  <header>
        <img src={logo} alt="MetaBNB" onClick={()=>{
          navigate('/')
        }} />
        <nav ref={navRef}>
            <img src={footLogo} alt="MetaBNB" className='nav_logo' onClick={()=>{
              navigate('/')
            }} />
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/place-to-stay'>Place to stay</NavLink>
            {/* <NavLink to='#'>NFTs</NavLink> */}
            <Link to="nfts" spy={true} smooth={true} offset={-100} duration={500}>NFTs</Link>
            <NavLink to='#'>Community</NavLink>
            <button 
          onClick={showNav}
          className='nav_close'><FontAwesomeIcon icon={faClose} size='fa-2x' /></button>
        </nav>
        <div className="nav_btn_wrap">
          <button 
          onClick={toggleModal}
          className="nav__btn">
              Connect Wallet
          </button>
          <button 
          onClick={showNav}
          className='nav_open'><FontAwesomeIcon icon={faBars} /></button>
        </div>
    </header>

{  modal && <div className="modal">
  <div className="over" onClick={toggleModal}></div>
    <div className="connect">
            <div className="top_connect">
                <h4>Connect Wallet</h4>
                <FontAwesomeIcon icon={faClose} onClick={toggleModal} style={{cursor: 'pointer'}} />
            </div>
            <div className="foot_connect">
                <p>Choose your preferred wallet:</p>
                <span>
                    <span><img src={mm} alt="Meta Mask" /><h3>Metamask</h3></span>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: '#959DA6'}} />
                </span>
                <span>
                  <span><img src={wc} alt="" />
                  <h3>WalletConnect</h3></span>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: '#959DA6'}} />
                </span>
            </div>
        </div>
        </div> }
    </>

  )
}

export default Nav