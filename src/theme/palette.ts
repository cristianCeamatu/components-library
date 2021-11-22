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
    primary = '#6d30e7',
    secondary = '#dfdded',
    danger = '#fa1d42',
    success = '#27ae60',
    info = '#007BC0',
    warning = '#FBC02D',
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
