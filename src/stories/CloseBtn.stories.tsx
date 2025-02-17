import { Meta, StoryObj } from '@storybook/react'
import CloseButton from '../components/CloseBtn/CloseBtn'

const meta: Meta<typeof CloseButton> = {
  title: 'Components/CloseButton',
  component: CloseButton,
  args: {
    onClick: () => { },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
}

export default meta
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {}

export const WithCustomClick: Story = {
  args: {
    onClick: () => {
      // eslint-disable-next-line no-undef
      alert('Botón de cierre clickeado')
    },
  },
}