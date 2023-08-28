import { Link } from 'react-router-dom';
import './Navbar.css'
import { useState, useEffect } from 'react'
import Button from '../Button/Button';


function Navbar() {
    // states 
    const [openMenu, setOpenMenu] = useState(false)
    const [haveButton, setHaveButton] = useState(true)

    // handler function
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleCloseMobileMenu = () => {
        setOpenMenu(false)
    }

    const handleShowButton = () => {
        if(window.innerWidth <= 960){
            setHaveButton(false)
        }
        else {
            setHaveButton(true)
        }
    }

    window.onresize = handleShowButton

    useEffect(() => {
        handleShowButton()
    }, [])

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={handleCloseMobileMenu}>
                    D TRAVEL 
                    <i className="fa-solid fa-plane nav__logo-icon"></i>
                </Link>
               <div className='menu-icon'>
                    <i className={(openMenu ? 'fa-solid fa-xmark' : 'fa fa-bars') + ' btnOpenMenu'} onClick={handleOpenMenu}></i>
               </div>
            </div>

            <ul className={openMenu ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={handleCloseMobileMenu}>Home</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={handleCloseMobileMenu}>Services</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={handleCloseMobileMenu}>Product</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={handleCloseMobileMenu}>Sign Up</Link>
                </li>                
            </ul>

            {/* ẩn hiện button đăng nhập */}
            {haveButton && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </nav>
    )
}

export default Navbar;