'use client'
import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import content from '../../../public/content'
import { Typography } from 'components/Typography'
import ButtonGroup from 'components/ButtonGroup'
import { createTheme } from '@mui/material'

const theme = createTheme()

export default function HomePage() {
  return (
    <Container>
      <Grid
        container
        sx={{
          height: '100vh',
          [theme.breakpoints.down('md')]: {
            height: '100%'
          }
        }}
      >
        <Grid
          item
          xs={0}
          md={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
              display: 'none'
            }
          }}
        >
          <Image
            priority
            src={content.homePage.logoUrl}
            alt="YouTube logo"
            width={350}
            height={350}
            quality={100}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'grid',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            variant="title"
            mb={2}
            fontSize="4.9rem"
            fontWeight="bold"
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '4.3rem',
                marginTop: theme.spacing(4)
              }
            }}
          >
            {content.homePage.title}
          </Typography>
          <Typography
            variant="paragraph"
            mb={4}
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '1.1rem'
              }
            }}
          >
            {content.homePage.subtitle}
          </Typography>
          <ButtonGroup />
        </Grid>
      </Grid>
    </Container>
  )
}
