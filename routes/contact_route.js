import { Router } from "express";
import { addContact, deleteContact, getAllContact, getOneContact, updateContact } from "../controller/contact_controller.js";

const contactRoute = Router();

contactRoute.post('/contact', addContact);
contactRoute.get('/:id', getOneContact );
contactRoute.get('/contact', getAllContact);
contactRoute.patch('/contact/:id', updateContact);
contactRoute.delete('/contact/:id', deleteContact);





export default contactRoute;
