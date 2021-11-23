export interface Typography {
  fontFamily: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  button: string
  small: string
  fontWeightNormal: number
  fontWeightLight: number
  fontWeightBold: number
  fontWeightBolder: number
  fontWeightSemiBold: number
}

export type TypographyInput = {
  +readonly [K in keyof Typography]+?: Typography[K]
} & {
  fontSize?: number
  htmlFontSize?: number
}

const defaultFontFamily = "'PX Grotesk', sansSerif"

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontFamily = defaultFontFamily,

    /* sizes */
    fontSize = 14,
    htmlFontSize = 16,

    /* weights */
    fontWeightNormal = 400,
    fontWeightLight = 300,
    fontWeightSemiBold = 500,
    fontWeightBold = 700,
    fontWeightBolder = 900,
  } = typography

  const coef = fontSize / 14
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`

  return {
    fontFamily,
    h1: pxToRem(24),
    h2: pxToRem(20),
    h3: pxToRem(18),
    h4: pxToRem(17),
    h5: pxToRem(16),
    h6: pxToRem(14),
    button: pxToRem(14),
    small: pxToRem(12),
    fontWeightNormal,
    fontWeightLight,
    fontWeightBold,
    fontWeightSemiBold,
    fontWeightBolder,
  }
}

export default createTypography
