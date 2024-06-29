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