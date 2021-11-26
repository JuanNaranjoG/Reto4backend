const { Router } = require('express');
const router = Router();

const { getpersonal,
    createpersona,
    getpersona,
    updatepersona,
    deletepersona } = require('../controllers/personal.controllers');

router.route('/').get(getpersonal).post(createpersona);

module.exports = router;