import { Story, Meta } from '@storybook/react'
import UploadSimple, { UploadSimpleProps } from '.'

export default {
  title: 'Inputs/UploadSimple',
  component: UploadSimple,
  argTypes: {
    label: {
      type: 'string'
    },
    button: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    disabled: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    multiple: {
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

export const Default: Story<UploadSimpleProps> = (args) => (
  <div style={{ width: '40%', margin: '2rem auto' }}>
    <UploadSimple {...args} />
  </div>
)

Default.args = {
  label: 'Select files to upload',
  button: 'Choose file',
  name: 'inputFile',
  multiple: true,
  disabled: false
}

export const WithError: Story<UploadSimpleProps> = (args) => (
  <div style={{ width: '40%', margin: '2rem auto' }}>
    <UploadSimple {...args} />
  </div>
)

WithError.args = {
  label: 'Select files to upload',
  button: 'Choose file',
  multiple: true,
  name: 'inputFile',
  error: 'Required field',
  disabled: false
}
