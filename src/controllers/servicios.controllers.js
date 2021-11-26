const servicioCtrl = {};
const pool = require('../database');

servicioCtrl.getservicios = async (req, res) => {
    const servicio = await pool.query('SELECT * FROM SERVICIO');
    res.json(servicio);
};
servicioCtrl.createservicio = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    const newCoccion = new servicio({
        estado,
        horno,
        finicio,
        ffin
    });
    await newCoccion.save();
    res.json({ message: 'servicio Registrada' })
};

servicioCtrl.getcoccion = async (req, res) => {
    const servicio = await servicio.findById(req.params.id);
    res.json(servicio)
};
servicioCtrl.updatecoccion = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await servicio.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'servicio Actualizada' })
};

servicioCtrl.deletecoccion = async (req, res) => {
    const servicio = await servicio.findByIdAndDelete(req.params.id);
    res.json({ message: 'servicio Eliminada' })
};

module.exports = servicioCtrl;