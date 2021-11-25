const { Router } = require('express');
const router = Router();

const { getmenues,
    createmenu,
    getmenu,
    updatemenu,
    deletemenu } = require('../controllers/menu.controllers');

router.route('/').get(getmenues).post(createmenu);

module.exports = router;