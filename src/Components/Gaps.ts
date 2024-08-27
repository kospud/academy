import { css } from "styled-components"
import { MobileBreakPoint, TabletBreakPoint } from "./Utils/Consts"

export const MarginBootom180=css`
    margin-bottom: 16.6svh;

    @media(max-width: ${TabletBreakPoint}){
        margin-bottom: 16.6svh;
    }
    @media(max-width: ${MobileBreakPoint}){
        margin-bottom: 12svh;
    }
`
export const MarginBootom90=css`
    margin-bottom: 8.3svh;

    @media(max-width: ${TabletBreakPoint}){
        margin-bottom: 7.8svh;
    }
    @media(max-width: ${MobileBreakPoint}){
        margin-bottom: 8.1svh;
    }
`

export const MarginTop90=css`
margin-top: 8.3svh;

@media(max-width: ${TabletBreakPoint}){
    margin-top: 11.7svh;
}

@media(max-width: ${MobileBreakPoint}){
    margin-top: 7.7svh;
}
`
export const MarginBottom60=css`
margin-bottom: 5.5svh;
`
export const MarginBottom45=css`
    margin-bottom: 4.1svh;

    @media(max-width: ${TabletBreakPoint}){
        margin-bottom: 5svh;
    }

    @media(max-width: ${MobileBreakPoint}){
        margin-bottom: 3.2svh;
    }
`
export const MarginBottom24=css`
margin-bottom: 2svh;
`