"use client"
import { Box } from '@mui/material'
import { createTheme, styled } from '@mui/material/styles'

export const theme = createTheme({})

export const AvatarGroup = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4)
  }
})
