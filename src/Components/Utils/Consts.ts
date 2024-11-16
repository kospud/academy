import { isDesktop } from "react-device-detect"

export const MAIN_ROUTE="/"
export const COURSE_PAGE_ROUTE="/courses/:course"
export const BLOG_ROUTE="/blog"
export const BLOG_PAGE_ROUTE=BLOG_ROUTE+"/:page"

//Размеры на макетах
export const DesktopWidth=1920
export const MobileWidth=414
export const TabletWidth=960

//брейкпоинты
/*export const MobileBreakPoint='600px'
export const TabletBreakPoint='1024px'
export const SmallLaptopBreakPoint= '1366px';*/

export const MobileBreakPoint='600px'
export const TabletBreakPoint='1024px' //: '1400px'
export const SmallLaptopBreakPoint= '1366px';