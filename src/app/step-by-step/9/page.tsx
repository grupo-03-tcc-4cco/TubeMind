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
        <Box sx={{ position: "absolute", left: 400, top: 50 }}>
          <ButtonBack href="/" />
        </Box>
      </Tooltip>
      <Card sx={{ maxWidth: 700 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="/image/frequencia.png"
            alt="Após logar em sua conta Google, selecione Desmarcar tudo em Criar uma exportação"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              9 de 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Em &quot;Frequência&quot; marque &quot;Exportar uma vez&quot;.{" "}
              <br /> <br />
              Em &quot;Tipo de arquivo&quot; selecione &quot;.zip&quot; e em
              &quot;Tamanho do arquivo&quot; selecione &quot;1 GB&quot;. <br />{" "}
              <br />
              Em seguida, clique em &quot;Criar exportação&quot; no final da
              aba.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            color="primary"
            variant="text"
            href="/step-by-step/8"
          >
            Voltar
          </Button>
          <Button size="small" color="primary" href="/step-by-step/10">
            próximo
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
