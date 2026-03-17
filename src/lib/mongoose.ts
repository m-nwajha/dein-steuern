import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL!;

const cached = (global as any).mongoose ?? { conn: null, promise: null };
(global as any).mongoose = cached;

export async function connectDB() {
    if (cached.conn) return cached.conn;

    cached.promise ??= mongoose.connect(MONGODB_URL);
    cached.conn = await cached.promise;
    return cached.conn;
}