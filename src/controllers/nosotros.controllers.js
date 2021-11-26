const nosotrosCtrl = {};
const pool = require('../database');

nosotrosCtrl.getnosotros = async (req, res) => {
    const nosotros = await pool.query('SELECT * FROM NOSOTROS');
    res.json(nosotros);
};
nosotrosCtrl.createnosotros = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    const newnosotros = new nosotros({
        estado,
        horno,
        finicio,
        ffin
    });
    await newnosotros.save();
    res.json({ message: 'nosotros Registrada' })
};


nosotrosCtrl.updatenosotros = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await nosotros.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'nosotros Actualizada' })
};

nosotrosCtrl.deletenosotros = async (req, res) => {
    const nosotros = await nosotros.findByIdAndDelete(req.params.id);
    res.json({ message: 'nosotros Eliminada' })
};

module.exports = nosotrosCtrl;