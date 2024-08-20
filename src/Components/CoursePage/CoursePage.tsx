import React, { useContext, useEffect } from 'react'
import { PageContainer, PageContent, PageContentBlock, PageContentBlockHeader, PageHeader, PageMobileHeder, PageSmallHeader, PageTopBlock } from '../PageBlocks'
import { isDesktop, isTablet } from 'react-device-detect'
import {ReactComponent as pageHeader} from "../../img/Courses/0/DesktopHeader.svg"
import Footer from '../Footer'
import {ReactComponent as mobileHeader1} from "../../img/Courses/0/MobileHeader1.svg"
import {ReactComponent as mobileHeader2} from "../../img/Courses/0/MobileHeader2.svg"
import {ReactComponent as mobileHeader3} from "../../img/Courses/0/MobileHeader3.svg"
import { PageScrollbarContext } from '../Providers/PageScrollbarContextProvider'


const Course={
    TopBlock:{
        desktopTitle: pageHeader,
        mobileTitle: [mobileHeader1, mobileHeader2, mobileHeader3],
        smallHeader: 'Курс о том как написать песню'
    },
    Description:{
        Header: 'о чем курс',
        UpperTextBlocks: [{
            Desktop: '',
            Mobile: '',
            weight: 500
        }],
        InterestPhrase: {
            Desktop: '',
            Mobile: ''
        },
        UnderTextBlocks: [],
    }

}

function CoursePage() {

    const {scrollbar}=useContext(PageScrollbarContext)!

    useEffect(()=>{
        if(scrollbar){
            scrollbar.scrollTop=0;
        }else{
            window.scrollTo(0,0)
        }
    },[])
  return (
    <PageContainer>
        <PageTopBlock id='topBlock'>
          {!isDesktop && !isTablet ? <PageMobileHeder lines={Course.TopBlock.mobileTitle}/> : <PageHeader header={Course.TopBlock.desktopTitle} />}
          <PageSmallHeader>{Course.TopBlock.smallHeader.toUpperCase()}</PageSmallHeader>
        </PageTopBlock>
        <PageContent>
        <PageContentBlock>
            <PageContentBlockHeader type='h1' threshold={0.5}>{}</PageContentBlockHeader>
        </PageContentBlock>
            <Footer/>
        </PageContent>
    </PageContainer>
    
  )
}

export default CoursePage