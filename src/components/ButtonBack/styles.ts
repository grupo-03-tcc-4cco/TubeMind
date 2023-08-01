import { IconButton } from '@mui/material'
import { createTheme, styled } from '@mui/material/styles'

export const theme = createTheme({})

export const Back = styled(IconButton)({
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
