import dotenv from 'dotenv'
import connectBD from "./db/index.js";

dotenv.config({
  path: './env'
})

connectBD()
