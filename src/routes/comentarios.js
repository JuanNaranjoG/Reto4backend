const {Router} = require('express');
const router = Router();


const { getcomentarios,
    createcomentario,
    deletecomentario } = require('../controllers/comentarios.controllers');

router.route('/').get(getcomentarios).post(createcomentario);

router.route('/:id').delete(deletecomentario);

module.exports = router;