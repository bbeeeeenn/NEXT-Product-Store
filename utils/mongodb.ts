import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
   throw new Error("Please define MONGO_URI environment variable inside .env");
}

async function dbConnect() {
   if (mongoose.connection.readyState === 1) {
      // console.log("Database is already connected.");
      return;
   }

   try {
      await mongoose.connect(MONGO_URI!, { dbName: "products" });
      // console.log("Connected to database.");
   } catch (error) {
      console.log(error);
   }
}

export default dbConnect;
