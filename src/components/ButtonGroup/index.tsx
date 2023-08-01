// ButtonGroup.tsx
import { ReactNode } from 'react'
import { ButtonPrimary, ButtonSecondary } from 'components/Button'
import * as S from './styles'

interface ButtonGroupProps {
  primaryContent?: string
  primaryVariant?: 'contained' | 'outlined' | 'text'
  primarySize?: 'small' | 'medium' | 'large'
  primaryColor?: 'primary' | 'secondary'
  primaryDisabled?: boolean
  primaryEndIcon?: ReactNode

  secondaryContent?: string
  secondaryVariant?: 'contained' | 'outlined' | 'text'
  secondarySize?: 'small' | 'medium' | 'large'
  secondaryColor?: 'primary' | 'secondary'
  secondaryDisabled?: boolean
  secondaryEndIcon?: ReactNode
}

export const ButtonGroup = ({
  primaryContent,
  primaryVariant,
  primarySize,
  primaryColor,
  primaryDisabled,
  primaryEndIcon,
  secondaryContent,
  secondaryVariant,
  secondarySize,
  secondaryColor,
  secondaryDisabled,
  secondaryEndIcon,
  ...props
}: ButtonGroupProps) => {
  return (
    <S.BtnGroup>
      <ButtonPrimary href="/step-by-step/1" {...props} />
      <ButtonSecondary href="/learn-more" {...props} />
    </S.BtnGroup>
  )
}

export default ButtonGroup
