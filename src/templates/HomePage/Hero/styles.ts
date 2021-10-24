import styled, { css } from 'styled-components'
import { media } from 'styles/media'

import UseImage from 'next/image'

export const Image = styled(UseImage).attrs({
  src: '/img/universe.jpg',
  width: '1920px',
  height: '1080px',
  alt: 'Universe image'
})`
  object-fit: contain;
  max-width: 100%;
  height: auto;

  margin: auto;
  z-index: -1;

  ${media.greaterThan('desktopFullHD')`
    border-radius: 2rem;
  `}
`

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
`

export const DivImage = styled.div`
  margin: auto;
  max-width: 192rem;

  position: relative;

  ${media.lessThan('desktop')`
    margin-top: 1rem;
  `}
`

export const Content = styled.div`
  top: 35%;
  width: 100%;
  position: absolute;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 6.2rem;
    letter-spacing: 0;

    ${media.greaterThan('desktopFullHD')`
      border-radius: 2rem;
    `}
  `}
`

export const SubTitle = styled.p`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 2.4rem;
    margin-bottom: 3rem;
  `}
`
