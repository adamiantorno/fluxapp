import React from 'react';

import { Navbar } from './Navbar';

export default {
    title: 'Component/Navbar',
    component: Navbar,
    argTypes: {
        username: {control: 'text' },
    },
}

const Template = (args) => <Navbar {...args} />

export const Main = Template.bind({});
Main.args = {
    username: 'aihustle'
};