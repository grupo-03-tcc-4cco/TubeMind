"use client"
import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  Container,
  Tooltip
} from "@mui/material"
import { ButtonBack } from "components/ButtonBack"

export default function MultiActionAreaCard() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirecion: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <Tooltip title="Voltar para home">
        <Box sx={{ position: "absolute", left: 500, top: 50 }}>
          <ButtonBack href="/" />
        </Box>
      </Tooltip>
      <Card sx={{ maxWidth: 700 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="/image/todos-os-dados.png"
            alt="Após logar em sua conta Google, selecione Desmarcar tudo em Criar uma exportação"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              6 de 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No card do Youtube, clique em &quot;Todos os dados do Youtube
              incluídos&quot;.
              <br />
              <br /> Na aba que se abrirá, selecione <b>apenas</b> a opção
              &quot;histórico&quot;.
              <br />
              <br />
              Clique em &quot;OK&quot; no final do aba.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            color="primary"
            variant="text"
            href="/step-by-step/5"
          >
            Voltar
          </Button>
          <Button size="small" color="primary" href="/step-by-step/7">
            próximo
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
