import * as S from './styles'

import { FormEvent, useState } from 'react'

import { FieldErrors, signInValidate } from 'utils/validations'
import { FormSignInValue } from 'components/FormSignIn'

const SignIn = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleSubmit = async (e: FormEvent, values: FormSignInValue) => {
    e.preventDefault()
    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
  }

  return (
    <S.Base>
      <S.SignIn>
        <S.FormSignIn handleSubmit={handleSubmit} fieldError={fieldError} />
        <S.Span>Or</S.Span>
        <S.Button bg="transparent" icon={<S.GoogleIcon />}>
          Login by Google
        </S.Button>
      </S.SignIn>
    </S.Base>
  )
}

export default SignIn
