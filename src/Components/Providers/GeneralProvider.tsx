import React, { PropsWithChildren } from 'react'
import PageScrollbarContextProvider from './PageScrollbarContextProvider'
import CourseGifProvider from './CourseGifProvider'

function GeneralProvider({children}: PropsWithChildren) {
  return (
    <PageScrollbarContextProvider>
        <CourseGifProvider>
            {
                children
            }
        </CourseGifProvider>
    </PageScrollbarContextProvider>
  )
}

export default GeneralProvider