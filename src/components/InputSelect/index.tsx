import { useState, useEffect } from 'react'
import * as S from './styles'

export type DisplayOptions = {
  [field: string]: boolean
}

export type InputSelectProps = {
  getValues?: (field: string) => void
  options: string[]
  label?: string
  name?: string
  defaultSelect?: string
  error?: string
  disabled?: boolean
  widthOptions?: number
  widthSelected?: number
  searchBox?: boolean
}

const InputSelect = ({
  getValues,
  options,
  label,
  name,
  defaultSelect = 'Selecione...',
  error,
  disabled,
  widthOptions,
  widthSelected,
  searchBox = false
}: InputSelectProps) => {
  const [displayOption, setDisplayOption] = useState<DisplayOptions>({})
  const [selected, setSelected] = useState(defaultSelect)
  const [optionsContainer, setOptionsContainer] = useState(false)

  useEffect(() => {
    options.forEach((option) => {
      setDisplayOption((s) => ({ ...s, [option]: false }))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (getValues) {
      getValues(selected)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const onClickSelected = () => {
    if (disabled) {
      return
    } else setOptionsContainer(!optionsContainer)
  }

  const onClickOption = (item: string) => {
    setOptionsContainer(!optionsContainer)
    setSelected(item)
  }

  const handleInput = (value: string) => {
    const values = value.toLowerCase()

    options.forEach((option) => {
      const label = option.toLowerCase()

      if (label.indexOf(values) != -1) {
        setDisplayOption((s) => ({ ...s, [option]: false }))
      } else {
        setDisplayOption((s) => ({ ...s, [option]: true }))
      }
    })
  }

  return (
    <S.Container
      error={!!error}
      disabled={disabled}
      widthSelected={widthSelected}
      widthOptions={widthOptions}
      searchBox={searchBox}
    >
      {!!label && <S.Label>{label}</S.Label>}

      <S.SelectBox>
        <S.OptionsContainer active={optionsContainer}>
          {!!options &&
            options.map((item) => (
              <S.Option key={item} showHidde={displayOption[item]}>
                <S.Input id={item} name={name} />
                <S.LabelOption
                  htmlFor={item}
                  onClick={() => onClickOption(item)}
                >
                  {item}
                </S.LabelOption>
              </S.Option>
            ))}
        </S.OptionsContainer>
        <S.Selected onClick={onClickSelected} active={optionsContainer}>
          <S.Span>{selected}</S.Span>
        </S.Selected>

        {searchBox && (
          <S.SearchBox active={optionsContainer}>
            <S.InputText
              placeholder="&#128269; Search by"
              onChange={(e) => handleInput(e.currentTarget.value)}
            />
          </S.SearchBox>
        )}
      </S.SelectBox>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}

export default InputSelect
