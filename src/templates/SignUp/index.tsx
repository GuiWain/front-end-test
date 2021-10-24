import { FormEvent, useState } from 'react'
import * as S from './styles'

import { FieldErrors, signUpValidate } from 'utils/validations'
import { FormSignUpValue } from 'components/FormSignUp'

const SignUp = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const handleSubmit = async (e: FormEvent, values: FormSignUpValue) => {
    e.preventDefault()

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
  }
  return (
    <S.Base>
      <S.SignUp>
        <S.FormSignUp handleSubmit={handleSubmit} fieldError={fieldError} />
        <S.Span>Or</S.Span>
        <S.Button bg="transparent" icon={<S.GoogleIcon />}>
          Login by Google
        </S.Button>
      </S.SignUp>
    </S.Base>
  )
}

export default SignUp
