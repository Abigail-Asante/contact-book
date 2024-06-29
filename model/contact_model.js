import { Schema, model } from "mongoose";

// create a schema for contact
const contactSchema = new Schema({
    firstName: {type: String},
    middleName: {type: String},
    lastName: {type: String},
    phoneNumber: {type: Number},
    createAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

export const contactModel = model('contact', contactSchema)