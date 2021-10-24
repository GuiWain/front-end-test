import { generateMedia } from 'styled-media-query'

const BREAKPOINT_MOBILE_SMALL = 360
const BREAKPOINT_MOBILE_MEDIUM = 480
const BREAKPOINT_TABLET = 768
const BREAKPOINT_DESKTOP = 1024
const BREAKPOINT_DESKTOP_HD = 1366
const BREAKPOINT_DESKTOP_FULL_HD = 1920

export const media = generateMedia({
  mobileSmall: `${BREAKPOINT_MOBILE_SMALL}px`,
  mobileMedium: `${BREAKPOINT_MOBILE_MEDIUM}px`,
  tablet: `${BREAKPOINT_TABLET}px`,
  desktop: `${BREAKPOINT_DESKTOP}px`,
  desktopHD: `${BREAKPOINT_DESKTOP_HD}px`,
  desktopFullHD: `${BREAKPOINT_DESKTOP_FULL_HD}px`
})
