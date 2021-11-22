export type EventSpacingEnum = 1 | 2 | 3 | 4

export type Spacing = {
  [k in EventSpacingEnum]: string
};

const spacing = {
  1: '0.125rem', // 2px
  2: '0.25rem', // 4px
  3: '0.625rem', // 10px
  4: '1.825rem', // 30px
};

export default spacing;