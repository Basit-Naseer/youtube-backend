import mongoose from "mongoose";

const connectBD = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}`
    );
    console.log(
      `\n MongoBD connected !!! BD HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGOBD connection Failed", error);
    process.exit(1);
  }
};

export default connectBD;
