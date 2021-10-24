import { Story, Meta } from '@storybook/react'
import NavBar from '.'

export default {
  title: 'Components/NavBar',
  component: NavBar
} as Meta

export const Default: Story = () => (
  <div style={{ height: '70vh', margin: 'auto' }}>
    <NavBar />
  </div>
)
