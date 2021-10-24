import styled, { css, DefaultTheme } from 'styled-components'

import { motion, AnimatePresence } from 'framer-motion'
import UseImage from 'next/image'

export type WrapperProps = {
  error?: boolean
  disabled?: boolean
}

export const Animate = styled(AnimatePresence)``
export const Motion = styled(motion.div)``

export const DownloadIcon = styled(UseImage).attrs({
  src: '/img/download.svg',
  width: '16px',
  height: '16px',
  alt: 'Download Icon'
})`
  cursor: pointer;
`
export const CloseIcon = styled(UseImage).attrs({
  'data-testid': 'CloseIcon',
  src: '/img/close.svg',
  width: '12px',
  height: '12px',
  alt: 'Close Icon'
})`
  cursor: pointer;
  margin-left: auto;
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputFile}, ${DivInput}, ${ButtonLabel} {
      border-color: ${theme.colors.errorMedium};

      &:focus-within {
        border: 0.1rem solid ${theme.colors.errorMedium};
      }
    }

    ${LabelText} {
      color: ${theme.colors.errorMedium};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${InputFile}, ${DivInput}, ${ButtonLabel}, ${LabelText}, ${FileName} {
      cursor: not-allowed;
      color: ${theme.colors.secondaryMedium};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    background: transparent;

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const DivInput = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.6rem;
  `}
`

export const ButtonLabel = styled.label`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutralMedium};
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;

    font: normal normal ${theme.font.semiBold} ${theme.font.sizes.xxsmall} /
      2.8rem ${theme.font.family};
    color: ${theme.colors.secondaryDark};
    letter-spacing: 0rem;
    text-align: left;
    cursor: pointer;
  `}
`

export const FileName = styled.span`
  ${({ theme }) => css`
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.8rem ${theme.font.family};
    color: ${theme.colors.neutralDark};
    letter-spacing: 0rem;
    text-align: left;
    cursor: pointer;
  `}
`

export const InputFile = styled.input.attrs({
  type: 'file',
  accept:
    'application/pdf, application/msword, application/vnd.ms-excel, image/*'
})`
  display: none;
`

export const FileList = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 0.7rem;
    margin: 0.5rem 0;
    padding: 1rem 2rem;

    text-align: left;
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} / 2rem
      ${theme.font.family};
    letter-spacing: -0.035rem;
    color: ${theme.colors.infoDark};

    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};
  `}
`

export const LabelText = styled.p`
  ${({ theme }) => css`
    font: normal normal ${theme.font.semiBold} ${theme.font.sizes.xsmall} / 4rem
      ${theme.font.family};

    letter-spacing: -0.006rem;
    text-align: left;
    color: ${theme.colors.secondaryDark};

    margin: 0;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorMedium};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`
