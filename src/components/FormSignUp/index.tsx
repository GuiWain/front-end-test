import * as S from './styles'
import { useState, FormEvent } from 'react'

import { FieldErrors } from 'utils/validations'

export type FormSignUpValue = {
  [field: string]: string
}

export type FormSignUpProps = {
  handleSubmit: (e: FormEvent, values: FormSignUpValue) => void
  fieldError: FieldErrors
}

const FormSignUp = ({ handleSubmit, fieldError }: FormSignUpProps) => {
  const [values, setValues] = useState<FormSignUpValue>({})

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <S.Wrapper onSubmit={(e) => handleSubmit(e, values)}>
      <S.DivText>
        <S.TextField
          type="text"
          label="Full name"
          placeholder="Your name"
          error={fieldError?.name}
          onInputChange={(s) => handleInput('username', s)}
          name="name"
        />
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
          name="passwordSignUp"
        />
        <S.TextField
          type="password"
          label="Confirm password"
          onInputChange={(s) => handleInput('confirm_password', s)}
          name="confirm_password"
          error={fieldError?.confirm_password}
          onPaste={(e) => e.preventDefault()}
          autoComplete="off"
        />
      </S.DivText>
      <S.ButtonSubmit>Sign up</S.ButtonSubmit>
    </S.Wrapper>
  )
}

export default FormSignUp
