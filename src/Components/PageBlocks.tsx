import styled, { css } from "styled-components";
import FadeInComponent from "./FadeInComponent";
import { Link } from "react-router-dom";
import { createContext, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import disk from "../img/disk.webp"
import Scrollbar from "smooth-scrollbar";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { PageScrollbarContext } from "./Providers/PageScrollbarContextProvider";

export const FontSize18 = css`
    font-size: 0.9svw;

    @media (max-width: 1000px){
        font-size: 1.8svw;
    }
    @media (max-width: 600px){
        font-size: 4.3svw;
    }
`
export const FontSize64 = css`
    font-size: 3.3svw;

    @media (max-width: 1000px){
        font-size: 6.6svw;
    }
    @media (max-width: 600px){
        font-size: 11.1svw;
    }
`
export const FontSize148 = css`
font-size: 7.7svw;

@media (max-width: 1000px){
        font-size: 15.4svw;
    }
    @media (max-width: 600px){
        font-size: 15.4svw;
    }
`

export const FontSize36 = css`
font-size: 1.8svw;
@media (max-width: 1100px){
        font-size: 3.7svw;
    }
    @media (max-width: 600px){
        font-size: 8.6svw;
    }
`
export const MarginBootom180=css`
    margin-bottom: 16.6svh;
`
export const MarginBootom90=css`
    margin-bottom: 8.3svh;

    @media(max-width: 1100px){
        margin-bottom: 11.7svh;
    }
`

export const MarginTop90=css`
margin-top: 8.3svh;

@media(max-width: 1100px){
    margin-top: 11.7svh;
}

@media(max-width: 1100px){
    margin-top: 7.7svh;
}
`
export const MarginBottom60=css`
margin-bottom: 5.5svh;
`
export const MarginBottom45=css`
    margin-bottom: 4.1svh;

    @media(max-width: 1100){
        margin-bottom: 5svh;
    }
`
export const MarginBottom24=css`
margin-bottom: 2svh;
`

export const PageContainerElement = styled.div`
width: 100%;
${isDesktop && 'height: 100svh'};
background-color: #161515;
overflow: hidden;
color: rgba(235, 235, 235, 1);
overscroll-behavior-y: none;
`

export const PageContainer = ({ children }: PropsWithChildren) => {

    const ref = useRef(null)
    const { setScrollbar } = useContext(PageScrollbarContext)!

    useEffect(() => {
        if (ref.current && isDesktop) {
            const scrollbar = Scrollbar.init(ref.current, {
                damping: 0.08,
                alwaysShowTracks: false,
                delegateTo: document,
                renderByPixels: true
            })

            setScrollbar(scrollbar)
            return () => {
                setScrollbar(undefined)
                scrollbar.destroy()
            }
        }
    }, [])


    return (
        <PageContainerElement id='page' ref={ref}>
            {children}
        </PageContainerElement>
    )
}
//Самый верхний блок страницы на всю ширину и высоту экрана
export const PageTopBlock = styled.div`
width: 100%;
height: 100svh;
position: relative;
overflow: hidden;
`

export const PageTopBlockAlbums = styled.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100svw;
height: 44svw;
z-index: 1;
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
overflow: hidden;
`

interface PageHeaderProps {
    header: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string;
    }>
}
export const PageHeader = ({ header }: PageHeaderProps) => {

    const Header = header as React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    return (
        <PageHeaderContainer>
            <Header width="100%" />
        </PageHeaderContainer>
    )
}
interface MobileHeaderProps{
    academy: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string}>,
    grecords: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string;}>
}
export const PageMobileHeder=({academy, grecords}: MobileHeaderProps)=>{
    const Academy =academy as React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    const Grecords =grecords as React.FunctionComponent<React.SVGProps<SVGSVGElement>>

    return (
        <PageHeaderContainer>
            <Academy width="100%"/>
            <Grecords width="100%"/>
        </PageHeaderContainer>
    )
}

export const PageSmallHeader = styled.h2`
    width: 46svw;
    font-size: 3.3svw;
    position: absolute;
    top: 63.6%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;

    @media(max-width: 1100px){
        width: 53svw;
        font-size: 3.7svw;
    }
    @media (max-width: 600px) {
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
`

export const PageContentBlockHeader = styled(FadeInComponent)`
margin: 0;
margin-top: -2.4svw;
${MarginBootom90}
width: 100%;
font-size: 7.7svw;
text-align: center;
font-weight: 700;
letter-spacing: -0.4svw;
color: #CC3327;

@media(max-width: 1100px){
    font-size: 15.4svw;
}

@media (max-width: 600px) {
    font-size: 15.4svw;
}
`

export const PageContentColumnsBlock = styled(FadeInComponent)`
    width: 94%;
    display: flex;
    ${MarginBootom90}
    z-index: 1;
    justify-content: ${isTablet || isDesktop? 'flex-end' : 'center' };
`

export const Spacer = styled.div`
height: 4.15svh;
`
export const PageContentTextBlock = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1100px) {
        width: 62%;
    }
    @media (max-width: 600px) {
        width: 88.4%;
    }
`

export const PageContentText = styled.a<{ weight: number }>`
    display: block;
        width: 69%;
        ${FontSize18}
        font-weight: ${({ weight }) => weight};
        text-align: justify;
        letter-spacing: -2%;
        font-size: 0.9svw;

        @media (max-width: 1100px){
            width: 96%;
            font-size: 1.8svw;
        }
        @media (max-width: 600px){
            width: 100%;
            font-size: 3.8svw;
        }
`

export const AnyInterestPhrase = styled(FadeInComponent)`
display: block;
width: 46.9%;
font-weight: 600;
${MarginBootom90}
z-index: 1;
text-align: center;
font-size: 1.8svw;

@media(max-width: 1100px){
    width: 94%;
    font-size: 3.7svw;
}

@media(max-width: 600px){
    width: 94%;
    font-size: 8.6svw;
}
span{
    font-style: italic;
    color: #CC3327;
    font-weight: 900;
}

`

const ExternalLinkElement = styled(Link)`
            display: block;
            text-decoration: none;
            color: inherit;
            font-weight: 600;
            font-size: 1.8svw;
    @media (max-width: 1100px){
        font-size: 3.7svw;
    }
    @media (max-width: 600px){
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

    @media(max-width: 1100px){
        height: 80svh;
    }
`
