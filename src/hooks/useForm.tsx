import { Form } from "interfaces"
import { useCallback, useState } from "react"
import { FormService } from "services"

export const useForm = () => {
  const [tasks, setTasks] = useState<Form[]>([])

  const create = useCallback(async (form: Form, file: any) => {
    const { status, data } = await FormService.create(form, file)

    if (status != 200) throw new Error()

    setTasks(data)
  }, [])

  return {
    tasks,
    create
  }
}
