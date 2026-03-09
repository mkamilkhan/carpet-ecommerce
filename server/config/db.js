const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async (retryCount = 0) => {
    const maxRetries = 5;

    if (isConnected) return;

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        isConnected = true;

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

        // If connection drops
        mongoose.connection.on("disconnected", () => {
            console.log("⚠ MongoDB Disconnected. Reconnecting...");
            isConnected = false;
            connectDB();
        });

    } catch (error) {
        console.error(
            `❌ MongoDB Connection Error (Attempt ${retryCount + 1}/${maxRetries})`
        );
        console.error(error.message);

        if (retryCount < maxRetries) {
            console.log("🔄 Retrying in 5 seconds...");
            setTimeout(() => connectDB(retryCount + 1), 5000);
        } else {
            console.error("🚨 Max retries reached.");
            process.exit(1); // exit so nodemon restarts cleanly
        }
    }
};

module.exports = connectDB;