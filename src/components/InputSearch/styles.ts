import styled, { css, DefaultTheme } from 'styled-components'

import { InputSearchProps } from './'

import { MagnifyingGlass } from '@styled-icons/entypo/'

type IconPositionProps = Pick<InputSearchProps, 'iconPosition'>
type WrapperProps = Pick<InputSearchProps, 'disabled' | 'widthInput'> & {
  error?: boolean
}

export type OptionProps = {
  showHidde?: boolean
}

export const MagnifyingGlassIcon = styled(MagnifyingGlass)``

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.errorMedium};

      &:focus-within {
        border: 0.1rem solid ${theme.colors.errorMedium};
      }
    }

    ${Label} {
      color: ${theme.colors.errorMedium};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${DivOptions},
    ${Options},
    ${Span},
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.secondaryMedium};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  widthInput: (width: number) => css`
    width: ${width + 'rem'};
  `
}

export const Wrapper = styled.div.attrs({
  'data-testid': 'Wrapper'
})<WrapperProps>`
  ${({ theme, error, disabled, widthInput }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
    ${widthInput && wrapperModifiers.widthInput(widthInput)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};
    padding: 0;

    height: 3.6rem;

    &:focus-within {
      box-shadow: 0rem 0.4rem 0.6rem #00000014;
      border: 0.1rem solid ${theme.colors.infoDark};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.secondaryDark};
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.8rem ${theme.font.family};

    padding: 0.8rem 0.8rem;

    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 2.4 #eaeaea inset;
      filter: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font: normal normal ${theme.font.semiBold} ${theme.font.sizes.xsmall} / 4rem
      ${theme.font.family};

    letter-spacing: -0.006rem;
    text-align: left;
    color: ${theme.colors.secondaryDark};
    cursor: pointer;
  `}
`

const iconModifiers = {
  iconLeft: (theme: DefaultTheme) => css`
    order: 0;
    background: ${theme.colors.neutralMedium} 0% 0% no-repeat padding-box;
    color: ${theme.colors.secondaryDarkest};
  `,
  iconRight: (theme: DefaultTheme) => css`
    order: 1;

    background: ${theme.colors.infoDark} 0% 0% no-repeat padding-box;
    color: ${theme.colors.white};
  `
}

export const Icon = styled.div.attrs({
  'data-testid': 'DivIcon'
})<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 4.4rem;

    cursor: pointer;

    & > svg {
      width: 1.8rem;
      height: 100%;
    }

    ${iconPosition === 'left'
      ? iconModifiers.iconLeft(theme)
      : iconModifiers.iconRight(theme)}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorMedium};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`

export const DivOptions = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 0 1.1rem;

    max-height: 20rem;
    overflow-y: scroll;

    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: 0.1rem solid ${theme.colors.secondaryLight};
  `}
`

const optionsModifier = {
  show: () => css`
    display: block;
  `,
  hidde: () => css`
    display: none;
  `
}

export const Options = styled.div<OptionProps>`
  ${({ showHidde }) => css`
    background-color: transparent;
    cursor: pointer;

    ${!showHidde && optionsModifier.show()}
    ${showHidde && optionsModifier.hidde()}
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.secondaryDark};
    letter-spacing: 0rem;
    margin: 0.7rem 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    svg {
      width: 2rem;
      height: 100%;
      color: ${theme.colors.infoDark};
    }
  `}
`
