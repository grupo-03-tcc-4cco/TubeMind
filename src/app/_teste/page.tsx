"use client"
import { useState } from "react"
import axios from "axios"

const CreateUserPage = () => {
  const [name, setName] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newUser = {
      firstName: name,
      lastName: sobrenome,
      email,
      password
    }

    try {
      const response = await axios.post("http://localhost:8080/users", newUser) // Ajuste o caminho da API conforme necessário
      console.log("User created:", response.data)
      alert("usuário criado com sucesso")
      // Faça o tratamento necessário após a criação do usuário
    } catch (error: any) {
      alert(error.message)
      console.log(error.message)
      // Faça o tratamento necessário em caso de erro
    }
  }

  return (
    <div>
      <h1>Criar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Criar Usuário</button>
      </form>
    </div>
  )
}

export default CreateUserPage
