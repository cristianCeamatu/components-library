export interface Palette {
  white: string
  grey: string
  black: string
  primary: string
  secondary: string
  danger: string
  success: string
  info: string
  warning: string
}

export type PaletteInput = {
  readonly [K in keyof Palette]+?: Palette[K]
}

const createPalette = (palette: PaletteInput): Palette => {
  const {
    white = '#fff',
    grey = '#f7f9fa',
    black = '#222',
    primary = '#2d9cdb',
    secondary = '#5e72e4',
    danger = '#eb5757',
    success = '#27ae60',
    info = '#6bb2da',
    warning = '#fcb400',
  } = palette

  return {
    white,
    grey,
    black,
    primary,
    secondary,
    danger,
    success,
    info,
    warning,
  }
}

export default createPalette
