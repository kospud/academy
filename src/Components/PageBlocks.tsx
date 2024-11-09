import styled, { css } from "styled-components";
import FadeInComponent from "./FadeInComponent";
import { Link } from "react-router-dom";
import { PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import disk from "../img/disk.webp"
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import NavBar from "./NavBar/NavBar";
import { MarginBootom90, MarginBottom45, MarginBottom60 } from "./Gaps";
import { MobileBreakPoint, TabletBreakPoint } from "./Utils/Consts";
import parse from 'html-react-parser'
import { Button } from "antd";

export const FontSize18 = css`
    font-size: 0.9svw;

    @media (max-width: ${TabletBreakPoint}){
        font-size: 1.8svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 4.3svw;
    }
`
export const FontSize64 = css`
    font-size: 3.3svw;

    @media (max-width: ${TabletBreakPoint}){
        font-size: 6.6svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 11.1svw;
    }
`
export const FontSize148 = css`
font-size: 7.7svw;

@media (max-width: ${TabletBreakPoint}){
        font-size: 15.4svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 15.4svw;
    }
`

export const FontSize36 = css`
font-size: 1.8svw;
@media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 8svw;
    }
`

export const PageContainerElement = styled.div`
width: 100%;
background-color: #161515;
overflow: hidden;
color: rgba(235, 235, 235, 1);
overscroll-behavior-y: none;
position: relative;
min-height: 100dvh;
`

export const PageContainer = ({ children }: PropsWithChildren) => {

    return (
        <PageContainerElement id='page'>
            {children}
        </PageContainerElement>
    )
}
//Самый верхний блок страницы на всю ширину и высоту экрана
export const PageTopBlockElement = styled.div`
width: 100%;
min-height: 100svh;
position: relative;
top: 0;
`

export const PageTopBlock = ({ children, id }: PropsWithChildren<{ id?: string }>) => {

    return <PageTopBlockElement id={id}>
        <NavBar />
        {
            children
        }
    </PageTopBlockElement>
}
export const PageTopBlockAlbums = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100svw;
height: 44svw;
z-index: 1;
pointer-events: none;
`
export const PageContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
`

const PageHeaderContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 94%;
display: flex;
flex-direction: column;
align-items: center;
`

interface PageHeaderProps {
    lines: string[]
    smallHeader?: string
    img?: string
}
export const PageHeader = ({ lines, smallHeader, children = undefined }: PropsWithChildren<PageHeaderProps>) => {

    return (
        <PageHeaderContainer>
            {
                lines.map((line, index) => <div><img key={index} src={line} style={{ width: '100%', flexGrow: 0, height: 'auto' }} /></div>)
            }
            <Spacer />
            {smallHeader && <PageSmallHeader>{smallHeader}</PageSmallHeader>}
            {children && children}
        </PageHeaderContainer>
    )
}

export const PageSmallHeader = styled.h2`
    width: 46svw;
    font-size: 3.3svw;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    @media(max-width: ${TabletBreakPoint}){
        width: 55svw;
        font-size: 3.7svw;
    }
    @media (max-width: ${MobileBreakPoint}) {
        width: 61svw;
        font-size: 4.3svw;
    }

`

export const PageContentBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const PageContentBlockHeader = styled(FadeInComponent) <{ wordBreak?: boolean }>`
margin: 0;
margin-top: -2.4svw;
${MarginBootom90}
max-width: 95%;
font-size: 7.7svw;
text-align: center;
font-weight: 700;
letter-spacing: -0.4svw;
color: #CC3327;
text-transform: uppercase;
word-break: ${({ wordBreak }) => wordBreak ? 'break-all' : 'normal'};

@media(max-width: ${TabletBreakPoint}){
    font-size: 15.4svw;
}

@media (max-width: ${MobileBreakPoint}) {
    font-size: 15svw;
    //width: fit-content;
}
`

export const PageContentColumnsBlock = styled(FadeInComponent)`
    width: 94%;
    display: flex;
    ${MarginBootom90}
    z-index: 1;
    justify-content: ${isTablet || isDesktop ? 'flex-end' : 'center'};

    @media (max-width: ${MobileBreakPoint}){
        flex-direction: column;
        width: 88%;
    }
`

export const Spacer = styled.div`
height: 4.15svh;

@media (max-width: ${TabletBreakPoint}){
    height: 3.9svh;
}

@media (max-width: ${MobileBreakPoint}){
    height: 3.2svh;
}
`
export const PageContentTextBlock = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${TabletBreakPoint}) {
        width: 62%;
    }
    @media (max-width: ${MobileBreakPoint}) {
        width: 100%;
    }
`
export const PageContentColumnsBlockHeader=styled.a`
display: block;
flex-grow: 1;
font-size: 1.8svw;
font-weight: 700;
${MarginBottom45}
    text-transform: uppercase;
    @media(max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }

    @media(max-width: ${MobileBreakPoint}){
        font-size: 8svw;
    }
`

type selfAlign='center' |'start' | 'end'
export const PageContentText = styled.a<{ weight: number, upperCase?: boolean, alignSelf?: selfAlign}>`
        display: block;
        width: 69%;
        font-weight: ${({ weight }) => weight};
        text-align: justify;
        letter-spacing: -2%;
        font-size: 0.9svw;
        text-transform: ${({ upperCase }) => upperCase ? 'uppercase' : 'none'};
        align-self: ${({alignSelf})=>alignSelf? alignSelf : 'start'};

        @media (max-width: ${TabletBreakPoint}){
            width: 100%;
            font-size: 1.8svw;
        }
        @media (max-width: ${MobileBreakPoint}){
            width: 100%;
            font-size: 3.8svw;
        }
`

export const AnyInterestPhraseElement = styled(FadeInComponent)`
display: block;
width: 46.9%;
font-weight: 600;
${MarginBootom90}
z-index: 1;
text-align: center;
font-size: 1.8svw;
text-transform: uppercase;

@media(max-width: ${TabletBreakPoint}){
    width: 94%;
    font-size: 3.7svw;
}

@media(max-width: ${MobileBreakPoint}){
    width: 94%;
    font-size: 8.6svw;
}
span{
    font-style: italic;
    color: #CC3327;
    font-weight: 900;
}
`

export const AnyInterestPhrase = ({ children, phrase }: PropsWithChildren<{ phrase: string }>) => {


    return <AnyInterestPhraseElement type='a'>
        {parse(phrase)}
    </AnyInterestPhraseElement>
}
const ExternalLinkElement = styled(Link)`
            display: block;
            text-decoration: none;
            color: inherit;
            font-weight: 600;
            font-size: 1.8svw;
            text-transform: uppercase;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 4.3svw;
    }
`
interface LinkProps {
    to: string,
    style?: React.CSSProperties
}
export const ExternalLink = ({ children, to, style }: PropsWithChildren<LinkProps>) => {

    return (
        <ExternalLinkElement to={to} style={{
            ...style
        }}>
            {children} <MdOutlineArrowOutward style={{ scale: '1.4', transform: 'translateY(6%)' }} />
        </ExternalLinkElement>
    )
}

export const Disk = styled.div`
    height: 102svh;
    aspect-ratio: 1/1;
    background-image: url(${disk});
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%,-50%);
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

    @media(max-width: ${TabletBreakPoint}){
        height: 80svh;
    }
`

export const RedButtonStyle = css<{ hover?: boolean }>`
    background-color: ${({ hover }) => hover ? 'rgba(204, 51, 39, 1)' : 'unset'};
    border: solid rgba(204, 51, 39, 1) 2px;
    text-decoration: none;
    color: ${({ hover }) => hover ? 'rgba(235, 235, 235, 1)' : 'rgba(204, 51, 39, 1)'};
    font-Weight: 800;
    font-size: 1.8svw;
    text-transform: uppercase;
    padding-top: 1svw;
    padding-bottom: 1svw;
    padding-right: 3svw;
    padding-left: 3svw;
    border-radius: 5px;
    display: block;
    width: fit-content;
    font-family: inherit;
    transition: background-color .1s ease-in-out, color .1s ease-in-out;
    cursor: pointer;
    user-select: none;
    @media(max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }
    @media(max-width: ${MobileBreakPoint}){
        font-size: 5.7svw;
        padding-top: 3svw;
        padding-bottom: 3svw;
        padding-right: 5svw;
        padding-left: 5svw;
    }
`
export const RedLinkButtonElement = styled(Link) <{ hover?: boolean }>`
   ${RedButtonStyle}
`

interface RedLinkButtonProps {
    to: string,
    style?: React.CSSProperties,
    onClick?: () => any,
    hover?: boolean
}
export const RedLinkButton = ({ to, style, onClick, hover, children }: PropsWithChildren<RedLinkButtonProps>) => {

    const [btnHover, setHover] = useState(hover || false)


    return <RedLinkButtonElement
        onMouseEnter={() => setHover(!btnHover)}
        onMouseLeave={() => setHover(!btnHover)}
        to={to}
        style={style}
        onClick={onClick}
        hover={btnHover}>{children}</RedLinkButtonElement>
}

const RedButtonElement = styled.button<{ hover: boolean }>`
${RedButtonStyle}
`
interface RedButtonProps {
    style?: React.CSSProperties,
    onClick?: () => any,
    hover?: boolean
}
export const RedButton = ({ style, onClick, hover, children }: PropsWithChildren<RedButtonProps>) => {

    const [btnHover, setHover] = useState(hover || false)

    return <RedButtonElement
        onMouseEnter={() => setHover(!btnHover)}
        onMouseLeave={() => setHover(!btnHover)}
        style={style}
        onClick={onClick}
        hover={btnHover}>
        {children}
    </RedButtonElement>
}

export const PageColumnsBlockPhotoContainer = styled.div`
display: flex;
flex-direction: column;
width: 47%;
flex-grow: 1;
display: flex;
flex-direction: column;
${MarginBottom60}
    @media (max-width: ${TabletBreakPoint}) {
        width: 55%;
    }
    @media (max-width: ${MobileBreakPoint}) {
        width: 100%;
    }
`
const PageColumnsBlockPhotoContent = styled.div`
width: 98%;
display: flex;
flex-direction: column;
align-items: center;

img{
    width: 100%;
    object-fit: cover;
    ${MarginBottom45}
}

a{
    font-size: 1.8svw;
    text-transform: uppercase;
    color:rgba(204, 51, 39, 1);
    font-weight: 600;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }

    @media (max-width: ${MobileBreakPoint}){
        font-size: 6svw;
    }
}

@media (max-width: ${MobileBreakPoint}) {
        width: 100%;
    }
`

export const PageColumnsBlockPhoto = ({ src, description }: PropsWithChildren<{ src: string, description?: string }>) => {

    return <PageColumnsBlockPhotoContainer>
        <PageColumnsBlockPhotoContent>
            <img src={src} alt={'photo'} />
            {description && <a>{description}</a>}
        </PageColumnsBlockPhotoContent>
    </PageColumnsBlockPhotoContainer>
}