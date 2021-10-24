import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'normal', 'large', 'fullWidth']
      }
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.args = {
  size: 'normal'
}
