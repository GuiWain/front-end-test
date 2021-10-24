import styled, { css, DefaultTheme } from 'styled-components'
import { media } from 'styles/media'

import UseLink from 'next/link'
import UseLogo from 'components/Logo'
import UseNavBar from 'components/NavBar'
import UseButton from 'components/Button'

import { Menu } from '@styled-icons/ionicons-solid/'

export const Link = styled(UseLink)``

type HeaderProps = {
  menuOpen?: boolean
}

export const Header = styled.header<HeaderProps>`
  ${({ theme, menuOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 7.5rem;
    background-color: ${theme.colors.white};
    z-index: 999;

    transition: all ${theme.transition.default};

    ${menuOpen && headerModifiers.open(theme)}
    ${!menuOpen && headerModifiers.close(theme)}
  `}
`

export const Content = styled.div`
  width: 100%;
  height: 7.5rem;

  display: grid;
  grid-template-columns: 18% 60% 22%;
  align-items: center;

  ${media.greaterThan('desktopFullHD')`
    width: 70%;
    margin: auto;
    justify-content: center;
  `}
`

export const Logo = styled(UseLogo)`
  width: 7rem;
  margin-left: 2rem;

  ${media.greaterThan('desktopHD')`
    width: 9rem;
  `}
`

export const NavBar = styled(UseNavBar)`
  justify-self: flex-end;
`

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ButtonLeft = styled(UseButton)`
  ${({ theme }) => css`
    padding: 1rem 2rem;
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const ButtonRight = styled(UseButton).attrs({ bg: 'transparent' })`
  ${({ theme }) => css`
    padding: 1rem;
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const MenuIconMobile = styled(Menu).attrs({
  'data-testid': 'MenuIcon'
})`
  display: none;
`

const headerModifiers = {
  open: (theme: DefaultTheme) => css`
    ${media.lessThan('desktop')`
      height: 80vh;
      transition: all ${theme.transition.default};

      ${Logo} {
        width: 6rem;

        position: fixed;
        top: 1rem;
        left: 1rem;
      }

      ${MenuIconMobile} {
        display: block;

        position: fixed;
        top: 1.4rem;
        right: 1rem;

        width: 4rem;
        cursor: pointer;
      }

      ${DivButtons} {
        height: auto;
        opacity: 1;
        pointer-events: auto;

        position: absolute;
        top: 9rem;

        transition: all ${theme.transition.default};
      }

      ${ButtonLeft} {
        height: auto;
        opacity: 1;
        pointer-events: auto;

        transition: all ${theme.transition.default};
      }

      ${ButtonRight} {
        height: auto;
        opacity: 1;
        pointer-events: auto;

        transition: all ${theme.transition.default};
      }

      ${NavBar} {
        height: auto;
        opacity: 1;
        pointer-events: auto;

        position: absolute;
        top: 16rem;
        height: 40vh;

        transition: all ${theme.transition.default};

        ul, li {
          pointer-events: auto;
        }
      }
    `}
  `,
  close: (theme: DefaultTheme) => css`
    ${media.lessThan('desktop')`

      ${Logo} {
        width: 6rem;

        position: fixed;
        top: 1rem;
        left: 1rem;
      }

      ${MenuIconMobile} {
        position: fixed;
        top: 1.4rem;
        right: 1rem;
        display: block;

        width: 4rem;
        cursor: pointer;
      }

      ${DivButtons} {
        visibility: 0;
        overflow: hide;
        height: 0;
        opacity: 0;
        pointer-events: none;

        position: absolute;
        top: 9rem;

        transition: all ${theme.transition.fast};
      }

      ${ButtonLeft} {
        visibility: 0;
        overflow: hide;
        height: 0;
        opacity: 0;
        pointer-events: none;

        transition: all ${theme.transition.default};
      }

      ${ButtonRight} {
        visibility: 0;
        overflow: hide;
        height: 0;
        opacity: 0;
        pointer-events: none;

        transition: all ${theme.transition.default};
      }

      ${NavBar} {
        justify-self: center;

        visibility: 0;
        overflow: hide;
        height: 0;
        opacity: 0;
        pointer-events: none;

        position: absolute;
        top: 16rem;

        transition: all ${theme.transition.fast};

        ul, li {
          pointer-events: none;
        }
      }
    `}
  `
}
