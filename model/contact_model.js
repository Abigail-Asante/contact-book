import { Schema, model } from "mongoose";

// create a schema for contact
const contactSchema = new Schema({
    firstName: {type: String, require: true},
    middleName: {type: String},
    lastName: {type: String, require: true},
    phoneNumber: {type: Number, require: true},
    createAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

export const contactModel = model('contact', contactSchema)