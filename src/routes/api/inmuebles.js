const router = require('express').Router();

const InmueblesController = require('../../controllers/inmuebles.controller');
const { checkInmuebleId, checkEmptyDB } = require('../../middlewares/inmuebles.middleware');

router.get('/',checkEmptyDB, InmueblesController.getAllInmuebles);
router.get('/:inmuebleId', checkInmuebleId, InmueblesController.getInmuebleById);
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:inmuebleId', checkInmuebleId, InmueblesController.deleteInmueble);



module.exports = router;