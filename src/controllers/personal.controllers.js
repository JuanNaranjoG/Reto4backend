const personaCtrl = {};
const pool = require('../database');

personaCtrl.getpersonal = async (req, res) => {
    const persona = await pool.query('SELECT * FROM EMPLEADO');
    res.json(persona);
};
personaCtrl.createpersona = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    const newpersona = new persona({
        estado,
        horno,
        finicio,
        ffin
    });
    await newpersona.save();
    res.json({ message: 'persona Registrada' })
};

personaCtrl.getpersona = async (req, res) => {
    const persona = await persona.findById(req.params.id);
    res.json(persona)
};
personaCtrl.updatepersona = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await persona.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'persona Actualizada' })
};

personaCtrl.deletepersona = async (req, res) => {
    const persona = await persona.findByIdAndDelete(req.params.id);
    res.json({ message: 'persona Eliminada' })
};

module.exports = personaCtrl;