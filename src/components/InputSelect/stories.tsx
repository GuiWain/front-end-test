import { Story, Meta } from '@storybook/react'
import InputSelect, { InputSelectProps } from '.'

import { listStates } from './mockStates'

export default {
  title: 'Inputs/InputSelect',
  component: InputSelect,
  argTypes: {
    label: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    defaultSelect: {
      type: 'string'
    },
    options: {
      type: ['string']
    },
    error: {
      type: 'string'
    },
    disabled: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    widthSelected: {
      type: 'number'
    },
    widthOptions: {
      type: 'number'
    },
    searchBox: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    }
  }
} as Meta

export const Default: Story<InputSelectProps> = (args) => (
  <InputSelect {...args} />
)

Default.args = {
  options: listStates,
  label: 'Choose a state',
  name: 'states',
  defaultSelect: 'Select a state',
  disabled: false,
  searchBox: false
}

export const WithSearchBox: Story<InputSelectProps> = (args) => (
  <InputSelect {...args} />
)

WithSearchBox.args = {
  options: listStates,
  label: 'Choose a state',
  name: 'states',
  defaultSelect: 'Select a state',
  disabled: false,
  searchBox: true
}

export const WithError: Story<InputSelectProps> = (args) => (
  <InputSelect {...args} />
)

WithError.args = {
  options: listStates,
  label: 'Choose a state',
  name: 'states',
  defaultSelect: 'Select a state',
  error: 'Required field',
  disabled: false,
  searchBox: false
}
