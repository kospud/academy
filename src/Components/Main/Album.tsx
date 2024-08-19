import { HandySvg } from 'handy-svg'
import React, { PropsWithChildren, SetStateAction } from 'react'
import { styled } from 'styled-components'


const AlbumContainer=styled.div<{zIndex: number, rotate: number}>`
width: 22.7svw;
aspect-ratio: 1/1;
position: absolute;
z-index: ${({zIndex})=>zIndex};
//transform: rotate(${({rotate})=>rotate}deg);
filter: drop-shadow(0px 4px 10px #00000090);


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width:600px){
  width: 48svw;
}
`
interface AlbumProps{
    src: string,
    id: string
    rotate: number,
    zIndex: number,
}
function Album({src, id, rotate, zIndex}: AlbumProps) {
  return (
    <AlbumContainer id={id} rotate={rotate} zIndex={zIndex}>
       <img src={src} alt='album'/>
    </AlbumContainer>
  )
}

export default Album