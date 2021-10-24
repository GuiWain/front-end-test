import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

import { Eye, EyeSlash } from '@styled-icons/bootstrap/'
import { CheckCircle } from '@styled-icons/boxicons-solid/'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean } & {
  alert?: 'alertSuccess' | 'alertWarning'
}

export const EyeIcon = styled(Eye).attrs({
  'data-testid': 'eye-icon'
})`
  cursor: pointer;
`
export const EyeSlashIcon = styled(EyeSlash).attrs({
  'data-testid': 'eye-slash-icon'
})`
  cursor: pointer;
`
export const CheckCircleIcon = styled(CheckCircle).attrs({
  'data-testid': 'check-circle-icon'
})`
  ${({ theme }) => css`
    color: ${theme.colors.successMedium};
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled, alert }) => css`
    ${!!alert && alert === 'alertSuccess'
      ? wrapperModifiers.alertSuccess(theme)
      : null}
    ${!!alert && alert === 'alertWarning'
      ? wrapperModifiers.alertWarning(theme)
      : null}
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};
    padding: 0 0.8rem;

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
    font: normal normal ${theme.font.regular} ${
    theme.font.sizes.xxsmall
  } / 2.8rem
      ${theme.font.family};

    padding: 0.8rem 0;
    padding-${iconPosition}: 0.4rem;
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 2.4
      #EAEAEA inset;
      filter: none
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

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.secondaryMedium};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2rem;
      height: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorMedium};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`

export const alertSuccess = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.successMedium};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`

export const AlertWarning = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warningDark};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.errorMedium};

      &:focus-within {
        border: 0.1rem solid ${theme.colors.errorMedium};
      }
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.errorMedium};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
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
  alertSuccess: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.successMedium};

      &:focus-within {
        border: 0.1rem solid ${theme.colors.successMedium};
      }
    }
  `,
  alertWarning: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.warningDark};

      &:focus-within {
        border: 0.1rem solid ${theme.colors.warningDark};
      }
    }
  `
}
