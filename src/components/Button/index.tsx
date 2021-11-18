import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'huge'
  bg?:
    | 'normal'
    | 'transparent'
    | 'gray'
    | 'info'
    | 'success'
    | 'error'
    | 'warning'
  border?: 'info' | 'success' | 'error' | 'warning'
  fullWidth?: boolean
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    iconPosition = 'left',
    size = 'medium',
    fullWidth = false,
    bg = 'normal',
    border,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    iconPosition={iconPosition}
    bg={bg}
    border={border}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && children}
  </S.Wrapper>
)

export default forwardRef(Button)
