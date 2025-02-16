import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CloseBtn from '../components/CloseBtn/CloseBtn';

// Define the metadata for the component
export default {
  title: 'Components/CloseBtn', // The path in the Storybook UI
  component: CloseBtn, // The component itself
  argTypes: {
    onClick: { action: 'clicked' }, // Define the onClick action
  },
} as Meta;

// Define the template for the story
const Template: StoryFn<typeof CloseBtn> = (args) => <CloseBtn {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('Close button clicked'), // Default onClick handler
};
