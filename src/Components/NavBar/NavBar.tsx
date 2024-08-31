import React, { useState } from 'react'
import { isDesktop } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import BurgerMenu from './BurgerMenu'
import logo from '../../img/logoWhite.webp'
import { PiTranslate } from 'react-icons/pi'
import { SocialMedia } from '../Footer'
import { BLOG_ROUTE, MAIN_ROUTE, MobileBreakPoint, TabletBreakPoint } from '../Utils/Consts'

const NavBarContainer = styled.div`
    //position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10svh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

const NavBarContent = styled.div`
width: 94%;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: ${MobileBreakPoint}){
    width: 88%;
}
`
function NavBar() {
    return (
        <NavBarContainer>
                {
                    isDesktop? <DesktopNavBar/> : <MobileNavBar/>
                }
        </NavBarContainer>
    )
}

const desktopNavBar = [
    {
        title: 'О нас',
        link: MAIN_ROUTE
    },
    {
        title: 'Курсы',
        link: 'courses'
    },
    {
        title: 'Контакты',
        link: 'contacts'
    }
]
function DesktopNavBar() {

    const LinkStyle: React.CSSProperties={
        textDecoration: 'none',
        fontSize: '1.25svw',
        color: 'rgba(235, 235, 235, 1)',
        fontWeight: 600,
        textTransform: 'uppercase'
    }
    return <NavBarContent>
        {
            desktopNavBar.map(({title,link})=><Link to={link} style={LinkStyle}>{title}</Link>)
        }
    </NavBarContent>
}

const Logo = styled.img`
    width: 4dvw;
    min-width: 94px;
    z-index: 4;
`

function MobileNavBar(){

    const [menuIsOpen, setMenuOpen]=useState(false)
    return <>
    <Menu isOpen={menuIsOpen} setIsOpen={setMenuOpen}/>
    <NavBarContent>
        <Logo src={logo} alt='logo'/>
        <BurgerMenu isOpen={menuIsOpen} setIsOpen={setMenuOpen}/>
    </NavBarContent>
    </>
}

const MenuContainer=styled.div<{isOpen: boolean}>`
    position: absolute;
    top: 0;
    width: 100svw;
    height: 100dvh;
    background-color: rgba(204, 51, 39, 1);
    transform: ${({isOpen})=>isOpen? 'translateY(0)' : 'translateY(-150dvh)'};
    transition: transform .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const MenuContent=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
color: rgba(22, 21, 21, 1);
height: 44.5%;
a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    font-size: 6.6svw;
    text-transform: uppercase;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 6.6svw;
    }

    @media(max-width: ${MobileBreakPoint}){
        font-size: 15svw;
    }
}
`

const menuItems=[
    {
        title: 'О нас',
        link: MAIN_ROUTE
    },
    {
        title: 'курсы',
        link: '/courses'
    },
    {
        title: 'Блог',
        link: BLOG_ROUTE
    },
    {
        title: 'Контакты',
        link: '/contacts'
    }
]
interface MenuProps{
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Menu({isOpen, setIsOpen}: MenuProps){

    const [startY, setStartY] = useState(0);

    //Закрытие меню по свайпу
    const handleTouchStart = (event: any) => {
        setStartY(event.touches[0].clientY)
    }
    const handleTouchMove = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const currentY = event.touches[0].clientY;
        const diffY = startY - currentY;

        if (diffY > 50) {
            setIsOpen(false)
        }
    }

    const handleMenuItemClick=()=>{
        setIsOpen(false)
    }
    return <MenuContainer onWheel={(e)=>{e.stopPropagation(); e.preventDefault()}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} isOpen={isOpen}>
    <MenuContent>
        {menuItems.map(({title, link})=><Link onClick={handleMenuItemClick} to={link}>{title}</Link>)}
    </MenuContent>
    <SocialMedia bottom='6svh'/>
    </MenuContainer>
}
export default NavBar