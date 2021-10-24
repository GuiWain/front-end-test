import { useState } from 'react'
import * as S from './styles'

export type CheckBoxProps = {
  getValues?: (field: boolean) => void
  label?: string
  name?: string
  id?: string
  value?: string
  disabled?: boolean
  defaultChecked?: boolean
  required?: boolean
  error?: string
}

const CheckBox = ({
  getValues,
  label,
  value,
  disabled = false,
  defaultChecked = false,
  error,
  name,
  id,
  required = false
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(
    defaultChecked ? defaultChecked : false
  )

  const onChange = (value: boolean) => {
    setChecked(value)
    !!getValues && getValues(value)
  }

  return (
    <S.Wrapper error={!!error} disabled={disabled}>
      <S.InputCheckBox>
        <S.CheckBox
          value={value}
          disabled={disabled}
          checked={checked}
          name={name}
          id={name ? name : id}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
        />
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputCheckBox>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default CheckBox
