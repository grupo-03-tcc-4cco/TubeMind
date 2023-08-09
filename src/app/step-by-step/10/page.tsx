"use client"
import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
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
        <Box sx={{ position: "absolute", left: 550, top: 100 }}>
          <ButtonBack href="/" />
        </Box>
      </Tooltip>
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5">
              10 de 10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Clique em “Criar exportação” no final da aba.
              <br />
              <br />
              Na próxima página, clique em &quot;Abrir no Google Drive&quot;.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            color="primary"
            variant="text"
            href="/step-by-step/9"
          >
            Voltar
          </Button>
          <Button size="small" color="primary" href="#">
            finalizar
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
