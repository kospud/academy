import React from 'react'
import { PageContainer, RedLinkButton } from './PageBlocks'
import { styled } from 'styled-components'
import disk from "../img/diskBig.png"
import { MAIN_ROUTE, MobileBreakPoint, TabletBreakPoint } from './Utils/Consts'

const Disk = styled.div`
    height: 190svh;
    aspect-ratio: 1/1;
    background-image: url(${disk});
    background-size: cover;
    position: absolute;
    bottom:0;
    left: 50%;
    transform: translate(-50%,50%);
    z-index: 0;

    &::before{
        content:'';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(204, 51, 39, 1);
        width: 33.5%;
        aspect-ratio: 1/1;
        border-radius: 100%;
    }

    &::after{
        content:'';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #000000;
        width: 2%;
        aspect-ratio: 1/1;
        border-radius: 100%;
        z-index: 1;
    }

    @media (max-width: ${MobileBreakPoint}){
        height: 160svh;
    }

`

const CircleSVG = styled.svg`
    display: block;
    overflow: visible;
    width: 20%;
    font-size: 170%;
    fill: rgba(22, 21, 21, 1);
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: 50%;
    letter-spacing: -5%;
    transform: translate(-50%, -50%) rotate(4deg);
    path {
    fill: none;
}
`

const Phrase=styled.a`
display: block;
width: 100%;
text-align: center;
    position: absolute;
    left: 50%;
    margin-top: 25svh;
    transform: translateX(-50%);
    text-transform: uppercase;
    color: rgba(204, 51, 39, 1);
    z-index: 1;
    font-weight: 600;
    font-size: 3.3svw;

    @media (max-width: ${TabletBreakPoint}){
        font-size: 6.6svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 6svw;
    }
`
function ErrorPage() {

    const buttonStyle: React.CSSProperties={
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
    }
    return (
        <PageContainer>
            <RedLinkButton style={buttonStyle} hover to={MAIN_ROUTE}>На главную</RedLinkButton>
            <Phrase>ЧТО-ТО ПОШЛО НЕ ТАК.....</Phrase>
            <Disk>
            <CircleSVG viewBox="0 0 100 100">
                <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />
                <text>
                    <textPath xlinkHref='#circle'>
                        404 ERROR
                    </textPath>
                </text>
                </CircleSVG>
            </Disk>
        </PageContainer>
    )
}

export default ErrorPage