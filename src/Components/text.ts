import { css } from "styled-components";
import { DesktopWidth, TabletBreakPoint, TabletWidth, MobileBreakPoint, MobileWidth } from "./Utils/Consts";

export const responsiveText = (desktop: number, tablet: number, mobile: number) => css`
  font-size: ${(desktop / DesktopWidth * 100).toFixed(2)}svw;

@media (max-width: ${TabletBreakPoint}) {
  font-size: ${(tablet / TabletWidth * 100).toFixed(2)}svw;
}

@media (max-width: ${MobileBreakPoint}) {
  font-size: ${(mobile / MobileWidth * 100).toFixed(2)}svw;
}
`