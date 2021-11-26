const menuCtrl = {};
const pool = require('../database');

menuCtrl.getmenues = async (req, res) => {
    const menu = await pool.query('SELECT * FROM PLATO');
    res.json(menu);
};
menuCtrl.createmenu = async (req, res) => {
    const { imagen, nombre, descripcion, precio } = req.query
    console.log(req.query);
    const menu = await pool.query(`INSERT INTO PLATO VALUES ( NULL,'${imagen}', '${nombre}', '${descripcion}', ${precio} )`);
    res.json({ message: 'Plato Registrado' })
};

menuCtrl.getmenu = async (req, res) => {
    const menu = await menu.findById(req.params.id);
    res.json(menu)
};
menuCtrl.updatemenu = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await menu.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'menu Actualizada' })
};

menuCtrl.deletemenu = async (req, res) => {
    const { id } = req.query
    const menu = await pool.query(`DELETE FROM PLATO WHERE PLATO.id = ${id}`);
    res.json({ message: 'Plato Eliminado' })
};

module.exports = menuCtrl;