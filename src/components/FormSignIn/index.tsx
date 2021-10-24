import { useState, FormEvent } from 'react'

import * as S from './styles'

import { FieldErrors } from 'utils/validations'

export type FormSignInValue = {
  email?: string
  password?: string
}

export type FormSignInProps = {
  handleSubmit: (e: FormEvent, values: FormSignInValue) => void
  fieldError: FieldErrors
}

const FormSignIn = ({ handleSubmit, fieldError }: FormSignInProps) => {
  const [values, setValues] = useState<FormSignInValue>({})

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <S.Wrapper onSubmit={(e) => handleSubmit(e, values)}>
      <S.TextField
        type="email"
        label="Email"
        placeholder="Your email"
        error={fieldError?.email}
        onInputChange={(s) => handleInput('email', s)}
        name="email"
      />
      <S.TextField
        type="password"
        label="Password"
        error={fieldError?.password}
        onInputChange={(s) => handleInput('password', s)}
        name="password"
      />
      <S.ButtonSubmit>Sign in</S.ButtonSubmit>
    </S.Wrapper>
  )
}

export default FormSignIn
