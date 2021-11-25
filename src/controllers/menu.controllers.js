const menuCtrl = {};
const pool = require('../database');

menuCtrl.getmenues = async (req, res) => {
    const menu = await pool.query('SELECT * FROM PLATO');
    res.json(menu);
};
menuCtrl.createmenu = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    const newCoccion = new menu({
        estado,
        horno,
        finicio,
        ffin
    });
    await newCoccion.save();
    res.json({ message: 'menu Registrada' })
};

menuCtrl.getcoccion = async (req, res) => {
    const menu = await menu.findById(req.params.id);
    res.json(menu)
};
menuCtrl.updatecoccion = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await menu.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'menu Actualizada' })
};

menuCtrl.deletecoccion = async (req, res) => {
    const menu = await menu.findByIdAndDelete(req.params.id);
    res.json({ message: 'menu Eliminada' })
};

module.exports = menuCtrl;