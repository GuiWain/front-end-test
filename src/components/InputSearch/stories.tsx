import { Story, Meta } from '@storybook/react'
import InputSearch, { InputSearchProps } from '.'

import { Location } from '@styled-icons/evil/'

import { listStates } from './mockStates'

export default {
  title: 'Inputs/InputSearch',
  component: InputSearch,
  argTypes: {
    onClickSearch: { action: 'changed' },
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
    widthInput: {
      type: 'number'
    },
    disabled: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    searchAutoComplete: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    error: {
      type: 'string'
    }
  }
} as Meta

const onSearch = (value: string) => {
  alert('Value input: ' + value)
}

export const Default: Story<InputSearchProps> = (args) => (
  <div style={{ width: '30%', margin: ' 2rem 0' }}>
    <InputSearch {...args} />
  </div>
)

Default.args = {
  label: 'Search by name',
  name: 'name',
  placeholder: 'Search by name',
  disabled: false,
  onClickSearch: onSearch,
  searchAutoComplete: false
}

export const AutoComplete: Story<InputSearchProps> = (args) => (
  <div style={{ width: '30%', margin: ' 2rem 0' }}>
    <InputSearch {...args} />
  </div>
)

AutoComplete.args = {
  label: 'Search by state',
  name: 'name',
  placeholder: 'Search by city or abbreviation',
  disabled: false,
  searchAutoComplete: true,
  optionsAutoComplete: listStates,
  iconAutoComplete: <Location />
}

export const WithError: Story<InputSearchProps> = (args) => (
  <div style={{ width: '30%', margin: ' 2rem 0' }}>
    <InputSearch {...args} />
  </div>
)

WithError.args = {
  label: 'Search',
  name: 'name',
  placeholder: 'Search by name',
  disabled: false,
  error: 'Required field'
}
