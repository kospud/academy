import React, { useContext, useEffect, useState } from 'react'
import { AnyInterestPhrase, Disk, ExternalLink, PageContainer, PageContent, PageContentBlock, PageContentBlockHeader, PageContentColumnsBlock, PageContentText, PageContentTextBlock, PageHeader, PageMobileHeder, PageSmallHeader, PageTopBlock, PageTopBlockAlbums, Spacer } from '../PageBlocks'
import Album from './Album'
import { ReactComponent as pageHeader } from "../../img/main/HeaderDesktop.svg"
import {ReactComponent as academy} from "../../img/main/HederMobileAcademy.svg"
import {ReactComponent as grecords} from "../../img/main/HeaderMobileGrecords.svg"
import Preloader from '../Preloader'
import metalica from "../../img/main/Metalica.webp"
import bowie from "../../img/main/Bowie.webp"
import hendrix from "../../img/main/Hendrix.webp"
import acdc from "../../img/main/ACDC.webp"
import anyAlbum from "../../img/main/AnyAlbum.webp"
import pinkFloyd from "../../img/main/PinkFloyd.webp"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import parse from "html-react-parser"
import CourseCarousel from './Course'
import { PageScrollbarContext } from '../Providers/PageScrollbarContextProvider'
import ArticleCarousel from '../Article'
import { isDesktop, isMobile, isTablet } from 'react-device-detect'
import Footer from '../Footer'


const pageSmallHeader = 'курсы для начинающих в шоу-бизнесе'
const pageBloc1Hedaer = 'о нас'
const pageBlock1Text1 = 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
const pageBlock1Text2 = 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'
const anyInterstPhrase = 'ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>. ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>.'
const anyInterstPhraseMobile = 'ЗДЕСЬ <span>БУДЕТ</span> НАПИСАНО ЧТО-ТО ИНТЕРЕСНОЕ, НО ЧТО МЫ ПОКА <span>НЕ ПРИДУМАЛИ</span>.'
const pageBlock1Text3 = 'Lorem ipsum dolor sit amet consectetur. Elit ultrices tellus nunc risus magna a lorem ac. Aenean neque cursus facilisis mattis amet. Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed.'
const pageBlock1Text4 = 'Leo senectus arcu varius nulla eget lacus at risus. Pellentesque risus etiam vestibulum egestas dictum pellentesque duis sodales sed. '
const pageBlock2Hedaer = 'Наши курсы'
const pageBlock3Header = 'полезные статьи'
//Данные картинок альбомов на странице
const pageTopBlockAlbums = [
  {
    src: metalica,//Ссылка на картинку
    startPosition: { x: "100%", y: '80%', rotate: 23.33 },//Начальныый translate и rotate
    endPosition: { x: "-88%", y: '100%', rotate: -3.33 },//Конечный translate и rotate
    startPositionMobile: { x: "10%", y: '10%', rotate: 23.33 },//Начальныый translate и rotate
    endPositionMobile: { x: "-95%", y: '0%', rotate: -1.33 },//Конечный translate и rotate
    rotate: 23.33,
    zIndex: 3
  },
  {
    src: bowie,
    startPosition: { x: "10%", y: "30%", rotate: 12.4, },
    endPosition: { x: "-98%", y: "50%", rotate: 22.4, },
    startPositionMobile: { x: "0%", y: "-50%", rotate: 12.4, },
    endPositionMobile: { x: "-98%", y: "-70%", rotate: 15.4, },
    rotate: 12.4,
    zIndex: 2
  },
  {
    src: hendrix,
    startPosition: { x: "130%", y: "20%", rotate: -20, },
    endPosition: { x: "-90%", y: "10%", rotate: 10 },
    startPositionMobile: { x: "0%", y: "50%", rotate: -10, },
    endPositionMobile: { x: "-90%", y: "80%", rotate: 10 },
    rotate: 12.4,
    zIndex: 1
  },
  {
    src: pinkFloyd,
    startPosition: { x: "210%", y: "90%", rotate: -6, },
    endPosition: { x: "430%", y: "100%", rotate: 10 },
    startPositionMobile: { x: "100%", y: "-40%", rotate: -6, },
    endPositionMobile: { x: "200%", y: "-70%", rotate: 10 },
    rotate: 12.4,
    zIndex: 1
  },
  {
    src: acdc,
    startPosition: { x: "240%", y: "10%", rotate: -12, },
    endPosition: { x: "430%", y: "10%", rotate: -5 },
    startPositionMobile: { x: "120%", y: "0%", rotate: -12, },
    endPositionMobile: { x: "210%", y: "-10%", rotate: -20 },
    rotate: 12.4,
    zIndex: 1
  },
  {
    src: anyAlbum,
    startPosition: { x: "320%", y: "60%", rotate: 10, },
    endPosition: { x: "430%", y: "60%", rotate: -5 },
    startPositionMobile: { x: "100%", y: "60%", rotate: 10, },
    endPositionMobile: { x: "200%", y: "80%", rotate: -5 },
    rotate: 12.4,
    zIndex: 1
  }

]


const LoadImageAsync = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src;
    img.onload = () => { resolve(img) };
  })
}


function MainPage() {

  const [isLoading, setIsLoading] = useState(true)

  gsap.registerPlugin(ScrollTrigger)

  const { scrollbar } = useContext(PageScrollbarContext)!

  useGSAP(() => {

    function setAnimations(){
      const tl = gsap.timeline(
        {
          scrollTrigger: {
            trigger: "#topBlock",
            start: 'top top',
            end: "bottom -50%",
            scrub: true,
            pin: true,
            scroller: scrollbar ? '#page' : undefined
          }
        })
      pageTopBlockAlbums.forEach(({ startPosition, endPosition, startPositionMobile, endPositionMobile }, index) => {
        tl.fromTo(`#a${index}`,isDesktop || isTablet? startPosition : startPositionMobile,isDesktop || isTablet? endPosition : endPositionMobile, 0)
      })
      const diskTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contentBlock",
          start: '-=50% top',
          end: "bottom -50%",
          scrub: true,
          scroller: scrollbar ? '#page' : undefined
        }
      })
      diskTl.fromTo('#disk', { rotate: 720 }, { rotate: 0 }, 0)
      console.log('animations added')
    }

    if (scrollbar) {
      ScrollTrigger.scrollerProxy('#page', {
        scrollTop(value) {
          if (arguments.length && value) {
            scrollbar.scrollTop = value;
          }
          return scrollbar.scrollTop
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })

      scrollbar.addListener(ScrollTrigger.update)
      console.log('desktop animations')
      setAnimations()
    }else if(isMobile){
      console.log('mobile animations')
      setAnimations()
    }
  }, [scrollbar])

  useEffect(() => {
    const loadAllImages = async () => {
      const images = pageTopBlockAlbums.map(({ src }) => LoadImageAsync(src))
      await Promise.all(images)

      setIsLoading(false)
    }

    loadAllImages();
  }, [])

  useEffect(()=>{
    return ()=>{
      console.log('animations destroyed?')
      gsap.killTweensOf("*");
    }
  },[])
  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageContainer>
        <PageTopBlock id='topBlock'>
          <PageTopBlockAlbums>
            {
              pageTopBlockAlbums.map((album, index) => <Album id={`a${index}`}
                key={index}
                src={album.src}
                rotate={album.rotate}
                zIndex={album.zIndex}
              />)
            }
          </PageTopBlockAlbums>
          {!isDesktop && !isTablet ? <PageMobileHeder lines={[academy, grecords]}/> : <PageHeader header={pageHeader} />}
          <PageSmallHeader>{pageSmallHeader.toUpperCase()}</PageSmallHeader>
        </PageTopBlock>
        <PageContent>
          <PageContentBlock id='contentBlock'>
            {isDesktop || isTablet && <Disk id='disk' />}
            <PageContentBlockHeader type='h1' threshold={0.5}>{pageBloc1Hedaer.toUpperCase()}</PageContentBlockHeader>
            <PageContentColumnsBlock type='div' threshold={0.5}>
              <PageContentTextBlock>
                <PageContentText weight={500}>{pageBlock1Text1.toUpperCase()}</PageContentText>
                <Spacer />
                <PageContentText weight={300}>{pageBlock1Text2}</PageContentText>
              </PageContentTextBlock>
            </PageContentColumnsBlock>
            <AnyInterestPhrase type='a' threshold={0.5}>
              {parse(!isDesktop && !isTablet ? anyInterstPhraseMobile.toUpperCase() : anyInterstPhrase.toUpperCase())}
            </AnyInterestPhrase>
            <PageContentColumnsBlock type='div' threshold={0.5}>
              <PageContentTextBlock>
                <PageContentText weight={300}>{pageBlock1Text3}</PageContentText>
                <Spacer />
                <PageContentText weight={300}>{pageBlock1Text4}</PageContentText>
                <ExternalLink style={{ marginBottom: '8.3svh',marginTop: '8.3svh' }} to='/'>ПОДРОБНЕЕ</ExternalLink>
              </PageContentTextBlock>
            </PageContentColumnsBlock>
          </PageContentBlock>
          <PageContentBlock>
            <PageContentBlockHeader type='h1' threshold={0.5}>
              {pageBlock2Hedaer.toUpperCase()}
            </PageContentBlockHeader>
            <CourseCarousel />
          </PageContentBlock>
          <PageContentBlock>
            <PageContentBlockHeader type='h1' threshold={0.5}>{pageBlock3Header.toUpperCase()}</PageContentBlockHeader>
            <ArticleCarousel />
          </PageContentBlock>
          <Footer/>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default MainPage