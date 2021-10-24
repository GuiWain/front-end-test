import styled, { css } from 'styled-components'
import { media } from 'styles/media'

import UseLink from 'next/link'

export const Link = styled(UseLink)``

export const Nav = styled.nav`
  width: 100%;

  ${media.lessThan('desktop')`
      height: 100%;
  `}
`

export const List = styled.ul`
  ${() => css`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;

    ${media.lessThan('desktop')`
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
    `}
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.secondaryMedium};
    text-align: center;
    margin: 0 1rem;
    cursor: pointer;
    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.secondaryDark};
      transition: color ${theme.transition.default};
    }
  `}
`
