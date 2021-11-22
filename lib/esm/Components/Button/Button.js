var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
export var Button = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Apply' : _b, _c = _a.type, type = _c === void 0 ? 'button' : _c, _d = _a.variant, variant = _d === void 0 ? 'contained' : _d, _e = _a.size, size = _e === void 0 ? 'normal' : _e, _f = _a.color, color = _f === void 0 ? 'primary' : _f, 
    /** Inverts background color with font color on hover */
    invertOnHover = _a.invertOnHover, 
    /**
     * Disables onClick
     *
     * @default false
     **/
    _g = _a.disabled, 
    /**
     * Disables onClick
     *
     * @default false
     **/
    disabled = _g === void 0 ? false : _g, 
    /** Callback to handle the click event  */
    _h = _a.onClick, 
    /** Callback to handle the click event  */
    onClick = _h === void 0 ? function () { } : _h, props = __rest(_a, ["label", "type", "variant", "size", "color", "invertOnHover", "disabled", "onClick"]);
    return (React.createElement(StyledButton, __assign({ type: type, variant: variant, color: color, size: size, invertOnHover: invertOnHover, onClick: onClick, disabled: disabled }, props), label));
};
var StyledButton = styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 0.5rem 1rem;\n  color: ", ";\n  background: ", ";\n  border: none;\n  border-radius: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  cursor: pointer;\n  box-shadow: ", ";\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  &:hover {\n    ", "\n  }\n\n  ", ";\n"], ["\n  padding: 0.5rem 1rem;\n  color: ", ";\n  background: ", ";\n  border: none;\n  border-radius: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  cursor: pointer;\n  box-shadow: ", ";\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  &:hover {\n    ", "\n  }\n\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.white;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color ? theme.palette[color] : theme.palette.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.misc.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.typography.h3;
}, function (_a) {
    var theme = _a.theme;
    return theme.misc.shadows.normal;
}, function (_a) {
    var size = _a.size, theme = _a.theme;
    return size === 'large' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: 0.875rem 4rem;\n      font-size: ", ";\n    "], ["\n      padding: 0.875rem 4rem;\n      font-size: ", ";\n    "])), theme.typography.h2);
}, function (_a) {
    var size = _a.size, theme = _a.theme;
    return size === 'small' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      padding: 0.325rem 1rem;\n      font-size: ", ";\n    "], ["\n      padding: 0.325rem 1rem;\n      font-size: ", ";\n    "])), theme.typography.small);
}, function (_a) {
    var size = _a.size;
    return size === 'largeInline' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      padding-inline: 3rem;\n    "], ["\n      padding-inline: 3rem;\n    "])));
}, function (_a) {
    var color = _a.color, variant = _a.variant, theme = _a.theme;
    return variant === 'outlined' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      font-weight: 700;\n      background: transparent;\n      color: ", ";\n      outline: 2px solid ", ";\n    "], ["\n      font-weight: 700;\n      background: transparent;\n      color: ", ";\n      outline: 2px solid ", ";\n    "])), color ? theme.palette[color] : theme.palette.primary, color ? theme.palette[color] : theme.palette.primary);
}, function (_a) {
    var invertOnHover = _a.invertOnHover, color = _a.color, theme = _a.theme, variant = _a.variant;
    return invertOnHover && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        font-weight: 700;\n        background: transparent;\n        color: ", ";\n        border: 2px solid\n          ", ";\n\n        ", ";\n      "], ["\n        font-weight: 700;\n        background: transparent;\n        color: ", ";\n        border: 2px solid\n          ", ";\n\n        ", ";\n      "])), color ? theme.palette[color] : theme.palette.primary, color ? theme.palette[color] : theme.palette.primary, variant === 'outlined' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          color: ", ";\n          background: ", ";\n        "], ["\n          color: ", ";\n          background: ", ";\n        "])), theme.palette.white, color ? theme.palette[color] : theme.palette.primary));
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme;
    return disabled && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      pointer-events: none;\n      opacity: 0.7;\n      box-shadow: ", ";\n      outline: 1px solid ", "88;\n    "], ["\n      pointer-events: none;\n      opacity: 0.7;\n      box-shadow: ", ";\n      outline: 1px solid ", "88;\n    "])), theme.misc.shadows.danger, theme.palette.danger);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
