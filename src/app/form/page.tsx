"use client"
import * as React from "react"
import { useEffect, useState } from "react"
import content from "../../../public/content"
import {
  Autocomplete,
  Checkbox,
  TextField,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
  Alert
} from "@mui/material"
import { Typography } from "../../components/Typography"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import { useForm } from "hooks"

export interface FormValues {
  email: string
  age: number
  gender: string
  education: string
  interests: string[]
  profession: string
}

export interface FormEntity {
  email: string
  age: number
  gender: String | undefined
  education: String | undefined
  interests: string[]
  profession: String | undefined
}

const Form = () => {
  const { create } = useForm()

  const [values, setValues] = useState<FormValues>({
    email: "",
    age: 0,
    gender: "",
    education: "",
    interests: [],
    profession: ""
  })

  const [formEmpty, setFormEmpty] = useState(false)
  const [severity, setSeverity] = useState("success")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
  const checkedIcon = <CheckBoxIcon fontSize="small" />

  const [file, setFile] = useState<File | null>(null)

  const handleChange = (event: any) => {
    const { name, value } = event.target

    if (name === "interests") {
      setValues({ ...values, [name]: event.target.value.split(",") })
    } else {
      setValues({ ...values, [name]: value })
    }
  }

  const handleInterestsChange = (
    event: React.ChangeEvent<{}>,
    newValue: string[] | null
  ) => {
    if (newValue !== null) {
      setValues({ ...values, interests: newValue })
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !values.email ||
      values.age === 0 ||
      !values.gender ||
      !values.education ||
      !values.profession ||
      values.interests.length === 0 ||
      !file
    ) {
      setFormEmpty(true)
      return
    }

    uploadFile(file)

    try {
      setLoading(true) // Ativa o Backdrop de carregamento
      const response: number = await create(
        {
          idade: values.age,
          escolaridade: values.education,
          email: values.email,
          interesseEnum: values.interests,
          profissao: values.profession,
          sexo: values.gender,
          file: null
        },
        file
      )
      if (response == 200) {
        setMessage("Formulário enviado com sucesso!")
        setSeverity("success")
        setOpen(true)
      }
    } catch (error) {
      setSeverity("error")
      setMessage("Erro no envio do formulário")
      setOpen(true)
    } finally {
      setLoading(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    setFile(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  const handleDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file)
    }
  }

  const uploadFile = (file: File | null) => {
    if (file) {
      // Verifique se um arquivo foi selecionado antes de ler
      const reader = new FileReader()
      reader.onload = (event) => {
        const fileContent = event.target?.result?.toString()
        // Agora você pode usar o fileContent para o que precisar
        // uploadToS3(fileContent, file?.name);
      }
      reader.readAsText(file, "utf-8")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          mt={5}
          xs={10}
          md={6}
          sx={{
            justifyContent: "center"
          }}
        >
          <Typography variant="subtitle" mb={1}>
            Formulário
          </Typography>
          <Typography variant="paragraph" mb={4}>
            Preencha o formulário com seus dados e submeta o arquivo da extração
          </Typography>
          <TextField
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            label="E-mail"
            sx={{ width: "100%", mb: 3 }}
          />

          <TextField
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={values.age}
            inputProps={{ inputMode: "numeric" }}
            label="Idade"
            sx={{
              width: { xs: "100%", md: "49%" },
              mb: 2,
              mr: { xs: 0, md: 1.9 }
            }}
          />

          <FormControl sx={{ width: { xs: "100%", md: "49%" }, mb: 3 }}>
            <InputLabel id="input-gender">Sexo</InputLabel>
            <Select
              labelId="input-gender"
              id="gender"
              value={values.gender}
              name="gender"
              onChange={handleChange}
            >
              {content.form.genderList.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={{ width: { xs: "100%", md: "49%" }, mb: 3, mr: 1.9 }}
          >
            <InputLabel id="input-education">Nível de escolaridade</InputLabel>
            <Select
              labelId="input-education"
              id="education"
              value={values.education}
              name="education"
              onChange={handleChange}
            >
              {content.form.educationalLevel.map((education) => (
                <MenuItem key={education} value={education}>
                  {education}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: { xs: "100%", md: "49%" }, mb: 3 }}>
            <InputLabel id="input-profession">Profissão</InputLabel>
            <Select
              labelId="input-profession"
              id="profession"
              value={values.profession}
              name="profession"
              onChange={handleChange}
            >
              {content.form.professionsList.map((profession) => (
                <MenuItem key={profession} value={profession}>
                  {profession}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            multiple
            id="interests-checkboxes"
            options={content.form.interestsList}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            onChange={(event, newValue) =>
              handleInterestsChange(event, newValue)
            }
            renderOption={(props, option, { selected }) => (
              <li key={option} {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            style={{ width: "100%", marginBottom: 20 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Interesses"
                placeholder="Selecione"
              />
            )}
          />

          <Typography variant="paragraph" mb={1}>
            Arraste o arquivo{" "}
            <strong>
              <i>historico-de-visualizacao.json</i>
            </strong>{" "}
            para a área abaixo
          </Typography>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onChange={handleFileChange}
            style={{
              width: "100%",
              height: "180px",
              border: "2px dashed gray",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px"
            }}
          />
          {file && (
            <div>
              <p>Arquivo selecionado: {file.name}</p>
              <p>Tamanho: {file.size} bytes</p>
            </div>
          )}
          <Button variant="contained" type="submit" sx={{ my: 3 }}>
            Enviar
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        message={message}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
      >
        {severity === "success" ? (
          <Alert severity="success">{message}</Alert>
        ) : (
          <Alert severity="error">{message}</Alert>
        )}
      </Snackbar>
      <Snackbar
        open={formEmpty}
        onClose={() => setFormEmpty(false)}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
      >
        <Alert severity="info">
          Por favor, preencha <strong>todos</strong> os campos do formulário.
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading} // Alterado para 'loading' em vez de 'open'
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  )
}

export default Form
