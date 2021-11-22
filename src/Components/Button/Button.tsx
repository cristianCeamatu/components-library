import * as React from 'react'

import styled, { css } from 'styled-components'
import { Palette } from '../../theme/palette'

interface IStyles {
  type?: 'button' | 'submit'
  variant?: 'outlined' | 'contained'
  size?: 'largeInline' | 'normal' | 'large' | 'small'
  color?: keyof Palette
  invertOnHover?: true
  disabled?: boolean
}

interface IProps extends IStyles {
  label: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  label = 'Apply',
  type = 'button',
  variant = 'contained',
  size = 'normal',
  color = 'primary',
  invertOnHover,
  disabled = false,
  onClick = () => {},
  ...props
}: IProps) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      color={color}
      size={size}
      invertOnHover={invertOnHover}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<IStyles>`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primary};
  border-radius: ${({ theme }) => theme.misc.borderRadius};
  font-size: ${({ theme }) => theme.typography.h3};
  box-shadow: ${({ theme }) => theme.shadows.normal};

  ${({ size, theme }) =>
    size === 'large' &&
    css`
      padding: 0.875rem 4rem;
      font-size: ${theme.typography.h2};
    `}

  ${({ size, theme }) =>
    size === 'small' &&
    css`
      padding: 0.325rem 1rem;
      font-size: ${theme.typography.small};
    `}

  ${({ size }) =>
    size === 'largeInline' &&
    css`
      padding-inline: 3rem;
    `};

  ${({ color, variant, theme }) =>
    variant === 'outlined' &&
    css`
      font-weight: 700;
      background: transparent;
      color: ${color ? theme.colors[color].normal : theme.colors.main.normal};
      border: 1px solid
        ${color ? theme.colors[color].normal : theme.colors.main.normal};
    `};

  &:hover {
    ${({ invertOnHover, color, theme, variant }) =>
      invertOnHover &&
      css`
        background: transparent;
        color: ${color ? theme.colors[color].normal : theme.colors.main.normal};
        border: 1px solid
          ${color ? theme.colors[color].normal : theme.colors.main.normal};

        ${variant === 'outlined' &&
        css`
          color: ${theme.colors.white};
          background: ${color
            ? theme.colors[color].normal
            : theme.colors.main.normal};
        `};
      `}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `};
`

// export interface Props {
//   /** Button content  */
//   children: React.ReactNode
//   /** Callback to handle the click event  */
//   onClick?: () => void
//   /**
//    * Disables onClick
//    *
//    * @default false
//    **/
//   disabled?: boolean
// }

// const noop = () => {}

// const RootStyledButton = styled.button`
//   padding: 0px 20px;
//   height: 49px;
//   border-radius: 2px;
//   border: 2px solid #3d5567;
//   display: inline-flex;
//   background-color: ${(props) => (props.disabled ? 'red' : 'blue')};
// `

// const ButtonSpan = styled.span`
//   margin: auto;
//   font-size: 16px;
//   font-weight: bold;
//   text-align: center;
//   color: #fff;
//   text-transform: uppercase;
// `

// /*
//  * If you opt to do export default, you'll still need to have this
//  * export for the TsDocGen work properly (I struggled to find this out)
//  */
// export const Button = (props: Props) => {
//   const { children, onClick, disabled = false } = props

//   return (
//     <RootStyledButton disabled={disabled} onClick={!disabled ? onClick : noop}>
//       <ButtonSpan>{children}</ButtonSpan>
//     </RootStyledButton>
//   )
// }
