const router = require('express').Router();

const InmueblesController = require('../../controllers/inmuebles.controller');

router.get('/', InmueblesController.getAllInmuebles);
router.get('/:inmuebleId', InmueblesController.getInmuebleById);
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', InmueblesController.updateInmueble);
router.delete('/:inmuebleId', InmueblesController.deleteInmueble);



module.exports = router;