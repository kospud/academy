
import React, { createContext, PropsWithChildren, useState } from 'react'
import Scrollbar from "smooth-scrollbar"

interface PageScrollBarContextValue{
    scrollbar?: Scrollbar,
    setScrollbar: React.Dispatch<React.SetStateAction<Scrollbar | undefined>>
}

type pageContext=PageScrollBarContextValue | undefined;

export const PageScrollbarContext=createContext<pageContext>(undefined)

function PageScrollbarContextProvider({children}: PropsWithChildren) {

    const [scrollbar, setScrollbar]=useState<Scrollbar | undefined>(undefined)
  return (
    <PageScrollbarContext.Provider value={{scrollbar, setScrollbar}}>
        {children}
    </PageScrollbarContext.Provider>
  )
}

export default PageScrollbarContextProvider