import React from 'react'
import FadeInComponent from '../FadeInComponent'
import { styled } from 'styled-components'
import coursePhoto from '../../img/Courses/Course.webp'
import { Link } from 'react-router-dom'
import { FontSize36, FontSize64, RedLinkButton, Spacer } from '../PageBlocks'
import Slider, { Settings } from 'react-slick'
import { MarginBootom180 } from '../Gaps'
import { MobileBreakPoint, TabletBreakPoint } from '../Utils/Consts'
import { isDesktop, isTablet } from 'react-device-detect'
import soonCourse from '../../img/Courses/SoonCourse.webp'
import SliderWithCustomArrows from '../SliderWithCustomArrows'

const CoursesContainer=styled(FadeInComponent)`
    width: 94%;
    ${MarginBootom180}
    display: flex;
    justify-content: flex-end;
`
const CourseCarouselElement = styled.div`
    width: 100%;

    @media(max-width: ${TabletBreakPoint}){
        width: 100%;
    }
`

interface Course {
    photo: string,
    title: string,
    description?: string,
    id?: number
}

const courses: Course[] = [
    {
        photo: coursePhoto,
        title: 'как написать песню',
        description: 'От идеи до реализации',
        id: 1
    },
    {
        photo: soonCourse,
        title: 'Скоро'
    }
]

const CourseCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CourseCardContent = styled.div`
    width: 95%;
`
const CoursePhoto = styled.img`
width: 100%;
aspect-ratio: 1/1;
object-fit: cover;
`

const CourseTitle = styled.a`
color: rgba(204, 51, 39, 1);
font-weight: 600;
display: block;
font-size: 3.3svw;
text-transform: uppercase;

/*@media(max-width: ${TabletBreakPoint}){
    font-size: 6.6svw;
}*/

@media(max-width: ${MobileBreakPoint}){
    font-size: 8.6svw;
}
`

const CourseDescription = styled.a`
color: rgba(235, 235, 235, 1);
font-weight: 400;
display: block;

font-size: 1.8svw;
/*@media(max-width: ${TabletBreakPoint}){
    font-size: 3.7svw;
}*/

@media(max-width: ${MobileBreakPoint}){
    font-size: 3.3svw;
}

`

interface CourseProps {
    course: Course
}

function Course({ course }: CourseProps) {
    const { title, description, photo, id } = course;
    return (
        <CourseCard>
            <CourseCardContent>
                <CoursePhoto src={photo} alt='course' />
                <Spacer />
                <CourseTitle>{title}</CourseTitle>
                {description && <CourseDescription>{description}</CourseDescription>}
                <Spacer />
                {id && <RedLinkButton to={`/courses/${id}`}>Перейти</RedLinkButton>}
            </CourseCardContent>
        </CourseCard>
    )
}

const CourseCarousel = () => {

    const slidesToShow=isDesktop || isTablet? 2 : 1

    return (
        <CoursesContainer type='div'>
        <CourseCarouselElement >
            <SliderWithCustomArrows slidesToShow={slidesToShow} childrenLength={courses.length}>
                {
                    courses.map(course => <Course course={course} />)
                }
            </SliderWithCustomArrows>
        </CourseCarouselElement>
        </CoursesContainer>
    )
}


export default CourseCarousel