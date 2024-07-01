import { contactModel } from "../model/contact_model.js";


export const addContact = async (req, res, next) => {
    try {
        console.log('request', req.body);
        const addData = await(contactModel.create(req.body));
        res.status(200).send(addData)
    } catch (error) {
        next(error)
    
    }
};

export const getOneContact = async(req, res) => {
    try {
        console.log('request', req.body);
        const getContactId = await(contactModel.findById(req.params.id));
        res.status(200).send(getContactId)
    } catch (error) {
        console.log(error)
    
    }
};

export const getAllContact = async( req, res ) => {
    try {
        const allContacts = await contactModel.find();
        res.json(allContacts)
        // res.status(200).send(allContacts)
    } catch (error) {
        
    }
};

// update Contact
export const updateContact = async(req, res) => {
    try {
        const newContact = await(contactModel.findByIdAndUpdate(req.params.id, req.body));
        res.status(200).send(newContact)
    } catch (error) {
        console.log(error)
    
    }
};

// Delete contact
export const deleteContact = async(req, res) => {
    try {
        const removeContact = await(contactModel.findByIdAndDelete(req.params.id, req.body));
        res.status(200).send(removeContact)
    } catch (error) {
        console.log(error)
    
    }
};