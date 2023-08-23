import { Form } from "interfaces/Form"
import { Api } from "providers"

const getAll = () => Api.post<Form[]>("/file/upload")

const create = (form: Form, file: any) => {
  const formData = new FormData()

  formData.append(
    "user",
    JSON.stringify({
      email: "kaiquefigueiredo01@hotmail.com",
      idade: 22,
      sexo: "MASCULINO",
      escolaridade: "SUPERIOR_INCOMPLETO",
      profissao: "CIENTISTA_DA_COMPUTACAO",
      interesseEnum: ["FILMES_E_ANIMACAO", "AUTOMOVEIS_E_VEICULOS", "MUSICA"]
    })
  )

  formData.append("file", file)

  return Api.post("/file/upload", formData)
}

export const FormService = {
  getAll,
  create
}
