import mongoose, { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    service: { type: String },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
}, { timestamps: true });

export const Message = models.Message ?? model('Message', MessageSchema);