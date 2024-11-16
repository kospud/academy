import React, { useContext, useEffect } from 'react'
import { AnyInterestPhrase, PageContainer, PageContent, PageContentBlock, PageContentBlockHeader, PageContentColumnsBlock, PageContentText, PageContentTextBlock, PageHeader, PageSmallHeader, PageTopBlock, RedButton, RedLinkButton, Spacer } from '../PageBlocks'
import { isDesktop, isTablet } from 'react-device-detect'
import pageHeader from "../../img/Courses/0/DesktopHeader.svg"
import Footer from '../Footer'
import  mobileHeader1 from "../../img/Courses/0/MobileHeader1.svg"
import mobileHeader2  from "../../img/Courses/0/MobileHeader2.svg"
import  mobileHeader3  from "../../img/Courses/0/MobileHeader3.svg"
import { PageScrollbarContext } from '../Providers/PageScrollbarContextProvider'
import CourseCarousel from './CourseCarousel'
import Mentors from './Mentors'
import mentorPhoto from "../../img/Courses/0/mentorPhoto.png"
import Accordion, { AccordionItem } from './Accordion'
import GifsBlock from './GifsBlock'
import PriceBlock from './PriceBlock'
import Reviews from './Reviews'
import voice from '../../audio/sound.mp3'

const CourseDesktop = {
    title: [pageHeader],
    shortDescription: 'Курс о том как написать песню',
    aboutCourse: {
        upperTextBlocks: [
            {
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
                weight: 500,
                upperCase: true
            },
            {
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 300,
                upperCase: false
            },
            /*{//тестовая штучка 
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 800,
                upperCase: true
            }*/
        ],
        interestPhrase: 'ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>. ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>.',
        underTextBlocks: [
            {
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 300,
                upperCase: false
            },
            {
                content: 'Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 300,
                upperCase: false
            },
        ],

    },
    mentors: [
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
    ],
    program: [
        {
            title: 'Все начинается с песен',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Демо',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Аранжировка',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Запись',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Финал',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        }
    ] as AccordionItem[],
    priceList: [
        {
            title: 'Оплата сразу',
            price: 49800,
            installment: false,
        },
        {
            title: '6 месяцев',
            price: 8300,
            installment: true,
            description: ['Рассрочка на 6 месяцев', 'без первого взноса']
        },
        {
            title: '12 месяцев',
            price: 4150,
            installment: true,
            description: ['Рассрочка на 12 месяцев', 'без первого взноса']
        },
        {
            title: '24 месяца',
            price: 2075,
            installment: true,
            description: ['Рассрочка на 24 месяца', 'без первого взноса']
        }
    ],
    rewiews: [
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

}

const CourseMobile = {
    title: [mobileHeader1, mobileHeader2, mobileHeader3],
    shortDescription: 'Курс о том как написать песню',
    aboutCourse: {
        upperTextBlocks: [
            {
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
                weight: 500,
                upperCase: true
            },
            {
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 300,
                upperCase: false
            },
            /*{//тестовая штучка 
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 800,
                upperCase: true
            }*/
        ],
        interestPhrase: 'ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>.',
        underTextBlocks: [
            {
                content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 300,
                upperCase: false
            },
            {
                content: 'Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.',
                weight: 300,
                upperCase: false
            },
        ],
    },
    mentors: [
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
    ],
    program: [
        {
            title: 'Все начинается с песен',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Демо',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Аранжировка',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Запись',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        },
        {
            title: 'Финал',
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
        }
    ] as AccordionItem[],
    priceList: [
        {
            title: 'Оплата сразу',
            price: 49800,
            installment: false,
        },
        {
            title: '6 месяцев',
            price: 8300,
            installment: true,
            description: ['Рассрочка на 6 месяцев', 'без первого взноса']
        },
        {
            title: '12 месяцев',
            price: 4150,
            installment: true,
            description: ['Рассрочка на 12 месяцев', 'без первого взноса']
        },
        {
            title: '24 месяца',
            price: 2075,
            installment: true,
            description: ['Рассрочка на 24 месяца', 'без первого взноса']
        }
    ],
    rewiews: [
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
}

function CoursePage() {

    const { scrollbar } = useContext(PageScrollbarContext)!

    /*useEffect(() => {
        if (scrollbar) {
            scrollbar.scrollTop = 0;
        } else {
            window.scrollTo(0, 0)
        }
    }, [])*/

    const course = isDesktop || isTablet ? CourseDesktop : CourseMobile
    return (
        <PageContainer>
            <PageTopBlock id='topBlock'>
                <PageHeader lines={course.title} smallHeader={course.shortDescription} />
                <RedButton hover style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '10%' }} onClick={() => alert('Тут что-то выскочит')}>Записаться</RedButton>
            </PageTopBlock>
            <PageContent>
                <PageContentBlock>
                    <PageContentBlockHeader type='h1'>О чем этот курс</PageContentBlockHeader>
                    {
                        course.aboutCourse.upperTextBlocks && <PageContentColumnsBlock type='div'>
                            <PageContentTextBlock>
                                {
                                    course.aboutCourse.upperTextBlocks.map(({ content, weight, upperCase }, index, arr) => <>

                                        <PageContentText key={index} weight={weight} upperCase={upperCase}>{content}</PageContentText>
                                        {index !== arr.length && <Spacer />}
                                    </>)
                                }
                            </PageContentTextBlock>
                        </PageContentColumnsBlock>
                    }
                    <AnyInterestPhrase phrase={course.aboutCourse.interestPhrase} />
                    {
                        course.aboutCourse.underTextBlocks && <PageContentColumnsBlock type='div'>
                            <PageContentTextBlock>
                                {
                                    course.aboutCourse.underTextBlocks.map(({ content, weight, upperCase }, index, arr) => <>

                                        <PageContentText key={index} weight={weight} upperCase={upperCase}>{content}</PageContentText>
                                        {index !== arr.length - 1 && <Spacer />}
                                    </>)
                                }
                                <Spacer />
                                <Spacer />
                                <Spacer />
                                <Spacer />
                            </PageContentTextBlock>
                        </PageContentColumnsBlock>
                    }
                </PageContentBlock>
                <PageContentBlock>
                    <PageContentBlockHeader wordBreak type='h1'>Преподаватели</PageContentBlockHeader>
                    <Mentors/>
                </PageContentBlock>
                <PageContentBlock>
                    <PageContentBlockHeader type='h1'>программа курса</PageContentBlockHeader>
                    <Accordion items={course.program} />
                </PageContentBlock>
                <PageContentBlock>
                    <PageContentBlockHeader type='h1'>Почему мы</PageContentBlockHeader>
                    <GifsBlock/>
                </PageContentBlock>
                <PageContentBlock>
                    <PageContentBlockHeader type='h1'>Стоимость</PageContentBlockHeader>
                    <PriceBlock priceList={course.priceList}/>
                </PageContentBlock>
                <PageContentBlock>
                    <PageContentBlockHeader type='h1'>Отзывы</PageContentBlockHeader>
                    <Reviews reviews={course.rewiews}/>
                </PageContentBlock>
                <PageContentBlock>
                    <PageContentBlockHeader type='h1'>Все наши курсы</PageContentBlockHeader>
                    <CourseCarousel />
                </PageContentBlock>
                <Footer />
            </PageContent>
        </PageContainer>

    )
}

export default CoursePage