import { Story, Meta } from '@storybook/react/types-6-0'
import { Address } from '@styled-icons/entypo/'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Inputs/TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' },
    type: {
      control: {
        type: 'radio',
        options: ['text', 'email', 'password', 'number']
      }
    },
    placeholder: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    initialValue: {
      type: 'string'
    },
    icon: {
      type: 'JSX.element'
    },
    disabled: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    iconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right']
      }
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.args = {
  type: 'text',
  label: 'Enter your name',
  name: 'name',
  placeholder: 'Placeholder',
  disabled: false
}

export const EmailValidate: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

EmailValidate.args = {
  type: 'email',
  label: 'Your email',
  name: 'email',
  placeholder: 'email@email.com.br',
  disabled: false
}

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithIcon.args = {
  type: 'text',
  label: 'Your adress',
  name: 'address',
  placeholder: 'Calgary',
  icon: <Address />,
  iconPosition: 'left',
  disabled: false
}

export const Password: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Password.args = {
  type: 'password',
  label: 'Your password',
  placeholder: 'Your password',
  name: 'password',
  disabled: false
}

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  type: 'text',
  label: 'Your adress',
  name: 'address',
  placeholder: 'Toronto',
  icon: <Address />,
  iconPosition: 'left',
  disabled: false,
  error: 'Required field'
}
