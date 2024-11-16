import { css } from "styled-components"
import { DesktopWidth, TabletWidth, MobileWidth, TabletBreakPoint, MobileBreakPoint } from "./Utils/Consts"

const gaps = [180, 90, 60, 45, 36, 24, 12]

interface Margin extends Record<string, number> {
    180: number,
    90: number,
    60: number,
    45: number,
    36: number,
    24: number,
    12: number,
    0: 0
}
const desktopGaps: Margin = {
    0: 0,
    180: 180,
    90: 90,
    60: 60,
    45: 45,
    36: 36,
    24: 24,
    12: 12
}

const mobileGaps: Margin = {
    180: 92,
    90: 70,
    60: 24,
    45: 16,
    36: 12,
    24: 8,
    12: 9,
    0: 0
}

type gapReturnValue = { desktop: Margin, mobile: Margin, tablet: Margin }
function getHeightMargins() {
    let desktop: Margin = {} as Margin
    let mobile: Margin = {} as Margin
    let tablet: Margin = {} as Margin

    Object.keys(desktopGaps).map((gap) => {

        desktop[gap] = parseFloat((desktopGaps[gap] / DesktopWidth * 100).toFixed(2))
        tablet[gap] = parseFloat((desktopGaps[gap] / TabletWidth * 100).toFixed(2))
        mobile[gap] = parseFloat((mobileGaps[gap] / MobileWidth * 100).toFixed(2))
    })

    return { desktop, mobile, tablet } as gapReturnValue
}

const { mobile, tablet, desktop } = getHeightMargins()

export const marginBottom = (margin: number) => css`
    margin-bottom: ${desktop[margin]}svw;

@media (max-width: ${TabletBreakPoint}) {
    margin-bottom: ${tablet[margin]}svw;
}

@media (max-width: ${MobileBreakPoint}) {
    margin-bottom: ${mobile[margin]}svw;
}
`

export const marginTop = (margin: number) => css`
    margin-top: ${desktop[margin]}svw;

@media (max-width: ${TabletBreakPoint}) {
    margin-top: ${tablet[margin]}svw;
}

@media (max-width: ${MobileBreakPoint}) {
    margin-top: ${mobile[margin]}svw;
}
`
