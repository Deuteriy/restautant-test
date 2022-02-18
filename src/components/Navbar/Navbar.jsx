import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md'

import { Links } from './Links';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src = {images.gericht} alt='alt logo'/>  
      </div>
      <Links className='app__navbar-links'/>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Login / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (<div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false)} />
          <Links className='app__navbar-smallscreen-links'/>
        </div>)}

      </div>
    </nav>
    )
  } 

export default Navbar;
