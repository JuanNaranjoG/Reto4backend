const {Router} = require('express');
const router = Router();

const { getservicios,
    createservicio,
    getservicio,
    updateservicio,
    deleteservicio } = require('../controllers/servicios.controllers');

router.route('/').get(getservicios).post(createservicio);

module.exports = router;