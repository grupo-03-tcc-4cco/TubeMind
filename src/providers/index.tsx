import axios from "axios"

export const Api = axios.create({
  baseURL:
    "http://kaique-teste-deploy-tubemind-env.eba-huqvy4hx.us-east-1.elasticbeanstalk.com/"
})
