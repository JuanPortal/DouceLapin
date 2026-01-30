import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    const location = useLocation();

    const [hamburgerVisibility, setHamburgerVisibility] = useState('invisible')
    const [hamburgerIcon, setHamburgerIcon] = useState(faBars)
    const handleHamburgerIcon = () => {
        if (hamburgerIcon === faBars) {
            setHamburgerIcon(faXmark)
            setHamburgerVisibility('visible')
        } else {
            setHamburgerIcon(faBars)
            setHamburgerVisibility('invisible')
        }
    }

    const handleLinkClick = () => {
        setHamburgerIcon(faBars)
        setHamburgerVisibility('invisible')
    }

    return (
        <header>
            <Link className='title' to='/'>
                <img src="https://res.cloudinary.com/dajs3qkmc/image/upload/v1769807127/logo_yksuh3.jpg" title="Logo Douce Lapin" alt="Logo Douce Lapin" />
                <h1>Douce Lapin</h1>
            </Link>
            <nav className={`links ${hamburgerVisibility}`}>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/' ? 'active-link' : ''}`} to='/'>Inicio</Link>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/carta' ? 'active-link' : ''}`} to='/carta'>Carta</Link>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/contacto' ? 'active-link' : ''}`} to='/contacto'>Contacto</Link>
            </nav>
            <div className="hamburger-menu" onClick={handleHamburgerIcon}>
                <FontAwesomeIcon icon={hamburgerIcon} />
            </div>
        </header>
    )
}
