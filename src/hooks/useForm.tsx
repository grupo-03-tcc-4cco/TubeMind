import { Form } from "interfaces"
import { useCallback, useState } from "react"
import { FormService } from "services"


export const useForm = (): {httpStatusCode: number, create: any} => {
  const [tasks, setTasks] = useState<Form[]>([])
  const [httpStatusCode, setHttpStatusCode] = useState(0);

  const create = useCallback(async (form: Form, file: any) => {
    const { status, data } = await FormService.create(form, file)

    setHttpStatusCode(status);

    setTasks(data)

    return status;
  }, [])

  return {
    httpStatusCode,
    create
  }
}
