export type Misc = {
  borderRadius: string
  shadows: {
    normal: string
    light: string
    intense: string
  }
}

const misc = {
  borderRadius: '4px',
  shadows: {
    normal:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    light: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    intense: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}

export default misc
