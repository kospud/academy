import React, { MouseEvent, MouseEventHandler, PropsWithChildren, useEffect, useRef, useState } from 'react'
import voice from '../../audio/sound.mp3'
import FadeInComponent from '../FadeInComponent'
import { styled } from 'styled-components'
import Slider, { Settings } from 'react-slick'
import { isMobile, isTablet } from 'react-device-detect'
import cassette1 from '../../img/Courses/Casset.webp'
import cassette2 from '../../img/Courses/Casset2.webp'
import { TabletBreakPoint, MobileBreakPoint } from '../Utils/Consts'
import { marginBottom, } from '../Gaps'
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import useSound from 'use-sound'
import { Loader } from '../Preloader'
import { ExternalLink } from '../PageBlocks'
import SliderWithCustomArrows from '../SliderWithCustomArrows'

interface Review {
    name: string,
    review: string
}

const mockReview: Review[] = [
    {
        name: 'Ирина',
        review: voice
    },
    {
        name: 'Алексей',
        review: voice
    },
    {
        name: 'Ираклий',
        review: voice
    },
]

const ReviewContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const ReviewContent = styled.div`
width: 98%;
display: flex;
flex-direction: column;
align-items: center;

a{
    text-transform: uppercase;
    color: rgba(204, 51, 39, 1);
    font-weight: 600;
    font-size: 1.8svw;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 8svw;
    }
}
`

const CassetContainer = styled.div`
position: relative;
cursor: pointer;
z-index: 1;
${marginBottom(45)}
img{
    width: 100%;
    object-fit: cover;
}
`

const PlayerIcon = styled.div`
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(204, 51, 39, 1);

    font-size: 1.8svw;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }
    @media (max-width: ${MobileBreakPoint}){
        font-size: 8svw;
    }
`
interface ReviewProps {
    review: Review,
    index: number
}
const Review = ({ review, index }: ReviewProps) => {

    const img = index % 2 === 0 ? cassette2 : cassette1;

    const imgRef=useRef<HTMLDivElement>(null);
    const [isPlayed, setPlayed] = useState(false);
    const [isLoading, setLoading]=useState(true)
    const [playOn, playOff] = useSound(review.review, {onload() {
        setLoading(false)
    },})

    const onClickHandler = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setPlayed(prev=>!prev)
        return false
    }

    useEffect(() => {

        if (isPlayed) {
            playOn()
        }
        else {
            playOff.pause();
        }
    }, [isPlayed])


    return <ReviewContainer>
        <ReviewContent>
            <CassetContainer onClick={onClickHandler}>
                <PlayerIcon>
                    {isPlayed ? <FaStop /> : <FaPlay />}
                </PlayerIcon>
                <img src={img} alt={review.name}/>
            </CassetContainer>
            <a>{review.name}</a>
        </ReviewContent>
    </ReviewContainer>
}

const ReviewsContainer = styled(FadeInComponent)`
    width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${marginBottom(180)}
    
    @media (max-width: ${MobileBreakPoint}){
        align-items: start;
        width: 88%;
    }
`
const CarouselContainer=styled.div`
    width: 100%;
    ${marginBottom(90)}
`
interface ReviewsProps {
    reviews: Review[]
}
function Reviews({ reviews }: ReviewsProps) {

    const slideToShow = isMobile ? isTablet ? 2 : 1 : 3;
    return (
        <ReviewsContainer type='div'>
            <CarouselContainer>
            <SliderWithCustomArrows slidesToShow={slideToShow} childrenLength={reviews.length}>
                {
                    reviews.map((review, index) => <Review key={index} review={review} index={index} />)
                }
            </SliderWithCustomArrows>
            </CarouselContainer>
            <ExternalLink to=''>Прослушать все</ExternalLink>
        </ReviewsContainer>
    )
}

export default Reviews