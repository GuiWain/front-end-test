import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'huge']
      }
    },
    disabled: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    fullWidth: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    bg: {
      control: {
        type: 'radio',
        options: [
          'normal',
          'transparent',
          'gray',
          'info',
          'success',
          'error',
          'warning'
        ]
      }
    },
    border: {
      control: {
        type: 'radio',
        options: ['info', 'success', 'error', 'warning']
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  size: 'medium',
  children: 'Click',
  bg: 'normal'
}

export const WithBorder: Story<ButtonProps> = (args) => <Button {...args} />

WithBorder.args = {
  size: 'medium',
  children: 'Click',
  border: 'info'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'medium',
  children: 'Click',
  icon: <AddShoppingCart />
}
