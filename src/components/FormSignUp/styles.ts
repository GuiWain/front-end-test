import styled from 'styled-components'
import UseLink from 'next/link'

import UseTextField from 'components/TextField'
import UseButton from 'components/Button'

export const Link = styled(UseLink)``
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

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const DivCheckBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;

  justify-items: center;
  align-items: center;
`

export const Image = styled.img`
  margin: 0 1rem 0 0;
`
