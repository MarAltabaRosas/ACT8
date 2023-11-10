const{Schema, model} = require('mongoose');

const inmuebleSchema = new Schema({
    piso: String,
    letra: String,
    extension: Number,
    habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    email: String
}, {
    versionKey: false,
    timestamps: true,
});


module.exports = model('inmueble', inmuebleSchema, 'ACT8_Inmuebles');

