import React from 'react'
import FadeInComponent from './FadeInComponent'
import { styled } from 'styled-components'

import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'
import { isDesktop, isTablet } from 'react-device-detect';
import {marginBottom, marginTop } from "./Gaps";
import { BLOG_ROUTE, MAIN_ROUTE, MobileBreakPoint, TabletBreakPoint } from "./Utils/Consts";
import { responsiveText } from './text';

const FooterContainer=styled(FadeInComponent)`
    position: relative;
    width: 100%;
    background-color: rgba(204, 51, 39, 1);
    color: rgba(22, 21, 21, 1);
    display: flex;
    justify-content: center;

`

const FooterContent=styled.div`
${marginTop(90)}
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
        ${marginBottom(45)}
    }
`

const FooterBlockHeader=styled.a<{align?: string}>`
    font-weight: 900;
    ${marginBottom(45)}
    text-align: ${({align})=>align? align : 'start'};
    ${responsiveText(36,36,36)}
    text-transform: uppercase;

`

const FooterBlockContetnt=styled.div<{align?: string}>`

display: flex;
flex-direction: column;
align-items: ${({align})=>align? align : 'start'};

a{
    text-decoration: none;
    color: inherit;
    font-weight: 800;
    ${marginBottom(24)}
    ${responsiveText(18, 18, 18)}
    text-transform: uppercase;

}
`

const Socials=styled.div<{bottom?: string}>`
    position: absolute;
    bottom: ${({bottom})=>bottom? bottom : '9svh'};
    left: 50%;
    transform: translateX(-50%);
    width: 10svw;
    display: flex;
    justify-content: space-around;
    ${responsiveText(32,32,32)}
    a{
        color: rgba(22, 21, 21, 1);
    }

    @media (max-width: ${TabletBreakPoint}){
        width: 21svw;
    }

    @media(max-width: ${MobileBreakPoint}){
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
    text-transform: uppercase;
    ${responsiveText(18,18,18)}

    @media(max-width: ${MobileBreakPoint}){
        right: 50%;
        transform: translate(50%,0);
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
                ref: 'privacyPolicy'
            },
            {
                title: 'О нас',
                ref: MAIN_ROUTE
            },
            {
                title: 'Курсы',
                ref: 'courses'
            },
            {
                title: 'Блог',
                ref: BLOG_ROUTE
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
                ref: '/privacypolicy'
            },
            {
                title: 'О нас',
                ref: MAIN_ROUTE
            },
            {
                title: 'Курсы',
                ref: '/courses'
            },
            {
                title: 'Блог',
                ref: BLOG_ROUTE
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