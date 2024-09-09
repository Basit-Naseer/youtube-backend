import mongoose from "mongoose";
import { BD_NAME } from "../constant.js";

const connectBD = async () => {
try {
  const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/ ${BD_NAME}`)
    console.log(`\n MongoBD connected !!! BD HOST ${connectionInstance.connection.host}`)

} catch (error) {
    console.log("MONGOBD connection Failed", error)
    process.exit(1)
}
}

export default connectBD;