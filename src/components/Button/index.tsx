import { ReactNode } from 'react'
import * as S from './styles'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

interface Props {
  content?: string
  variant?: 'contained' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  endIcon?: ReactNode
  href: string
}

export const ButtonPrimary = ({
  content,
  variant,
  size,
  color,
  disabled,
  href
}: Props) => (
  <S.Buttons
    variant={variant ?? 'contained'}
    size={size}
    color={color}
    disabled={disabled}
    href={href}
  >
    {content ?? 'quero ajudar'}
  </S.Buttons>
)

export const ButtonSecondary = ({
  content,
  variant,
  size,
  color,
  disabled,
  endIcon,
  href
}: Props) => (
  <S.Buttons
    variant={variant ?? 'outlined'}
    size={size}
    color={color}
    disabled={disabled}
    endIcon={endIcon ?? <KeyboardArrowRightIcon />}
    href={href}
  >
    {content ?? 'saiba mais'}
  </S.Buttons>
)
