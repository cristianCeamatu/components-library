import * as React from 'react';
import { Palette } from '../../theme/palette';
export interface IStyles {
    type?: 'button' | 'submit';
    variant?: 'outlined' | 'contained';
    size?: 'largeInline' | 'normal' | 'large' | 'small';
    color?: keyof Palette;
    invertOnHover?: boolean;
    disabled?: boolean;
}
export interface IProps extends IStyles {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: ({ label, type, variant, size, color, invertOnHover, disabled, onClick, ...props }: IProps) => JSX.Element;
