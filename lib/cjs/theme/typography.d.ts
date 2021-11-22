export interface Typography {
    fontFamily: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    button: string;
    small: string;
    fontWeightNormal: number;
    fontWeightLight: number;
    fontWeightBold: number;
}
export declare type TypographyInput = {
    +readonly [K in keyof Typography]+?: Typography[K];
} & {
    fontSize?: number;
    htmlFontSize?: number;
};
declare const createTypography: (typography: TypographyInput) => Typography;
export default createTypography;
