var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Button } from './Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return React.createElement(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    label: 'Apply',
};
export var SecondaryLgInline = Template.bind({});
SecondaryLgInline.args = {
    label: 'Apply',
    color: 'secondary',
    size: 'largeInline',
};
export var LargeSuccess = Template.bind({});
LargeSuccess.args = {
    size: 'large',
    label: 'Apply',
    color: 'success',
};
export var SmallDanger = Template.bind({});
SmallDanger.args = {
    size: 'small',
    label: 'Button',
    color: 'danger',
};
