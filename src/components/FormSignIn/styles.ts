import styled from 'styled-components'

import UseTextField from 'components/TextField'
import UseButton from 'components/Button'

export const TextField = styled(UseTextField)``

export const ButtonSubmit = styled(UseButton).attrs({
  type: 'submit',
  fullWidth: true
})``

export const Wrapper = styled.form`
  width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background-color: #fff;
  box-shadow: 0px 0.3rem 0.6rem #00000029;
  padding: 3rem 4rem;
  margin: auto;
`
