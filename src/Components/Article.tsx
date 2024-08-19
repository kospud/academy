import React from 'react'
import { styled } from 'styled-components'
import FadeInComponent from './FadeInComponent'
import Slider, { InnerSlider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import article1 from '../img/Article/article1.png'
import article2 from '../img/Article/article2.png'
import article3 from '../img/Article/article3.png'
import article4 from '../img/Article/article4.png'
import { ExternalLink, FontSize18, FontSize36, MarginBottom24, MarginBottom45 } from './PageBlocks';
import { Link } from 'react-router-dom';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';

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

@media (max-width: 600px) {
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

@media(max-width: 600px){
    width: 35svw;
}
`

const ArticleInfo=styled.div`
width: 55%;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 600px){
${MarginBottom45};
align-items: start;
}
`

const ArticleDate = styled.a`
    ${MarginBottom24}
    font-size: 0.9svw;

    @media (max-width: 1100px){
        font-size: 1.8svw;
    }
    @media(max-width: 600px){
        font-size: 1.9svw;
    }
`

const ArticleTitle = styled.a`
text-align: center;
${MarginBottom45}
font-size: 0.9svw;

    @media (max-width: 1100px){
        font-size: 1.8svw;
    }
    @media(max-width: 600px){
        margin-bottom: 2svh;
        width: 80%;
        text-align: start;
        font-size: 3.8svw;
    }
`

interface Article {
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

const Article = ({ article }: ArticleComponentProps) => {

    const { photo, title, date, id } = article;

    return (
        <ArticleElement>
            <ArticlePhoto src={photo} alt='photo' />
            <ArticleInfo>
            <ArticleDate>{date}</ArticleDate>
            <ArticleTitle>{title.toUpperCase()}</ArticleTitle>
            <ExternalLink to={`/academy/articles/${id}`}>ЧИТАТЬ</ExternalLink>
            </ArticleInfo>
        </ArticleElement>
    )
}


const ArticleCarouselContainer = styled(FadeInComponent)`
width: 94%;
display: flex;
justify-content: center;

@media(max-width: 1100px){
    width: 100%;
}

@media(max-width: 600px){
    width: 90%;
}
`

const ArticleCarouselContent = styled.div`
width: 100%;

@media(max-width: 1100px){
    width: 188%;
}

@media(max-width: 600px){
    width: 100%;
}
`

const AllArticlesBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 24svh;

@media(max-width: 600px){
    justify-content: flex-start;
}
`

const LinkBlock = styled.div`
height: 4.2svw;
width: 16.3svw;
display: flex;
justify-content: center;
align-Items: center;
background-color: rgba(204, 51, 39, 1);

border-radius: 5px;

@media(max-width: 1100px){
    height: 8svw;
    width: 27svw;
    }
    @media(max-width: 600px){
        height: 12svw;
        width: 58svw;
    }

a{
    display: block;
    color: rgba(235, 235, 235, 1);
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

function ArticleCarousel() {



    return (
        <ArticleCarouselContainer type='div' threshold={0.3}>
            <ArticleCarouselContent>
                {isDesktop || isTablet ? <ArticlesSlider articles={MockArticles} /> : <ArticleList articles={MockArticles} />}
                <AllArticlesBlock>
                    <LinkBlock>
                        <Link style={{ textDecoration: 'none' }} to={'/academy/articles'}>ВСЕ СТАТЬИ</Link>
                    </LinkBlock>
                </AllArticlesBlock>
            </ArticleCarouselContent>
        </ArticleCarouselContainer>
    )
}

interface SliderProps {
    articles: Article[]
}
function ArticlesSlider({ articles }: SliderProps) {

    const settings: Settings = {
        dots: false,
        infinite: isMobile ? true : false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToScroll: 1
                }
            }
        ]
    }

    return <Slider {...settings}>
        {
            articles.map((article) => <Article article={article} />)
        }
    </Slider>
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