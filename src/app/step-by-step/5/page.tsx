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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <Tooltip title="Voltar para home">
        <Box sx={{ position: "absolute", left: 530, top: 50 }}>
          <ButtonBack href="/" />
        </Box>
      </Tooltip>
      <Card sx={{ maxWidth: 750 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="/image/selecione-json.png"
            alt="Após logar em sua conta Google, selecione Desmarcar tudo em Criar uma exportação"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              5 de 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Na aba que se abrirá, em &quot;Histórico&quot;, troque a opção
              &quot;HTML&quot; para &quot;JSON&quot;.
              <br />
              Após essa troca, clique em “OK” no final do aba.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            color="primary"
            variant="text"
            href="/step-by-step/4"
          >
            Voltar
          </Button>
          <Button size="small" color="primary" href="/step-by-step/6">
            próximo
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
