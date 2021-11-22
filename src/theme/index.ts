import createPalette, { Palette, PaletteInput } from './palette'
import createTypography, { Typography, TypographyInput } from './typography'
import spacing, { Spacing } from './spacing'
import misc, { Misc } from './misc'

export interface Theme {
  palette: Palette
  typography: Typography
  spacing: Spacing
  misc: Misc
}

export interface ThemeInput {
  palette?: PaletteInput
  typography?: TypographyInput
}

const createTheme = (options: ThemeInput): Theme => {
  const { palette: paletteInput = {}, typography: typographyInput = {} } =
    options || {}

  const palette = createPalette(paletteInput)
  const typography = createTypography(typographyInput)

  return {
    palette, // our color palette
    spacing, // a spacing unit to be used on paddings / margins / etc.
    typography, // fonts and fontSizes theme
    misc, // misc props like borderRadius
  }
}

export default createTheme
