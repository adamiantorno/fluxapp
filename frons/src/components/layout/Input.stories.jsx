import React from 'react';

import { Input } from './Input';

export default {
    title: 'Component/Input',
    component: Input,
    argTypes: {
        placeholder: { control: 'text' },
    },
};

const Template = (args) => <Input {...args} />;

export const Fill = Template.bind({});
Fill.args = {
    size: 'fill',
    placeholder: 'Fill'
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    placeholder: 'medium'
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    placeholder: 'small'
};