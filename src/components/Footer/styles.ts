import styled, { css } from 'styled-components'
import { media } from 'styles/media'
import UseImage from 'next/image'

export const ImageISO = styled(UseImage).attrs({
  src: '/img/ISO_9001-2015.svg',
  alt: 'ISO 9001-2015',
  width: '35px',
  height: '35px'
})``

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryMedium};
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 1.5rem 0;
  `}
`

export const Description = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto 1.5rem;

  ${media.lessThan('tablet')`
    flex-direction: column;
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    margin: 0;

    ${media.greaterThan('desktopFullHD')`
      font-size: ${theme.font.sizes.xlarge};
    `}

    ${media.lessThan('tablet')`
      width: 90%;
    `}
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    width: 70%;
    display: block;
    margin: 0.5rem auto;

    text-align: center;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.white};

    ${media.greaterThan('desktopFullHD')`
      font-size: ${theme.font.sizes.xxsmall};
    `}

    ${media.lessThan('tablet')`
      margin: 1rem auto;
      width: 80%;
    `}
  `}
`
