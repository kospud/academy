import React, { MouseEvent, useContext, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import FadeInComponent from '../FadeInComponent'
import method from "../../img/Courses/gifs/method.gif"
import mentors from "../../img/Courses/gifs/mentors.gif"
import students from "../../img/Courses/gifs/students.gif"
import interesting from "../../img/Courses/gifs/interesting.gif"
import { queryByTitle } from '@testing-library/react'
import { PageScrollbarContext } from '../Providers/PageScrollbarContextProvider'
import { TabletBreakPoint, MobileBreakPoint } from '../Utils/Consts'
import { marginBottom, } from '../Gaps'
import { isDesktop } from 'react-device-detect'
import { responsiveText } from '../text'


const Text=css`
        text-transform: uppercase;
        font-weight: 600;
        user-select: none;
        ${responsiveText(36,36,18)}
`

const GifsBlockDivider = styled.div`
width: 2px;
background-color: rgba(204, 51, 39, 1);
height: 100%;
`

const GifsBlockContainer = styled(FadeInComponent)`
    width: 94%;
    display: flex;
    height: 80svh;
    ${marginBottom(180)}

    @media (max-width: ${TabletBreakPoint}){
        height: auto;
        flex-direction: column;
    }

    @media (max-width: ${MobileBreakPoint}){
        width: 88%;
    }
`

const GifsBlockElementContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    position: relative;
`

const GifsBlockElementTitle=styled.a`
position: absolute;
display: block;
width: 80%;
left: 10%;
${Text}
`

const GifsBlockElementimage = styled.img<{ isShow: boolean }>`
    position: absolute;
    max-width: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    opacity: ${({ isShow }) => isShow ? '1' : '0'};
    transition: opacity .3s ease-in-out; 
    pointer-events: none;
    z-index: 1;
`


interface GifsBlockElementProps {
    element: {title: string,
    gif: string,
    titleBottom: number}
    index: number,
}
function GifsBlockDesktopElement({ element, index}: GifsBlockElementProps) {

    const {title, gif, titleBottom }=element
    const {scrollbar}=useContext(PageScrollbarContext)!
    const blockRef = useRef<HTMLDivElement>(null)
    const [imgShow, setImgShow] = useState(false)
    const [imgPosition, setImgPosition] = useState([0, 0])

    const onMouseEnterHandler = () => {
        setImgShow(true)
    }

    const onMouseMoveHandler = (e: MouseEvent) => {
        if (blockRef.current) {
    
            const {left, top, width, height}=blockRef.current.getBoundingClientRect()


            //console.log(blockRef.current.getBoundingClientRect())
            const clientX = e.clientX
            const clientY = e.clientY
            const pointerX=(clientX-left)
            const pointerY=(clientY-top)
            console.log(pointerX + ' ' + pointerY)
            setImgPosition([pointerX, pointerY])
        }
    }

    const onMouseLeaveHandler = () => {
        setImgShow(false)
    }

    return <>
        {index === 0 && <GifsBlockDivider />}
        <GifsBlockElementContainer ref={blockRef}
            onMouseEnter={onMouseEnterHandler}
            onMouseMove={onMouseMoveHandler}
            onMouseLeave={onMouseLeaveHandler}>
                <GifsBlockElementTitle style={{bottom: `${titleBottom}%`}}>{title}</GifsBlockElementTitle>
            {imgShow && <GifsBlockElementimage style={{ left: imgPosition[0],top: imgPosition[1] }} src={gif} alt={title} isShow={imgShow} />}
        </GifsBlockElementContainer>
        <GifsBlockDivider />
    </>
}

const GifsBlockTabletElementContainer=styled.div`
    width: 100%;

    a{
        display: block;
        ${Text}
        ${marginBottom(24)}
    }

    img{
        width: 100%;
        aspect-ratio: 16/10;
        object-fit: cover;
        ${marginBottom(45)}
    }
`

function GifsBlockTabletElement({element}: GifsBlockElementProps){

    const {title, gif }=element
    return <GifsBlockTabletElementContainer>
        <a>{title}</a>
        <img src={gif} alt={title}/>
    </GifsBlockTabletElementContainer>
}
const GifsBlockElements = [
    {
        title: 'Авторская методика',
        gif: method,
        titleBottom: 10
    },
    {
        title: 'Увлекательный процесс',
        gif: interesting,
        titleBottom: 50
    },
    {
        title: 'довольные ученики',
        gif: students,
        titleBottom: 80
    },
    {
        title: 'Опытные преподаватели',
        gif: mentors,
        titleBottom: 30
    }
]
function GifsBlock() {
    return (
        <GifsBlockContainer type='div' threshold={0.1}>
            {
                GifsBlockElements.map((element, index) => isDesktop?
                 <GifsBlockDesktopElement element={element} index={index}/>
                :
                <GifsBlockTabletElement element={element} index={index}/>)
            }
        </GifsBlockContainer>
    )
}

export default GifsBlock