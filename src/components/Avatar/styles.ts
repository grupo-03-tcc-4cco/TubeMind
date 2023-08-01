import { styled } from '@mui/material/styles'
import { Avatar as MuiAvatar, Box } from '@mui/material'

export const Avatar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
})

export const Circle = styled(MuiAvatar)({
  width: 150,
  height: 150,
  fontSize: '50px'
})

export const Icons = styled(Box)({
  display: 'center',
  justifyContent: 'center'
})
