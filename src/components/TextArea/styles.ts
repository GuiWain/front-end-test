import styled, { css, DefaultTheme } from 'styled-components'
import { TextAreaProps } from '.'

export type WrapperProps = {
  error?: boolean
} & Pick<TextAreaProps, 'resize'>

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${TextArea} {
      border-color: ${theme.colors.errorMedium};
    }

    ${Label} {
      color: ${theme.colors.errorMedium};
    }
  `,
  vertical: () => css`
    ${TextArea} {
      resize: vertical;
    }
  `,
  horizontal: () => css`
    ${TextArea} {
      resize: horizontal;
    }
  `,
  both: () => css`
    ${TextArea} {
      resize: both;
    }
  `,
  none: () => css`
    ${TextArea} {
      resize: none;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, resize }) => css`
    width: 100%;
    margin: 0;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;

    ${!!error && wrapperModifiers.error(theme)}
    ${!!resize && wrapperModifiers[resize]()}
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

export const TextArea = styled.textarea.attrs({
  'data-testid': 'TextArea'
})`
  ${({ theme }) => css`
    margin: 0;
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.8rem ${theme.font.family};
    color: ${theme.colors.secondaryDark};

    padding: 1rem;
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};

    align-self: flex-start;
    width: 100%;

    :placeholder {
      font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
        2.8rem ${theme.font.family};
      letter-spacing: 0rem;
      color: ${theme.colors.secondaryLight};
      padding: 2rem;
    }

    :focus {
      outline: none;
      border: 0.2rem solid ${theme.colors.primaryMedium};
      transition: border 0.2s linear;
    }

    &:focus-within {
      box-shadow: 0rem 0.4rem 0.6rem #00000014;
      border: 0.1rem solid ${theme.colors.infoDark};
    }
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.secondaryMedium};
    align-self: center;
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.errorMedium};
    font-size: ${theme.font.sizes.xxxsmall};
    align-self: flex-start;
  `}
`
