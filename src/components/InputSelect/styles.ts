import styled, { css, DefaultTheme } from 'styled-components'

import { InputSelectProps } from './'

import { Search } from '@styled-icons/boxicons-regular/'

export type OptionsContainerProps = {
  active: boolean
}

export type OptionProps = {
  showHidde?: boolean
}

export type SelectedProps = {
  active: boolean
}

export type DivSearchProps = {
  active?: boolean
}

export type ContainerProps = {
  error?: boolean
  disabled?: boolean
  widthOptions?: number
  widthSelected?: number
} & Pick<InputSelectProps, 'searchBox'>

export const SearchIcon = styled(Search)`
  width: 2rem;
`

const containerModifiers = {
  error: (theme: DefaultTheme) => css`
    ${SelectBox} {
      border-color: ${theme.colors.errorMedium};
    }

    ${Label} {
      color: ${theme.colors.errorMedium};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${SelectBox},
    ${OptionsContainer},
    ${Selected},
    ${Option},
    ${LabelOption} {
      cursor: not-allowed;
      color: ${theme.colors.secondaryMedium};
    }
  `,
  widthSelected: (widthSelected: number) => css`
    width: ${widthSelected + 'rem'};

    ${SelectBox}, ${Selected}, ${OptionsContainer} {
      width: ${widthSelected + 'rem'};
    }

    ${InputText} {
      width: ${widthSelected - 5 + 'rem'};
    }
  `,
  widthOptions: (widthOptions: number) => css`
    ${OptionsContainer} {
      width: ${widthOptions + 'rem'};
    }

    ${InputText} {
      width: ${widthOptions - 5 + 'rem'};
    }
  `,
  searchBox: () => css`
    ${OptionsContainer} {
      padding-top: 11rem;
      padding-bottom: 1.5rem;
    }

    ${Option} {
      :before {
        margin: 0.4rem auto;
        border-bottom: none;
      }
    }
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, error, disabled, widthOptions, widthSelected, searchBox }) => css`
    background: transparent;
    z-index: 999;
    width: 27rem;

    ${error && containerModifiers.error(theme)}
    ${disabled && containerModifiers.disabled(theme)}
    ${!!widthOptions && containerModifiers.widthOptions(widthOptions)}
    ${!!widthSelected && containerModifiers.widthSelected(widthSelected)}
    ${searchBox && containerModifiers.searchBox()}
  `}
`

export const SelectBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 27rem;

    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};
    box-sizing: content-box;

    ${Option}:first-child {
      :before {
        border-bottom: none;
      }
    }
  `}
`

const optionsContainerModifier = {
  active: (theme: DefaultTheme) => css`
    box-shadow: 0rem 0.4rem 0.8rem #00000014;

    max-height: 25rem;
    opacity: 1;
    overflow-y: scroll;
  `
}

export const OptionsContainer = styled.div.attrs({
  'data-testid': 'OptionsContainer'
})<OptionsContainerProps>`
  ${({ theme, active }) => css`
    position: absolute;
    width: 27rem;
    max-height: 0;
    padding-top: 4rem;
    padding-bottom: 1rem;

    border-radius: ${theme.border.smallRadius};
    border: 0.1rem solid ${theme.colors.secondaryLight};
    transition: all ${theme.transition.default};
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;

    opacity: 0;
    overflow: hidden;

    order: 1;

    ${active && optionsContainerModifier.active(theme)}
  `}
`

const selectedModifier = {
  active: (theme: DefaultTheme) => css`
    box-shadow: 0rem 0.4rem 0.8rem #00000014;
    &:after {
      transform: rotateX(180deg);
      top: 25%;
    }
  `
}

export const Selected = styled.div.attrs({
  'data-testid': 'Selected'
})<SelectedProps>`
  ${({ theme, active }) => css`
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;

    width: 27rem;
    margin: 0;
    height: 3.6rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;

    position: relative;
    display: flex;
    justify-items: flex-start;
    align-items: center;

    order: 0;

    &:after {
      content: '';
      background: url('/img/arrow-left-input-select.svg');
      background-size: contain;
      background-repeat: no-repeat;

      position: absolute;
      height: 1.2rem;
      width: 1.2rem;
      right: 1rem;
      top: 40%;

      transition: all ${theme.transition.default};
    }
    ${active && selectedModifier.active(theme)}
  `}
`

const optionModifier = {
  show: () => css`
    display: block;
  `,
  hidde: () => css`
    display: none;
  `
}

export const Option = styled.div<OptionProps>`
  ${({ theme, showHidde }) => css`
    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    margin: 0;
    padding: 0 1.5rem;

    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.4rem ${theme.font.family};
    letter-spacing: -0.006rem;
    text-align: left;
    color: ${theme.colors.secondaryMedium};

    cursor: pointer;

    :before {
      content: '';
      display: block;
      margin: 0.9rem auto;
      width: 100%;
      border-bottom: 0.1rem solid ${theme.colors.secondaryLight};
    }

    ${!showHidde && optionModifier.show()}
    ${showHidde && optionModifier.hidde()}
  `}
`

export const Input = styled.input.attrs({
  type: 'radio'
})`
  display: none;
`

export const Label = styled.p`
  ${({ theme }) => css`
    font: normal normal ${theme.font.semiBold} ${theme.font.sizes.xsmall} / 4rem
      ${theme.font.family};

    letter-spacing: -0.006rem;
    text-align: left;
    color: ${theme.colors.secondaryDark};

    margin: 0;
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.4rem ${theme.font.family};

    letter-spacing: -0.006rem;
    text-align: left;
    color: ${theme.colors.secondaryMedium};
  `}
`

export const LabelOption = styled.label`
  cursor: pointer;
  width: 100%;
  display: block;
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorMedium};
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 0.5rem 0;
  `}
`

const searchBoxModifier = {
  active: (theme: DefaultTheme) => css`
    ${InputText} {
      opacity: 1;
      pointer-events: auto;

      transition: all ${theme.transition.default};
    }
  `
}

export const InputText = styled.input.attrs({
  type: 'text',
  autoFocus: true
})`
  ${({ theme }) => css`
    position: absolute;
    z-index: 9999;

    pointer-events: none;
    opacity: 0;

    background: ${theme.colors.white} 0% 0% no-repeat padding-box;
    border: 0.1rem solid ${theme.colors.secondaryLight};
    border-radius: ${theme.border.smallRadius};

    color: ${theme.colors.secondaryDark};
    font: normal normal ${theme.font.regular} ${theme.font.sizes.xxsmall} /
      2.8rem ${theme.font.family};

    padding: 0.8rem 1.6rem;
    height: 3.6rem;
    width: 22rem;
    left: 1.8rem;
    top: 2rem;
    outline: none;

    transition: all ${theme.transition.default};

    &:focus-within {
      box-shadow: 0rem 0.4rem 0.6rem #00000014;
      border: 0.1rem solid ${theme.colors.infoDark};
    }
  `}
`

export const SearchBox = styled.div<DivSearchProps>`
  ${({ theme, active }) => css`
    position: relative;
    ${active && searchBoxModifier.active(theme)}
  `}
`
