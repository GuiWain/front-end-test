import styled, { css, DefaultTheme } from 'styled-components'

import { CheckBoxProps } from '.'

export type WrapperProps = {
  error?: boolean
} & Pick<CheckBoxProps, 'disabled'>

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.errorMedium};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label}, ${CheckBox} {
      cursor: not-allowed;
      filter: saturate(30%);
      color: ${theme.colors.neutralDark};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const InputCheckBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  width: auto;
`

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
  'data-testid': 'CheckBox'
})`
  justify-self: flex-end;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryDark};
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.4rem ${theme.font.family};
    letter-spacing: 0rem;

    cursor: pointer;
    margin: 0;

    justify-self: flex-start;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorLight};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`
