"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallDanger = exports.LargeSuccess = exports.SecondaryLgInline = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("./Button");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Components/Button',
    component: Button_1.Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return react_1.default.createElement(Button_1.Button, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    label: 'Apply',
};
exports.SecondaryLgInline = Template.bind({});
exports.SecondaryLgInline.args = {
    label: 'Apply',
    color: 'secondary',
    size: 'largeInline',
};
exports.LargeSuccess = Template.bind({});
exports.LargeSuccess.args = {
    size: 'large',
    label: 'Apply',
    color: 'success',
};
exports.SmallDanger = Template.bind({});
exports.SmallDanger.args = {
    size: 'small',
    label: 'Button',
    color: 'danger',
};
