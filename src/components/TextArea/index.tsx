import { useState } from 'react'
import * as S from './styles'

export type TextAreaProps = {
  getValues?: (field: string) => void
  placeholder?: string
  label?: string
  name?: string
  rows?: number
  cols?: number
  maxlength?: number
  defaultValue?: string
  letterCount?: boolean
  resize?: 'vertical' | 'horizontal' | 'both' | 'none'
  error?: string
}

const TextArea = ({
  getValues,
  placeholder,
  label,
  name,
  rows = 5,
  defaultValue,
  error,
  letterCount = false,
  resize = 'none',
  maxlength
}: TextAreaProps) => {
  const [valueLength, setValuelength] = useState(0)

  const onChange = (value: string) => {
    !!getValues && getValues(value)
    letterCount && setValuelength(value.length)
  }

  return (
    <S.Wrapper error={!!error} resize={resize}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.TextArea
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={rows}
        maxLength={maxlength}
      />
      {letterCount && (
        <S.Span>
          {valueLength} of {maxlength} caracters
        </S.Span>
      )}
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextArea
