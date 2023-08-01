import { Typography as MuiTypography, TypographyProps } from '@mui/material'
import { FC, ReactNode } from 'react'

interface CustomTypographyProps extends Omit<TypographyProps, 'variant'> {
  variant: 'title' | 'subtitle' | 'paragraph'
  children: ReactNode
}

export const Typography: FC<CustomTypographyProps> = ({
  variant,
  children,
  ...props
}) => {
  let componentVariant: 'h1' | 'h4' | 'body1' = 'body1'

  switch (variant) {
    case 'title':
      componentVariant = 'h1'
      break
    case 'subtitle':
      componentVariant = 'h4'
      break
    case 'paragraph':
      componentVariant = 'body1'
      break
    default:
      break
  }

  return (
    <MuiTypography variant={componentVariant} {...props}>
      {children}
    </MuiTypography>
  )
}
