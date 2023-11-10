const InmuebleModel = require('../models/inmueble.model');

const getAllInmuebles = async (req, res) => {
    try{
        //const inmuebles = await InmuebleModel.find();
    res.json("GET ALL");
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const getInmuebleById = async (req, res) => {
    try{
        //const inmueble = await InmuebleModel.find();
    res.json("GET");
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const createInmueble = async (req, res) => {
    try{
        //const inmueble = await InmuebleModel.find();
    res.json("POST");
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const updateInmueble = async (req, res) => {
    try{
        //const inmueble = await InmuebleModel.find();
    res.json("PUT");
    }catch(error){
        res.json({ fatal: error.message });
    }
}

const deleteInmueble = async (req, res) => {
    try{
        //const inmueble = await InmuebleModel.find();
    res.json("DELETE");
    }catch(error){
        res.json({ fatal: error.message });
    }
}


module.exports = {getAllInmuebles, getInmuebleById, createInmueble, updateInmueble, deleteInmueble}