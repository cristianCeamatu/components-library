import { Palette, PaletteInput } from './palette';
import { Typography, TypographyInput } from './typography';
import { Spacing } from './spacing';
import { Misc } from './misc';
export interface Theme {
    palette: Palette;
    typography: Typography;
    spacing: Spacing;
    misc: Misc;
}
export interface ThemeInput {
    palette?: PaletteInput;
    typography?: TypographyInput;
}
declare const createTheme: (options: ThemeInput) => Theme;
export default createTheme;
