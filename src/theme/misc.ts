export type Misc = {
  borderRadius: string
  shadows: {
    normal: string
    light: string
    intense: string
    danger: string
  }
}

const misc = {
  borderRadius: '4px',
  shadows: {
    normal:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    intense: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    danger: '0 1px 2px 2px #eb575788'
  },
}

export default misc
