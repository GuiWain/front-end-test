import styled, { css } from 'styled-components'
import UseFormSignIn from 'components/FormSignIn'
import UseButton from 'components/Button'

import UseBase from 'templates/Base'

import { Google } from '@styled-icons/evaicons-solid'

export const Base = styled(UseBase)``

export const Button = styled(UseButton)`
  width: 30%;
  margin: auto;
`
export const FormSignIn = styled(UseFormSignIn)``
export const GoogleIcon = styled(Google)``

export const SignIn = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryLightest};
    padding: 7rem 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryDark};
    font-size: ${theme.font.sizes.medium};
  `}
`
