import React, { PropsWithChildren, useContext, useEffect, useRef } from 'react'
import { isDesktop } from 'react-device-detect'
import Scrollbar from 'smooth-scrollbar'
import { PageScrollbarContext } from './Providers/PageScrollbarContextProvider'

function SmoothScrollContainer({children}: PropsWithChildren) {
    const ref = useRef(null)
    const { setScrollbar } = useContext(PageScrollbarContext)!

    useEffect(() => {
        if (ref.current && isDesktop) {
            const scrollbar = Scrollbar.init(ref.current, {
                damping: 0.08,
                alwaysShowTracks: false,
                delegateTo: document,
                renderByPixels: true
            })

            setScrollbar(scrollbar)
            console.log('scrollbarAded')
            return () => {
                //setScrollbar(undefined)
                scrollbar.destroy()
                console.log('scrollbarDestroyed')
            }
        }
    }, [])
  return (
    <div style={{width: '100%', height: isDesktop? '100svh' : undefined}} ref={ref}>
        {children}
        </div>
  )
}

export default SmoothScrollContainer