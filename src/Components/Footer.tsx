import {  Spacer } from "./PageBlocks";
import React from 'react'
import FadeInComponent from './FadeInComponent'
import { styled } from 'styled-components'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'
import { isDesktop, isTablet } from 'react-device-detect';
import { MarginTop90, MarginBottom45, MarginBottom24 } from "./Gaps";
import { MobileBreakPoint, TabletBreakPoint } from "./Utils/Consts";
const FooterContainer=styled(FadeInComponent)`
    position: relative;
    width: 100%;
    background-color: rgba(204, 51, 39, 1);
    color: rgba(22, 21, 21, 1);
    display: flex;
    justify-content: center;

    @media (max-width: ${TabletBreakPoint}) {
        //height: 55svh;
    }

    @media (max-width: ${MobileBreakPoint}) {
        //min-height: 108svh;
    }
`

const FooterContent=styled.div`
${MarginTop90}
width: 94%;
display: flex;
justify-content: space-between;
margin-bottom: 8.3svh;

@media (max-width: ${MobileBreakPoint}){
    flex-direction: column;
    justify-content: flex-start;
    width: 88%;
    margin-bottom: 20svh;
}
`

const FooterBlock=styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    @media(max-width: ${MobileBreakPoint}){
        width: 100%;
    }

    @media(max-width: ${MobileBreakPoint}){
        ${MarginBottom45}
    }
`

const FooterBlockHeader=styled.a<{align?: string}>`
    font-weight: 900;
    ${MarginBottom45}
    text-align: ${({align})=>align? align : 'start'};

    font-size: 1.8svw;
    text-transform: uppercase;
    @media(max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }

    @media(max-width: ${MobileBreakPoint}){
        font-size: 8svw;
    }
`

const FooterBlockContetnt=styled.div<{align?: string}>`

display: flex;
flex-direction: column;
align-items: ${({align})=>align? align : 'start'};

a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    ${MarginBottom24}
    font-size: 0.9svw;
    text-transform: uppercase;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 1.8svw;
    }

    @media(max-width: ${MobileBreakPoint}){
        font-size: 4.3svw;
    }
}
`

const Socials=styled.div<{bottom?: string}>`
    position: absolute;
    bottom: ${({bottom})=>bottom? bottom : '9svh'};
    left: 50%;
    transform: translateX(-50%);
    width: 10svw;
    font-size: 1.8svw;
    display: flex;
    justify-content: space-around;
    
    a{
        color: rgba(22, 21, 21, 1);
    }

    @media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
        width: 21svw;
    }

    @media(max-width: ${MobileBreakPoint}){
        font-size: 8svw;
        width: 35svw;
    }
`

const MadeInBlack=styled.div`
    position: absolute;
    right: 3%;
    bottom: 9svh;

    @media(max-width: ${MobileBreakPoint}){
        right: 50%;
        transform: translate(50%,0);
        bottom: 6svh;
    }

a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    font-size: 0.9svw;
    text-transform: uppercase;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 1.8svw;
    }

    @media(max-width: ${MobileBreakPoint}){
        right: 50%;
        transform: translate(50%,0);
        font-size: 4.3svw;
        bottom: 7svh;
    }
}
`

const BSLink=()=>{
    return <MadeInBlack>
        <Link to='https://www.blacksoftware.ru/'>MADE IN BLACK</Link>
    </MadeInBlack>
}
const socials=[
    {
        logo: <PiInstagramLogoFill/>,
        ref:''
    },
    {
        logo: <TfiYoutube/> ,
        ref:''
    },
    {
        logo: <FaTelegram/>,
        ref:''
    }
]

interface SocialMediaProps{
    bottom?: string
}
export const SocialMedia=({bottom}: SocialMediaProps)=>{

    return(
        <Socials bottom={bottom}>
            {
                socials.map(({logo,ref})=><a href={ref}>{logo}</a>)
            }
        </Socials>
    )
}
const footerBlocksDesktop=[
    {
        title: 'Информация',
        links: [
            {
                title: 'оферта',
                ref: ''
            },
            {
                title: 'Политика<br/>конфиденциальности',
                ref: ''
            },
            {
                title: 'О нас',
                ref: ''
            },
            {
                title: 'Курсы',
                ref: ''
            },
            {
                title: 'Блог',
                ref: 'blog'
            }
        ],
        align: 'start'
    },
    {
        title: 'Контакты',
        links: [
            {
                title: 'info@akademi.ru',
                ref: 'mailto: info@akademi.ru'
            },
            {
                title: '+7 (000) 000-00-00',
                ref: 'tel:+7 (000) 000-00-00'
            }
        ],
        align: 'center'
    },
    {
        title: 'Реквизиты',
        links: [
            {
                title: 'ООО "ACADEMIA"',
                ref: 'mailto: info@akademi.ru'
            },           
        ],
        align: 'end'
    }
]

const footerBlocksMobile=[
    {
        title: 'Информация',
        links: [
            {
                title: 'оферта',
                ref: ''
            },
            {
                title: 'Политика<br/>конфиденциальности',
                ref: ''
            },
            {
                title: 'О нас',
                ref: ''
            },
            {
                title: 'Курсы',
                ref: ''
            },
            {
                title: 'Блог',
                ref: 'blog'
            }
        ],
        align: 'start'
    },
    {
        title: 'Реквизиты',
        links: [
            {
                title: 'ООО "ACADEMIA"',
                ref: 'mailto: info@akademi.ru'
            },          
            {
                title: 'ООО "ACADEMIA"',
                ref: 'mailto: info@akademi.ru'
            },  
            {
                title: 'ООО "ACADEMIA"',
                ref: 'mailto: info@akademi.ru'
            },  
            {
                title: 'ООО "ACADEMIA"',
                ref: 'mailto: info@akademi.ru'
            },   
        ],
        align: 'end'
    },
    {
        title: 'Контакты',
        links: [
            {
                title: 'info@akademi.ru',
                ref: 'mailto: info@akademi.ru'
            },
            {
                title: '+7 (000) 000-00-00',
                ref: 'tel:+7 (000) 000-00-00'
            }
        ],
        align: 'center'
    },
]

function Footer() {

    const links=isDesktop || isTablet? footerBlocksDesktop : footerBlocksMobile
  return (
    <FooterContainer type='div' threshold={0.3}>
        <FooterContent>
            {
                links.map(({title, links,align})=><FooterBlock>
                    <FooterBlockHeader align={isDesktop || isTablet ? align : undefined}>{title}</FooterBlockHeader>
                    <FooterBlockContetnt align={isDesktop || isTablet ? align : undefined}>
                        {
                            links.map(({title, ref})=><Link to={ref}>{parse(title)}</Link>)
                        }
                    </FooterBlockContetnt>
                </FooterBlock>)
            }
        </FooterContent>
        <SocialMedia/>
        <BSLink/>
    </FooterContainer>
  )
}

export default Footer