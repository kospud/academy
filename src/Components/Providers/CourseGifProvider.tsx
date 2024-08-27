import React, { createContext, PropsWithChildren, useState } from 'react'


interface GifLayerContextValue{
  gif?: string
  setGif: React.Dispatch<React.SetStateAction<string | undefined>>
}

type GifLayerContext=GifLayerContextValue | undefined
const GifLayerContext=createContext<GifLayerContext>(undefined)
function CourseGifProvider({children}: PropsWithChildren) {

  const [gif, setGif]=useState<string | undefined>(undefined)
  return (
    <GifLayerContext.Provider value={{gif, setGif}}>
      {children}
    </GifLayerContext.Provider>
  )
}

export default CourseGifProvider