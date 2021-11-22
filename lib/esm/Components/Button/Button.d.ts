import * as React from 'react';
export interface Props {
    /** Button content  */
    children: React.ReactNode;
    /** Callback to handle the click event  */
    onClick?: () => void;
    /**
     * Disables onClick
     *
     * @default false
     **/
    disabled?: boolean;
}
export declare const Button: (props: Props) => JSX.Element;
