import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignIn, { FormSignInProps } from '.'

import { FormEvent } from 'react'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  return
}

export const Default: Story<FormSignInProps> = (args) => (
  <FormSignIn {...args} />
)

Default.args = {
  handleSubmit: handleSubmit,
  fieldError: { username: '', password: '' }
}
