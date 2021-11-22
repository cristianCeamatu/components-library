export interface Palette {
    white: string;
    grey: string;
    black: string;
    primary: string;
    secondary: string;
    danger: string;
    success: string;
    info: string;
    warning: string;
}
export declare type PaletteInput = {
    readonly [K in keyof Palette]+?: Palette[K];
};
declare const createPalette: (palette: PaletteInput) => Palette;
export default createPalette;
