import * as S from './styles'

import { useState, useEffect, InputHTMLAttributes } from 'react'

export type DisplayOptions = {
  [field: string]: boolean
}

export type InputSearchProps = {
  getValue?: (value: string) => void
  onClickSearch?: (value: string) => void
  label?: string
  name?: string
  initialValue?: string
  widthInput?: number
  iconPosition?: 'left' | 'right'
  placeholder?: string
  disabled?: boolean
  error?: string
  searchAutoComplete?: boolean
  optionsAutoComplete?: string[]
  iconAutoComplete?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const InputSearch = ({
  iconPosition = 'right',
  label,
  name,
  initialValue = '',
  widthInput,
  placeholder,
  error,
  disabled = false,
  getValue,
  onClickSearch,
  searchAutoComplete = false,
  optionsAutoComplete,
  iconAutoComplete,
  ...props
}: InputSearchProps) => {
  const [value, setValue] = useState(initialValue)
  const [iconPositionModifier, setIconPositionModifier] = useState(iconPosition)
  const [displayOption, setDisplayOption] = useState<DisplayOptions>({})
  const [openOptions, setOpenOptions] = useState(false)

  const onClickIcon = () => {
    !!onClickSearch && onClickSearch(value)
  }

  const onClickSpan = (item: string) => {
    setValue(item)
    setOpenOptions(false)
  }

  const onChange = (value: string) => {
    if (value === '' || value === undefined) setOpenOptions(false)
    else setOpenOptions(true)

    if (searchAutoComplete) {
      const values = value.toLowerCase()

      if (optionsAutoComplete) {
        optionsAutoComplete.forEach((option) => {
          const label = option.toLowerCase()

          if (label.indexOf(values) != -1) {
            setDisplayOption((s) => ({ ...s, [option]: false }))
          } else {
            setDisplayOption((s) => ({ ...s, [option]: true }))
          }
        })
      }
    }
    setValue(value)
  }

  useEffect(() => {
    if (searchAutoComplete) {
      setIconPositionModifier('left')

      if (optionsAutoComplete) {
        optionsAutoComplete.forEach((option) => {
          setDisplayOption((s) => ({ ...s, [option]: false }))
        })
      }
    } else setIconPositionModifier('right')
  }, [searchAutoComplete, optionsAutoComplete])

  useEffect(() => {
    if (getValue) getValue(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <S.Wrapper disabled={disabled} error={!!error} widthInput={widthInput}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Icon iconPosition={iconPositionModifier} onClick={onClickIcon}>
          <S.MagnifyingGlassIcon />
        </S.Icon>

        <S.Input
          type="text"
          onChange={(e) => onChange(e.currentTarget.value)}
          placeholder={placeholder}
          value={value}
          iconPosition={iconPositionModifier}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!optionsAutoComplete && openOptions && (
        <S.DivOptions>
          {optionsAutoComplete.map((item) => (
            <S.Options key={item} showHidde={displayOption[item]}>
              <S.Span onClick={() => onClickSpan(item)}>
                {!!iconAutoComplete && iconAutoComplete} {item}
              </S.Span>
            </S.Options>
          ))}
        </S.DivOptions>
      )}
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default InputSearch
