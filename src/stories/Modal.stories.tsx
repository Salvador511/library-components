import { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    type: 'patient',
    data: {
      name: 'Brayan Prieto Lozoya',
      ssn: '# 123-45-6789',
      dateOfBirth: '09/17/2002',
      age: 23,
      sex: 'Male',
      phoneNumber: '+52 55 1234 5678',
      email: 'br.prieto@gmail.com',
      allergies: 'none',
      conditions: 'Hypertension',
      surgeries: 'Knee Surgery (2019)',
      bloodType: 'O+',

    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['patient', 'doctor'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const PatientModal: Story = {};

export const DoctorModal: Story = {
  args: {
    type: 'doctor',
    data: {
      name: 'Dr. Brayan Prieto Lozoya',
      specialty: 'Ginecologist',
      age: 23,
      medicalLicense: '123456789',
      education: 'Universidad Nacional de Medicina, Graduated in 2023',
      hospitalAffiliation: 'San Ángel Medical Center',
      clinicAddress: 'Av. Reforma 123, Mexico City, Mexico',
      contactNumber: '+52 55 1234 5678',
      email: 'dr.brayanprieto@sanangelclinic.com',
      consultationHours: 'Monday to Friday, 9:00 AM - 5:00 PM',
    },
  },
};
