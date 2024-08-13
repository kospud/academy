import React, { useEffect, useLayoutEffect, useState } from 'react'
import { PageContainer, PageContent, PageHeader, PageSmallHeader, PageTopBlock } from '../PageBlocks'
import Album from './Album'
import { ReactComponent as pageHeader } from "../../img/main/АКАДЕМИЯ GRECORDS.svg"
import Preloader from '../Preloader'
import metalica from "../../img/main/Metalica.png"
import bowie from "../../img/main/Bowie.png"
import hendrix from "../../img/main/Hendrix.png"
import acdc from "../../img/main/ACDC.png"
import anyAlbum from "../../img/main/AnyAlbum.png"
import pinkFloyd from "../../img/main/PinkFloyd.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const pageSmallHeader='курсы для начинающих в шоу-бизнесе'
//Данные картинок альбомов на странице
const PageTopBlockAlbums=[
  {
    src: metalica,//Ссылка на картинку
    startPosition: {x: "100%", y: '80%', rotate: 23.33},//Начальныый translate и rotate
    endPosition: {x: "-88%", y: '100%', rotate: -3.33},//Конечный translate и rotate
    rotate: 23.33,
    zIndex: 3
  },
  {
    src: bowie,
    startPosition: {x: "10%", y: "30%", rotate: 12.4,},
    endPosition: {x: "-98%", y: "50%", rotate: 22.4,},
    rotate: 12.4,
    zIndex: 2
  },
  {
    src: hendrix,
    startPosition: {x: "130%", y: "20%", rotate: -20,},
    endPosition: {x: "-90%", y: "10%", rotate: 10},
    rotate: 12.4,
    zIndex: 1
  },
  {
    src: pinkFloyd,
    startPosition: {x: "210%", y: "90%", rotate: -6,},
    endPosition: {x: "420%", y: "100%", rotate: 10},
    rotate: 12.4,
    zIndex: 1
  },
  {
    src: acdc,
    startPosition: {x: "240%", y: "10%", rotate: -12,},
    endPosition: {x: "425%", y: "10%", rotate: -20},
    rotate: 12.4,
    zIndex: 1
  },
  {
    src: anyAlbum,
    startPosition: {x: "320%", y: "80%", rotate: 10,},
    endPosition: {x: "425%", y: "10%", rotate: -5},
    rotate: 12.4,
    zIndex: 1
  }

]
function MainPage() {
  const [unloaded, setUnloaded] = useState()
  const [isLoading, setIsLoading] = useState(true)


  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(() => {
    const tl = gsap.timeline(
    {
      scrollTrigger: {
        trigger: "#topBlock",
        start: 'top top',
        end: "bottom -50%",
        scrub: true,
        pin: true,
      }
    })

    
    PageTopBlockAlbums.forEach(({startPosition, endPosition}, index)=>{
      tl.fromTo(`#a${index}`, startPosition, endPosition, 0)
    })
  
    tl.to({}, {duration: 0.1})
  }, [])
  /**useEffect(()=>{
    if(unloaded===0){
      setIsLoading(false)
    }

  }, [unloaded])*/

  return (
    <PageContainer>
      <Preloader isLoading={false} />
      <PageTopBlock id='topBlock'>
        {
          PageTopBlockAlbums.map((album, index) => <Album id={`a${index}`} 
          key={index} 
          src={album.src} 
          rotate={album.rotate} 
          zIndex={album.zIndex}/>)
        }
        <PageHeader header={pageHeader}/>
        <PageSmallHeader>{pageSmallHeader.toUpperCase()}</PageSmallHeader>
      </PageTopBlock>
      <PageContent>

      </PageContent>
    </PageContainer>
  )
}

export default MainPage