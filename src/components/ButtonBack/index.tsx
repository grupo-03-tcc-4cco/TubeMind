import { ReactNode } from 'react'
import { Back } from './styles'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface Props {
  size?: 'small' | 'medium' | 'large'
  icon?: ReactNode
  href: string
}

export const ButtonBack = ({ size, icon, href }: Props) => {
  return (
    <Link href={href} passHref>
      <Back size={size ?? 'large'}>{icon ?? <ArrowBackIcon />}</Back>
    </Link>
  )
}
