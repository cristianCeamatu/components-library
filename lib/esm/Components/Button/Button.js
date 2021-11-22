var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
var noop = function () { };
var RootStyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0px 20px;\n  height: 49px;\n  border-radius: 2px;\n  border: 2px solid #3d5567;\n  display: inline-flex;\n  background-color: ", ";\n"], ["\n  padding: 0px 20px;\n  height: 49px;\n  border-radius: 2px;\n  border: 2px solid #3d5567;\n  display: inline-flex;\n  background-color: ", ";\n"])), function (props) { return (props.disabled ? 'red' : 'blue'); });
var ButtonSpan = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: auto;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n"], ["\n  margin: auto;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n"
    /*
     * If you opt to do export default, you'll still need to have this
     * export for the TsDocGen work properly (I struggled to find this out)
     */
])));
/*
 * If you opt to do export default, you'll still need to have this
 * export for the TsDocGen work properly (I struggled to find this out)
 */
export var Button = function (props) {
    var children = props.children, onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    return (React.createElement(RootStyledButton, { disabled: disabled, onClick: !disabled ? onClick : noop },
        React.createElement(ButtonSpan, null, children)));
};
var templateObject_1, templateObject_2;
