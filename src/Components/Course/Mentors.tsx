import React, { PropsWithChildren } from 'react'
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeInComponent from '../FadeInComponent';
import { styled } from 'styled-components';
import { PageContentColumnsBlock, PageContentText, PageContentTextBlock, Spacer } from '../PageBlocks';
import { MarginBootom180, MarginBootom90, MarginBottom45, MarginBottom60 } from '../Gaps';
import { MobileBreakPoint, TabletBreakPoint } from '../Utils/Consts';
import mentorPhoto from "../../img/Courses/0/mentorPhoto.png"
import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import SliderWithCustomArrows from '../SliderWithCustomArrows';

const MentorPhotoContainer = styled.div`
display: flex;
flex-direction: column;
width: 47%;
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

const MentorPhoto = styled.div`
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
export interface Mentor {
    photo: string,
    title: string,
    description: string[]
}
const MentorCard = ({ mentor }: PropsWithChildren<{ mentor: Mentor }>) => {

    const { photo, title, description } = mentor

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <PageContentColumnsBlock type='div' threshold={0} style={{marginBottom: 0}}>
                <MentorPhotoContainer>
                    <MentorPhoto>
                        <img src={photo} alt={title} />
                        <a>{title}</a>
                    </MentorPhoto>
                </MentorPhotoContainer>
                <PageContentTextBlock>
                    {
                        description.map((block, index, arr) => <>
                            <PageContentText key={index} weight={300}>{block}</PageContentText>
                            {index !== arr.length - 1 && <Spacer />}
                        </>)
                    }
                </PageContentTextBlock>
            </PageContentColumnsBlock>
        </div>
    )
}
const MentorsCarouselContainer = styled(FadeInComponent)`
    width: 100%;
    ${MarginBootom180};
    align-self: center;
`



const mockMentorsDesktop = [
    {
        photo: mentorPhoto,
        title: 'Рома CVPELLV',
        description: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',

        ]
    },
    {
        photo: mentorPhoto,
        title: 'Рома CVPELLV',
        description: ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',

        ]
    }
]

const mockMentorsTablet = [
    {
        photo: mentorPhoto,
        title: 'Рома CVPELLV',
        description: [
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        ]
    },
    {
        photo: mentorPhoto,
        title: 'Рома CVPELLV',
        description: [
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        ]
    },
]

const mockMentorsMobile = [
    {
        photo: mentorPhoto,
        title: 'Рома CVPELLV',
        description: [
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'
        ]
    },
    {
        photo: mentorPhoto,
        title: 'Рома CVPELLV',
        description: [
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
            'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'
        ]
    },
]

function Mentors() {


    const mentors = isMobile ? isTablet ? mockMentorsTablet : mockMentorsMobile : mockMentorsDesktop

    const settings: Settings = {
        dots: mentors.length > 1,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <MentorsCarouselContainer type='div'>
            {
                mentors.length === 1 ? <MentorCard mentor={mentors[0]} /> : <SliderWithCustomArrows slidesToShow={1} childrenLength={mentors.length}>
                    {
                        mentors.map((mentor: Mentor, index) => <MentorCard key={index} mentor={mentor} />)
                    }
                </SliderWithCustomArrows>
            }
        </MentorsCarouselContainer>
    )
}

export default Mentors