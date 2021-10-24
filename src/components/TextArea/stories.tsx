import { Story, Meta } from '@storybook/react'
import TextArea, { TextAreaProps } from '.'

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    rows: {
      type: 'number'
    },
    maxlength: {
      type: 'number'
    },
    resize: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal', 'both', 'none']
      }
    },
    letterCount: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    }
  }
} as Meta

export const Default: Story<TextAreaProps> = (args) => (
  <div style={{ margin: '3rem auto', width: '80%' }}>
    <TextArea {...args} />
  </div>
)

Default.args = {
  label: 'Label label label',
  placeholder: 'Enter your text',
  letterCount: false,
  resize: 'none'
}

export const WithLetterCount: Story<TextAreaProps> = (args) => (
  <div style={{ margin: '3rem auto', width: '80%' }}>
    <TextArea {...args} />
  </div>
)

WithLetterCount.args = {
  label: 'Label label label',
  placeholder: 'Enter your text',
  maxlength: 200,
  letterCount: true,
  resize: 'none'
}

export const WithError: Story<TextAreaProps> = (args) => (
  <div style={{ margin: '3rem auto', width: '80%' }}>
    <TextArea {...args} />
  </div>
)

WithError.args = {
  label: 'Label label label',
  placeholder: 'Enter your text',
  rows: 3,
  error: 'This field is required',
  letterCount: false,
  resize: 'none'
}
