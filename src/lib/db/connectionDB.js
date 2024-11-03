import mongoose from "mongoose";

export async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGOBD_URI);
        console.log("Database connected successfully:", {
            host: connection.connection.host,
            name: connection.connection.name,
            port: connection.connection.port
        });
    } catch (error) {
        console.error("Error in DB Connection:", error.message);
    }
}
