'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  Tooltip
} from '@mui/material'
import { ButtonBack } from 'components/ButtonBack'

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
            image="/image/desmarcar-tudo.png"
            alt="Após logar em sua conta Google, selecione Desmarcar tudo em Criar uma exportação"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              2 de 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Logue em sua conta Google <br />
              Em &quot;Criar uma exportação&quot; selecione &quot;Desmarcar
              tudo&quot;.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size="small"
            color="primary"
            variant="text"
            href="/step-by-step/1"
          >
            Voltar
          </Button>
          <Button size="small" color="primary" href="/step-by-step/3">
            próximo
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
