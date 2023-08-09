const dotenv = require("dotenv")
const connectToDatabase = require("./src/config/dbConnection")

dotenv.config()

connectToDatabase()

require("./modules/express")
