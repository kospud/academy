import React, { PropsWithChildren, useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from 'styled-components';
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MobileBreakPoint, TabletBreakPoint } from './Utils/Consts';
import { isDesktop } from 'react-device-detect';

enum arrowType {
    prev,
    next
}
interface SliderProps {
    slidesToShow: number,
    childrenLength: number,
    infinite?: boolean
}

const SliderContainer = styled.div`
    position: relative;
`

const CustomArrow = styled.div<{ type: arrowType }>`
width: fit-content;
height: fit-content;
font-size: 7.7svw;
color: #c9c9c9;
opacity: 0.5;
transition: opacity .1s ease-in-out;
pointer-events: auto;
cursor: pointer;
&:hover{
    opacity: 0.9;
}
@media(max-width: ${TabletBreakPoint}){
    font-size: 15.4svw;
    
}

@media (max-width: ${MobileBreakPoint}) {
    font-size: 20svw;
}
`

const ArrowsContainer=styled.div`
width: 100svw;
z-index: 1;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: space-between;
pointer-events: none;

@media(max-width: ${TabletBreakPoint}){
    width: 110svw;
    
}

@media (max-width: ${MobileBreakPoint}) {
    width: 113svw;
}
`

const DotsContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`

const Dot=styled.div<{selected: boolean}>`
    width: 10px;
    aspect-ratio: 1/1;
    background-color: red;
    opacity: ${({selected})=>selected? '0.5': '1'};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    transition: opacity .3s ease-in-out;
`
function SliderWithCustomArrows({ children, slidesToShow, childrenLength, infinite }: PropsWithChildren<SliderProps>) {


    const sliderRef = useRef<Slider>(null)

    const [selectedIndex, setSelectedIndex]=useState(0)
    

    const isSlided = infinite ?? childrenLength > slidesToShow
    const settings: Settings = {
        arrows: false,
        slidesToScroll: 1,
        infinite: isSlided,
        dots: false,
        slidesToShow: slidesToShow,
        beforeChange(currentSlide, nextSlide) {
            setSelectedIndex(nextSlide)
        },
    }

    const nextSlide=()=>{
        sliderRef.current?.slickNext()
    }

    const prevSlide=()=>{
        sliderRef.current?.slickPrev()
    }
    return (
        <SliderContainer>
            {isSlided && isDesktop && <ArrowsContainer>
            <CustomArrow type={arrowType.prev} onClick={prevSlide}>
                <RiArrowLeftWideFill />
            </CustomArrow>
            <CustomArrow type={arrowType.next} onClick={nextSlide}>
                <RiArrowRightWideFill />
            </CustomArrow>
            </ArrowsContainer>}
            <Slider ref={sliderRef} {...settings}>
                {
                    children
                }
            </Slider>
            {isSlided && <DotsContainer>
                    {

                        Array(childrenLength).fill(null).map((_, index)=><Dot key={index} selected={selectedIndex===index}/>)
                    }
                </DotsContainer>}
        </SliderContainer>
    )
}

export default SliderWithCustomArrows