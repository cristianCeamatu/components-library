import * as React from 'react'

import styled, { css } from 'styled-components'
import { Palette } from '../../theme/palette'

export interface IStyles {
  type?: 'button' | 'submit'
  variant?: 'outlined' | 'contained'
  size?: 'largeInline' | 'normal' | 'large' | 'small'
  color?: keyof Palette
  invertOnHover?: boolean
  disabled?: boolean
}

export interface IProps extends IStyles {
  label: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  label = 'Apply',
  type = 'button',
  variant = 'contained',
  size = 'normal',
  color = 'primary',
  /** Inverts background color with font color on hover */
  invertOnHover,
  /**
   * Disables onClick
   *
   * @default false
   **/
  disabled = false,
  /** Callback to handle the click event  */
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

const StyledButton = styled.button<IStyles>`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme, color }) =>
    color ? theme.palette[color] : theme.palette.primary};
  border: none;
  border-radius: ${({ theme }) => theme.misc.borderRadius};
  font-size: ${({ theme }) => theme.typography.h3};
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.misc.shadows.normal};

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
      color: ${color ? theme.palette[color] : theme.palette.primary};
      outline: 2px solid ${color ? theme.palette[color] : theme.palette.primary};
    `};

  &:hover {
    ${({ invertOnHover, color, theme, variant }) =>
      invertOnHover &&
      css`
        font-weight: 700;
        background: transparent;
        color: ${color ? theme.palette[color] : theme.palette.primary};
        outline: 2px solid
          ${color ? theme.palette[color] : theme.palette.primary};
        ${variant === 'outlined' &&
        css`
          color: ${theme.palette.white};
          background: ${color ? theme.palette[color] : theme.palette.primary};
        `};
      `}
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
      box-shadow: ${theme.misc.shadows.danger};
      outline: 1px solid ${theme.palette.danger}88;
    `};
`
