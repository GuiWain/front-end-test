import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignUp, { FormSignUpProps } from '.'

import { FormEvent } from 'react'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  return
}

export const Default: Story<FormSignUpProps> = (args) => (
  <FormSignUp {...args} />
)

Default.args = {
  handleSubmit: handleSubmit,
  fieldError: { name: '', email: '', password: '', confirm_password: '' }
}
