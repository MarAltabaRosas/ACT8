const { default: mongoose } = require('mongoose');
const InmuebleModel = require('../models/inmueble.model')

const checkInmuebleId = async (req, res, next) => {

    const {inmuebleId} = req.params;

    if (!inmuebleId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.json({fatal: 'El id introducido no es correcto'});
    }

    try {
        const inmueble = await InmuebleModel.findById(inmuebleId);
        if (!inmueble){
            return res.json({fatal: 'El inmueble no existe'});
        }
        next();
    }catch (error) {
        res.json({fatal: error.message});
    }
}

const checkEmptyDB = async (req, res, next) => {
    
    try {
        const inmueble = await InmuebleModel.find();
        if (inmueble.length == 0){
            return res.json({fatal: 'No hay inmuebles registrados'});
        }
        next();
    }catch (error) {
        res.json({fatal: error.message});
    }
}

module.exports = {checkInmuebleId, checkEmptyDB}

