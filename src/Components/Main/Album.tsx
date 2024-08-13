import { HandySvg } from 'handy-svg'
import React, { PropsWithChildren } from 'react'
import { styled } from 'styled-components'


const AlbumContainer=styled.div<{zIndex: number, rotate: number}>`
width: 22.7svw;
aspect-ratio: 1/1;
position: absolute;
z-index: ${({zIndex})=>zIndex};
//transform: rotate(${({rotate})=>rotate}deg);


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
interface AlbumProps{
    src: string,
    id: string
    rotate: number,
    zIndex: number
}
function Album({src, id, rotate, zIndex}: AlbumProps) {
  return (
    <AlbumContainer id={id} rotate={rotate} zIndex={zIndex}>
       <img src={src} alt='album'/>
    </AlbumContainer>
  )
}

export default Album