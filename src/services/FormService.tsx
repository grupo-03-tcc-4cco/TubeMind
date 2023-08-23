import { Form } from "interfaces/Form"
import { Api } from "providers"

const create = (form: Form, file: any) => {
  const formData = new FormData()

  formData.append('user', new Blob([JSON.stringify({
    email: form.email,
    idade: form.idade,
    sexo: form.sexo,
    escolaridade: form.escolaridade,
    profissao: form.profissao,
    interesses: form.interesseEnum
  })], {
      type: "application/json"
  }));

  formData.append("file", file)

  return Api.post("/file/upload", formData)
}

export const FormService = {
  create
}
