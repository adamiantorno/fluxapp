import React from 'react';

import { Search } from './Search';

export default {
    title: 'Component/Search',
    component: Search, 
    argTypes: {
        placeholder: { control: 'text' },
    },
}

const Template = (args) => <Search {...args} />

export const Main = Template.bind({});
Main.args = {
    placeholder: 'Search Flux...'
};