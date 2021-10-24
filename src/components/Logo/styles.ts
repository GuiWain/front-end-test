import styled, { css } from 'styled-components'
import UseLink from 'next/link'
import UseImage from 'next/image'

import { LogoProps } from '.'

export const Link = styled(UseLink)``

export const Image = styled(UseImage)`
  max-width: 100%;
  object-fit: contain;
`

const wrapperModifiers = {
  small: () => css`
    width: 6rem;
  `,
  normal: () => css`
    width: 8rem;
  `,
  large: () => css`
    width: 10rem;
  `,
  fullWidth: () => css`
    width: 12rem;
  `
}

export const Wrapper = styled.div.attrs({
  'data-testid': 'Wrapper'
})<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`

export const Content = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
