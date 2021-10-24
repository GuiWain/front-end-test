import styled, { css } from 'styled-components'

export type ModifiersProps = {
  modifier: 'light' | 'medium' | 'semiBold' | 'bold'
}

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryLightest};
    width: 100%;
    padding: 3rem 0;
    margin: 2rem auto;
  `}
`

export const H4 = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.primaryMedium};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.semiBold};
    line-height: 4.9rem;
    letter-spacing: 0.18rem;
    text-align: center;
    margin: 2rem;
  `}
`

export const DivSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 3rem;
  margin: 0 auto;
  width: 80%;
`

export const DivStep = styled.div`
  max-width: 20rem;
  height: auto;
  padding: 1.5rem;
`

export const Number = styled.p<ModifiersProps>`
  ${({ theme, modifier }) => css`
    color: ${theme.colors.secondaryMedium};
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.semiBold};
    text-align: center;
    position: relative;

    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 50%;
    height: auto;
    z-index: 1;

    &:before {
      content: '';
      width: 8rem;
      height: 1.7rem;
      border-radius: 1rem;
      background-color: ${theme.colors.primaryMedium};
      position: absolute;
      top: 65%;
      opacity: 0.3;
      z-index: -1;
    }

    ${!!modifier && wrapperModifiers[modifier]}
  `}
`

export const Step = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryDarkest};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    margin: 0.5rem 0;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryLight};
    font-size: ${theme.font.sizes.xxxsmall};
    line-height: 2rem;
    text-align: center;
  `}
`

const wrapperModifiers = {
  light: () => css`
    &:before {
      opacity: 0.25;
    }
  `,
  medium: () => css`
    &:before {
      opacity: 0.5;
    }
  `,
  semiBold: () => css`
    &:before {
      opacity: 0.75;
    }
  `,
  bold: () => css`
    &:before {
      opacity: 0.97;
    }
  `
}
