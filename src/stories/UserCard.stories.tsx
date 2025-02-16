import { Meta, StoryObj } from '@storybook/react'
import UserCard from '../components/UserCard/UserCard'

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  args: {
    user: 'doctor', // Valor por defecto
    name: 'John Doe',
    specialty: 'Ginecologist',
  },
  argTypes: {
    user: {
      control: 'radio', // Permite elegir entre doctor y pacient en Storybook
      options: ['doctor', 'pacient'],
    },
  },
}

export default meta
type Story = StoryObj<typeof UserCard>

export const Doctor: Story = {}

export const Pacient: Story = {
  args: {
    user: 'pacient',
    specialty: undefined, // Un paciente no tendría "specialty"
    ssn: '# 123-45-6789', // Se puede omitir SSN para pacientes
  },
}