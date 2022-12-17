const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    //exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
