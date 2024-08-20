import React from 'react'
import FadeInComponent from '../FadeInComponent'
import { styled } from 'styled-components'
import coursePhoto from '../../img/main/Course.webp'
import { Link } from 'react-router-dom'
import { FontSize36, FontSize64, Spacer } from '../PageBlocks'
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MarginBootom180 } from '../Gaps'


const CoursesContainer=styled(FadeInComponent)`
    width: 94%;
    ${MarginBootom180}
    display: flex;
    justify-content: flex-end;
`
const CourseCarouselElement = styled.div`
    width: 50%;

    @media(max-width: 1100px){
        width: 100%;
    }
`

interface Course {
    photo: string,
    title: string,
    description: string,
    id: number
}

const courses: Course[] = [
    {
        photo: coursePhoto,
        title: 'как написать песню',
        description: 'От идеи до реализации',
        id: 1
    },
    {
        photo: coursePhoto,
        title: 'как написать песню',
        description: 'От идеи до реализации',
        id: 1
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

@media(max-width: 1100px){
    font-size: 6.6svw;
}

@media(max-width: 600px){
    font-size: 8.6svw;
}
`

const CourseDescription = styled.a`
color: rgba(235, 235, 235, 1);
font-weight: 400;
display: block;

font-size: 1.8svw;
@media(max-width: 1100px){
    font-size: 3.7svw;
}

@media(max-width: 600px){
    font-size: 3.3svw;
}

`

interface CourseProps {
    course: Course
}

const LinkBlock = styled.div`
height: 4.9svw;
width: 13.5svw;
display: flex;
justify-content: center;
align-Items: center;
border: 0.3svw solid rgba(204, 51, 39, 1);
border-radius: 5px;

@media(max-width: 1100px){
    height: 9.8svw;
    width: 27svw;
    }
    @media(max-width: 600px){
        height: 12svw;
        width: 58svw;
    }

a{
    display: block;
    color: rgba(204, 51, 39, 1);
    font-Weight: 800;

    font-size: 1.8svw;
    @media(max-width: 1100px){
        font-size: 3.7svw;
    }
    @media(max-width: 600px){
        font-size: 5.7svw;
    }
}
`
function Course({ course }: CourseProps) {
    const { title, description, photo, id } = course;
    return (
        <CourseCard>
            <CourseCardContent>
                <CoursePhoto src={photo} alt='course' />
                <Spacer />
                <CourseTitle>{title.toUpperCase()}</CourseTitle>
                <CourseDescription>{description}</CourseDescription>
                <Spacer />
                <Link to={`courses/${id}`} style={{ textDecoration: 'none' }}>
                    <LinkBlock>
                        <a>ПЕРЕЙТИ</a>
                    </LinkBlock>
                </Link>
            </CourseCardContent>
        </CourseCard>
    )
}

const CourseCarousel = () => {

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        /*responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },]*/
    }
    return (
        <CoursesContainer type='div' threshold={0.5}>
        <CourseCarouselElement >
            <Slider {...settings}>
                {
                    courses.map(course => <Course course={course} />)
                }
            </Slider>
        </CourseCarouselElement>
        </CoursesContainer>
    )
}


export default CourseCarousel