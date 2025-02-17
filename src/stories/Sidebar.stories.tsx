import React from 'react';
import { Meta, Story } from '@storybook/react';
import Sidebar from '../components/Sidebar/Sidebar';
import Button from '../components/Button/Button';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button label="Button 3" />
    </>
  ),
};