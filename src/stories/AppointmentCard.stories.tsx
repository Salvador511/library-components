import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AppointmentCard from '../components/AppointmentCard/AppointmentCard';

export default {
    title: 'Components/AppointmentCard',
    component: AppointmentCard,
    args: {
        doctorName: 'Dr. John Doe',
        speciality: 'Gynecologist',
        location: '123 Health St, Medical City',
        instructions: 'Please arrive 15 minutes early.',
        date: 'March 10, 2025',
        time: '10:30 AM'
    }
} as Meta<typeof AppointmentCard>;

const Template: StoryFn<typeof AppointmentCard> = (args) => <AppointmentCard {...args} />;

export const Default = Template.bind({});
Default.args = {};


