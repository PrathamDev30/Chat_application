const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const URI ="mongodb+srv://prathameshbothee:2zVBtqs6HEzZu0aI@cluster0.axdbzo9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

