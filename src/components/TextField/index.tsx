import {
  useState,
  InputHTMLAttributes,
  SetStateAction,
  Dispatch,
  useEffect
} from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  getValue?: Dispatch<SetStateAction<string>>
  type: 'text' | 'email' | 'password' | 'number'
  label?: string
  initialValue?: string | number
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  type,
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  getValue,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [typeModifier, setTypeModifier] = useState(type)
  const [iconModifier, setIconModifier] = useState(icon)
  const [iconPositionModifier, setIconPositionModifier] = useState(iconPosition)
  const [alert, setAlert] = useState<string | undefined>(undefined)

  const validateEmail = (value: string) => {
    const validate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (value === undefined || value === '') {
      setAlert(undefined)
      setIconModifier(undefined)
      setIconPositionModifier('left')
      return
    }

    if (validate.test(value)) {
      setAlert('Valid email')
      setIconModifier(<S.CheckCircleIcon />)
      setIconPositionModifier('right')
    } else {
      setAlert('Invalid email')
      setIconModifier(undefined)
      setIconPositionModifier('left')
    }
  }

  const showPassword = () => {
    setTypeModifier('text')
    setIconModifier(<S.EyeIcon onClick={() => hiddePassword()} />)
  }

  const hiddePassword = () => {
    setTypeModifier('password')
    setIconModifier(<S.EyeSlashIcon onClick={() => showPassword()} />)
  }

  useEffect(() => {
    if (typeModifier === 'password') {
      setIconModifier(<S.EyeSlashIcon onClick={() => showPassword()} />)
      setIconPositionModifier('right')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (value: string) => {
    if (typeModifier === 'email') {
      validateEmail(value)
    }

    setValue(value)

    !!getValue && getValue(value)
    !!onInputChange && onInputChange(value)
  }

  return (
    <S.Wrapper
      disabled={disabled}
      error={!!error}
      alert={
        !!alert && alert === 'Valid email'
          ? 'alertSuccess'
          : undefined || (!!alert && alert === 'Invalid email')
          ? 'alertWarning'
          : undefined
      }
    >
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!iconModifier && (
          <S.Icon iconPosition={iconPositionModifier}>{iconModifier}</S.Icon>
        )}
        <S.Input
          type={typeModifier}
          onChange={(e) => onChange(e.currentTarget.value)}
          value={value}
          iconPosition={iconPositionModifier}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
      {!!alert && alert === 'Valid email' && !error ? (
        <S.alertSuccess>{alert}</S.alertSuccess>
      ) : null}
      {!!alert && alert === 'Invalid email' && !error ? (
        <S.AlertWarning>{alert}</S.AlertWarning>
      ) : null}
    </S.Wrapper>
  )
}

export default TextField
