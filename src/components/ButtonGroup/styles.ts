"use client"
import Box from '@mui/material/Box'
import { createTheme, styled } from '@mui/material/styles'

export const theme = createTheme({})

export const BtnGroup = styled(Box)({
  width: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    justifySelf: 'center',
    marginBottom: theme.spacing(4)
  }
})
