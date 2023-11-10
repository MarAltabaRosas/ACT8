const InmuebleModel = require('../models/inmueble.model');

const getAllInmuebles = async (req, res) => {
    try{
        const inmuebles = await InmuebleModel.find();
        res.json(inmuebles);
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const getInmuebleById = async (req, res) => {
    try{
        const {inmuebleId} = req.params;
        const inmueble = await InmuebleModel.findById(inmuebleId);
        res.json(inmueble);
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const createInmueble = async (req, res) => {
    try{
        const inmueble = await InmuebleModel.create(req.body);
        res.json(inmueble);
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const updateInmueble = async (req, res) => {
    try{
        const {inmuebleId} = req.params;
        const inmueble = await InmuebleModel.findByIdAndUpdate(inmuebleId, req.body, {new:true});
        res.json(inmueble);
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const deleteInmueble = async (req, res) => {
    try{
        const {inmuebleId} = req.params;
        const inmueble = await InmuebleModel.findByIdAndDelete(inmuebleId);
        res.json(inmueble);
    }catch(error){
        res.json({ fatal: error.message });
    }
}


module.exports = {getAllInmuebles, getInmuebleById, createInmueble, updateInmueble, deleteInmueble}