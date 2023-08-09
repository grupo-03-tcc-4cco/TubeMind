const express = require("express")
const cors = require("cors")
const UserModel = require("../src/models/user.module")

const app = express()
const router = express.Router()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`)
  console.log(`Content Type: ${req.headers["content-type"]}`)
  console.log(`Data: ${new Date()}`)
  next()
})

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndRemove(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.post("/teste", async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.post("/upload", (req, res) => {
  if (!req.file) {
    return res.status(400).send("Nenhum arquivo foi enviado.")
  }

  console.log("Arquivo enviado para o S3:", req.file.location)
  return res.status(200).send(req.file.location) // Retorna a URL do arquivo no S3
})

const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`))
