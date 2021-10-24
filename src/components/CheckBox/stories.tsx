import { Story, Meta } from '@storybook/react'
import CheckBox, { CheckBoxProps } from '.'

export default {
  title: 'inputs/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      type: 'string'
    },
    value: {
      type: 'string'
    },
    defaultChecked: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    disabled: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    name: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<CheckBoxProps> = (args) => <CheckBox {...args} />

Default.args = {
  label: 'Checkbox Label.',
  value: 'chkbx',
  name: 'chkbx',
  defaultChecked: false,
  disabled: false
}

export const WithError: Story<CheckBoxProps> = (args) => <CheckBox {...args} />

WithError.args = {
  label: 'Checkbox Label..',
  value: 'chkbx',
  name: 'chkbx',
  defaultChecked: false,
  disabled: false,
  error: 'Field required'
}
