import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon?: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'bg' | 'border' | 'iconPosition'>

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    iconPosition,
    bg,
    border,
    disabled
  }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    justify-content: center;
    flex-direction: ${iconPosition === 'left' ? 'row' : 'row-reverse'};

    text-decoration: none;
    cursor: pointer;

    border-radius: ${theme.border.smallRadius};
    transition: all ${theme.transition.default};

    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 2.6rem;

    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${disabled && wrapperModifiers.disabled(theme)};
    ${!!size && wrapperSizeModifiers[size](theme)};
    ${!!bg && wrapperBgModifiers[bg](theme)};
    ${!!border && wrapperBorderModifiers[border](theme)};
  `}
`

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 2rem;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      color: ${theme.colors.neutralDark};
      cursor: not-allowed;
      filter: saturate(30%);
      background: ${theme.colors.neutralMedium} 0% 0% no-repeat padding-box;
      box-shadow: 0rem 0.4rem 0.8rem #00000014;
      border: none;

      :hover {
        background: ${theme.colors.neutralMedium} 0% 0% no-repeat padding-box;
        border: none;
        color: ${theme.colors.neutralDark};
      }
    }
  `
}

const wrapperSizeModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 2.8rem;
    padding: 0.6rem 4.4rem;

    font-size: ${theme.font.sizes.xxxsmall};
    letter-spacing: 0rem;
  `,
  medium: (theme: DefaultTheme) => css`
    height: 3.6rem;
    padding: 0.9rem 4.4rem;

    font-size: ${theme.font.sizes.xxsmall};
    letter-spacing: 0rem;
  `,
  large: (theme: DefaultTheme) => css`
    height: 4.4rem;
    padding: 1.1rem 5.6rem;

    font-size: ${theme.font.sizes.xsmall};
    letter-spacing: 0rem;
  `,
  huge: (theme: DefaultTheme) => css`
    height: 5.2rem;
    padding: 1.4rem 5.6rem;

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.extraBold};
    line-height: ${theme.font.sizes.xlarge};
    letter-spacing: 0rem;
  `
}

const wrapperBgModifiers = {
  normal: (theme: DefaultTheme) => css`
    background: ${theme.colors.primaryMedium} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: none;

    &:hover {
      background: ${theme.colors.primaryLight} 0% 0% no-repeat padding-box;
      transition: background ${theme.transition.default};
    }
  `,
  transparent: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondaryDarkest};
    background: transparent 0% 0% no-repeat padding-box;
    border: 0.2rem solid ${theme.colors.primaryMedium};
    box-shadow: 0rem 0.4rem 0.8rem #00000014;

    &:hover {
      color: ${theme.colors.white};
      border-color: ${theme.colors.primaryLight};
      background: ${theme.colors.primaryLight} 0% 0% no-repeat padding-box;
      transition: background ${theme.transition.default};
    }
  `,
  gray: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondaryDarkest};
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};

    &:hover {
      background: ${theme.colors.neutralLight} 0% 0% no-repeat padding-box;
      box-shadow: 0rem 0.4rem 0.8rem #00000014;
      transition: all ${theme.transition.default};
    }
  `,
  info: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.infoDark} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: none;

    &:hover {
      background: ${theme.colors.infoMedium} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.successMedium} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: none;

    &:hover {
      background: ${theme.colors.successLight} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.errorMedium} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: none;

    &:hover {
      background: ${theme.colors.errorLight} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `,
  warning: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.warningDark} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: none;

    &:hover {
      color: ${theme.colors.secondaryDarkest};
      background: ${theme.colors.warningMedium} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `
}

const wrapperBorderModifiers = {
  info: (theme: DefaultTheme) => css`
    color: ${theme.colors.infoDark};
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: 0.2rem solid ${theme.colors.infoDark};

    &:hover {
      color: ${theme.colors.white};
      border-color: ${theme.colors.infoMedium};
      background: ${theme.colors.infoMedium} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.successMedium};
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: 0.2rem solid ${theme.colors.successMedium};

    &:hover {
      color: ${theme.colors.white};
      border-color: ${theme.colors.successLight};
      background: ${theme.colors.successLight} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.errorMedium};
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: 0.2rem solid ${theme.colors.errorMedium};

    &:hover {
      color: ${theme.colors.white};
      border-color: ${theme.colors.errorLight};
      background: ${theme.colors.errorLight} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `,
  warning: (theme: DefaultTheme) => css`
    color: ${theme.colors.warningDark};
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    border: 0.2rem solid ${theme.colors.warningDark};

    &:hover {
      color: ${theme.colors.secondaryDarkest};
      border-color: ${theme.colors.warningMedium};
      background: ${theme.colors.warningMedium} 0% 0% no-repeat padding-box;
      transition: all ${theme.transition.default};
    }
  `
}
