const { Router } = require('express');
const router = Router();

const { getmenues,
    createmenu,
    getmenu,
    updatemenu,
    deletemenu } = require('../controllers/menu.controllers');

router.route('/').get(getmenues).post(createmenu);

router.route('/:id').get(getmenu)
.put(updatemenu)
.delete(deletemenu);

module.exports = router;