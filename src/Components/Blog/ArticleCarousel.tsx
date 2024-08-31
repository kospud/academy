import React, { PropsWithChildren } from 'react'
import { styled } from 'styled-components'
import FadeInComponent from '../FadeInComponent'
import Slider, { InnerSlider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import article1 from '../../img/Article/article1.png'
import article2 from '../../img/Article/article2.png'
import article3 from '../../img/Article/article3.png'
import article4 from '../../img/Article/article4.png'
import { ExternalLink, FontSize18, FontSize36, RedLinkButton } from '../PageBlocks';
import { Link } from 'react-router-dom';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import { MarginBottom45, MarginBottom24 } from '../Gaps';
import { BLOG_ROUTE, MobileBreakPoint, TabletBreakPoint } from '../Utils/Consts';
import SliderWithCustomArrows from '../SliderWithCustomArrows';

const ArticleElement = styled.div`
width: 96%;
margin-left: 1.8%;
margin-right: 1.8%;
display: flex;
flex-direction: column;
align-items: center;

a{
    display: block;
}

@media (max-width: ${MobileBreakPoint}) {
    width: 100%;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
}
`

const ArticlePhoto = styled.img`
width: 100%;
aspect-ratio: 9/10;
object-fit: cover;
${MarginBottom45}

@media(max-width: ${MobileBreakPoint}){
    width: 35svw;
}
`

const ArticleInfo=styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;

@media(max-width: ${MobileBreakPoint}){
    width: 55%;
${MarginBottom45};
align-items: start;
}
`

const ArticleDate = styled.a`
    ${MarginBottom24}
    font-size: 0.9svw;

    @media (max-width: ${TabletBreakPoint}){
        font-size: 1.8svw;
    }
    @media(max-width: ${MobileBreakPoint}){
        font-size: 1.9svw;
    }
`

const ArticleTitle = styled.a`
text-align: center;
${MarginBottom45}
font-size: 0.9svw;
font-weight: 600;
text-transform: uppercase;
    @media (max-width: ${TabletBreakPoint}){
        font-size: 1.8svw;
    }
    @media(max-width: ${MobileBreakPoint}){
        margin-bottom: 2svh;
        width: 80%;
        text-align: start;
        font-size: 3.8svw;
    }
`

export interface Article {
    photo: string,
    date: string,//Пока строка, а там разберемся
    title: string,
    id: number//Для навигации
}

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
    }
]

interface ArticleComponentProps {
    article: Article
}

export const Article = ({ article }: ArticleComponentProps) => {

    const { photo, title, date, id } = article;

    return (
        <ArticleElement>
            <ArticlePhoto src={photo} alt='photo' />
            <ArticleInfo>
            <ArticleDate>{date}</ArticleDate>
            <ArticleTitle>{title}</ArticleTitle>
            <ExternalLink to={`/blog/${id}`}>ЧИТАТЬ</ExternalLink>
            </ArticleInfo>
        </ArticleElement>
    )
}


const ArticleCarouselContainer = styled(FadeInComponent)`
width: 94%;
display: flex;
justify-content: center;

@media(max-width: ${TabletBreakPoint}){
    width: 100%;
}

@media(max-width: ${MobileBreakPoint}){
    width: 88%;
}
`

const ArticleCarouselContent = styled.div`
width: 100%;

@media(max-width: ${TabletBreakPoint}){
    width: 188%;
}

@media(max-width: ${MobileBreakPoint}){
    width: 100%;
}
`

const AllArticlesBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 24svh;

@media(max-width: ${MobileBreakPoint}){
    justify-content: flex-start;
    margin-top: -5svh;
    margin-bottom: 5svh;
    
}
`
function ArticleCarousel() {



    return (
        <ArticleCarouselContainer type='div' threshold={0.3}>
            <ArticleCarouselContent>
                {isDesktop || isTablet ? <ArticlesSlider articles={MockArticles} /> : <ArticleList articles={MockArticles} />}
                <AllArticlesBlock>
                    <RedLinkButton hover to={BLOG_ROUTE}>Все статьи</RedLinkButton>
                </AllArticlesBlock>
            </ArticleCarouselContent>
        </ArticleCarouselContainer>
    )
}

interface SliderProps {
    articles: Article[]
}
function ArticlesSlider({ articles }: SliderProps) {


    const infinite=!isDesktop
    return <SliderWithCustomArrows slidesToShow={4} childrenLength={articles.length} infinite={infinite}>
        {
            articles.map((article) => <Article article={article} />)
        }
    </SliderWithCustomArrows>
}

const ArticleListElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
function ArticleList({ articles }: SliderProps) {
    return <ArticleListElement>
        {
            articles.map((article) => <Article article={article} />)
        }
    </ArticleListElement>
}

export default ArticleCarousel

