import React, { PropsWithChildren, useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from 'styled-components';
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MobileBreakPoint, TabletBreakPoint } from './Utils/Consts';

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
function SliderWithCustomArrows({ children, slidesToShow, childrenLength, infinite }: PropsWithChildren<SliderProps>) {


    const sliderRef = useRef<Slider>(null)

    const isSlided = infinite ?? childrenLength > slidesToShow
    const settings: Settings = {
        arrows: false,
        slidesToScroll: 1,
        infinite: isSlided,
        dots: isSlided,
        slidesToShow: slidesToShow
    }

    const nextSlide=()=>{
        sliderRef.current?.slickNext()
    }

    const prevSlide=()=>{
        sliderRef.current?.slickPrev()
    }
    return (
        <SliderContainer>
            {isSlided && <ArrowsContainer>
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
        </SliderContainer>
    )
}

export default SliderWithCustomArrows