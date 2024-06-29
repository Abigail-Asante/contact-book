import { Router } from "express";
import { addContact, getOneContact } from "../controller/contact_controller.js";

const contactRoute = Router();

contactRoute.post('/contact', addContact);
contactRoute.get('/', getOneContact );





export default contactRoute;
