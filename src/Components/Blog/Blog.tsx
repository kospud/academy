import React from 'react'
import article1 from '../../img/Article/article1.png'
import article2 from '../../img/Article/article2.png'
import article3 from '../../img/Article/article3.png'
import article4 from '../../img/Article/article4.png'
import { PageContainer, PageContent, PageTopBlock } from '../PageBlocks'
import Footer from '../Footer'
import { Article } from './ArticleCarousel'
import { styled } from 'styled-components'
import { MobileBreakPoint, TabletBreakPoint } from '../Utils/Consts'
import { marginBottom } from '../Gaps'


const MockArticles: Article[] = [
    {
        photo: article1,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article2,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article3,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article4,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article1,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article2,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article3,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    },
    {
        photo: article4,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2023',
        id: 0
    }
]

const BlogContainer=styled.div`
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    flex-wrap: wrap;
    display: flex;
    margin-top: 16svh;
    @media (max-width: ${MobileBreakPoint}){
        width: 88%;
        margin-top: 12svh
    }
`

const ArticleContainer=styled.div`
width: 25%;
${marginBottom(90)}

@media (max-width: ${TabletBreakPoint}){
    width: 50%;
}
@media (max-width: ${MobileBreakPoint}){
        width: 100%;
        margin-bottom: 0;
    }
`
function Blog() {

    const articles=MockArticles
  return (
    <PageContainer>
        <PageTopBlock id='1'>
            <BlogContainer>
                {
                    articles.map((article)=><ArticleContainer>
                        <Article article={article}/>
                    </ArticleContainer>)
                }
            </BlogContainer>
        </PageTopBlock>
       <PageContent>
        </PageContent> 
        <Footer/>
    </PageContainer>
  )
}

export default Blog