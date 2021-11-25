const {Router} = require('express');
const router = Router();
const pool = require('../database');

/* const {getcocciones,
    createcoccion,
    getcoccion,
    updatecoccion,
    deletecoccion}= require('../controllers/coccion.controllers'); */

router.get('/', (req,res) => {
res.send('Hello word');
});

module.exports = router;