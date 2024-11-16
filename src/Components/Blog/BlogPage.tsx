import React from 'react'
import { AnyInterestPhrase, PageColumnsBlockPhoto, PageContainer, PageContent, PageContentBlock, PageContentBlockHeader, PageContentColumnsBlock, PageContentColumnsBlockHeader, PageContentText, PageContentTextBlock, PageHeader, PageTopBlock, Spacer } from '../PageBlocks'
import ArticleCarousel from './ArticleCarousel'
import Footer from '../Footer'
import styled from 'styled-components'
import mockHeader from '../../img/Blog/mockBlogPage/mockPageHeader.svg'
import blogHeaderImg from '../../img/Blog/mockBlogPage/BlogHeaderImage.webp'
import { marginBottom } from '../Gaps'
import { MobileBreakPoint } from '../Utils/Consts'
import photo from '../../img/Blog/mockBlogPage/blogPagePhoto.png'
const BlogPageHeaderBlock=styled.div`
position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;

    margin-top: 16svh;
    @media (max-width: ${MobileBreakPoint}){
        width: 88%;
        margin-top: 12svh
    }
    
`

const BlogPageImg=styled.img`
width: 100%;
object-fit: cover;
${marginBottom(90)}
`


const mockBlogPage={
    title: mockHeader,
    headerImg: blogHeaderImg,
    contentBlock1: {
        textBlocks: [{
            weight: 500,
            uppercase: true,
            content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'

        },
    {
        weight: 300,
        uppercase: false,
        content: 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'
    }],
        interestPhrase: 'ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>. ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>.'
    }

}
function BlogPage() {

    const description= ['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
    ]

    const description2=['Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. ',
        'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
    ]

    const blogPage=mockBlogPage
  return (
    <PageContainer>
        <PageTopBlock>
            <BlogPageHeaderBlock>
                <div><img src={blogPage.title} style={{ width: '100%', flexGrow: 0 }}/></div>
                <Spacer/>
                <BlogPageImg src={blogPage.headerImg} alt='headerImg'/>
            </BlogPageHeaderBlock>
        </PageTopBlock>
        <PageContent>
            <PageContentBlock>
                <PageContentColumnsBlock type='div' threshold={0.1}>
                    <PageContentTextBlock>
                        {
                            blogPage.contentBlock1.textBlocks.map(({weight, uppercase, content}, index, arr)=><>
                            <PageContentText key={index} weight={weight} upperCase={uppercase}>{content}</PageContentText>
                            {index!==arr.length-1 && <Spacer/>}
                            </>
                            )
                        }
                    </PageContentTextBlock>
                </PageContentColumnsBlock>
                <AnyInterestPhrase phrase={blogPage.contentBlock1.interestPhrase}/>
            </PageContentBlock>
            <PageContentBlock>
                <PageContentColumnsBlock type='div' threshold={0.1}>
                <PageColumnsBlockPhoto src={photo}/>
                <PageContentTextBlock>
                    {
                        description.map((block, index, arr) => <>
                            <PageContentText key={index} weight={300} alignSelf={index!==arr.length-1? 'start' : 'end'}>{block}</PageContentText>
                            {index !== arr.length - 1 && <Spacer />}
                        </>)
                    }
                </PageContentTextBlock>
                </PageContentColumnsBlock>
                <AnyInterestPhrase phrase='ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>. ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>.'></AnyInterestPhrase>
                <PageContentColumnsBlock type='div'>
                    <PageContentColumnsBlockHeader>Заголовок 1</PageContentColumnsBlockHeader>
                    <PageContentTextBlock>
                    {
                        description2.map((block, index, arr) => <>
                            <PageContentText key={index} weight={300} alignSelf={'start'}>{block}</PageContentText>
                            {index !== arr.length - 1 && <Spacer />}
                        </>)
                    }
                                        <Spacer/>
                                        <Spacer/>
                    </PageContentTextBlock>
                </PageContentColumnsBlock>
            </PageContentBlock>
            <PageContentBlock>
                <PageContentBlockHeader type='h1'>Полезные статьи</PageContentBlockHeader>
                <ArticleCarousel/>
            </PageContentBlock>
            <Footer/>
        </PageContent>
    </PageContainer>
  )
}

export default BlogPage