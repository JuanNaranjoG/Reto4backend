const { Router } = require('express');
const router = Router();

const { getnosotros,
    createnosotros,
    updatenosotros,
    deletenosotros } = require('../controllers/nosotros.controllers');

router.route('/').get(getnosotros).post(createnosotros);

module.exports = router;