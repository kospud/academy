import { isDesktop } from "react-device-detect"

export const MAIN_ROUTE="/"
export const COURSE_PAGE_ROUTE="/courses/:course"


export const MobileBreakPoint='600px'
export const TabletBreakPoint=isDesktop? '1000px' : '1400px'
export const SmallLaptopBreakPoint= '1366px';