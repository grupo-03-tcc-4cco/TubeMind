'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  Container
} from '@mui/material'
import Link from 'next/link'
import { ButtonBack } from 'components/ButtonBack'
import Tooltip from '@mui/material/Tooltip'

export default function MultiActionAreaCard() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Tooltip title="Voltar para home">
        <Box sx={{ position: 'absolute', left: 530, top: 100 }}>
          <ButtonBack href="/" />
        </Box>
      </Tooltip>
      <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="/image/acessar-google-takeout.png"
            alt="Acessar Google Takeout"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              1 de 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <>
                Acesse o site do{' '}
                <Link href="https://takeout.google.com/">Google Takeout</Link>.
              </>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small" color="primary" variant="text" href="#" disabled>
            Voltar
          </Button>
          <Button size="small" color="primary" href="/step-by-step/2">
            próximo
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
