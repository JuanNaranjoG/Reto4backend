const comentariosCtrl = {};
const pool = require('../database');

comentariosCtrl.getcomentarios = async (req, res) => {
    const comentario = await pool.query('SELECT * FROM COMENTARIO');
    res.json(comentario);
};
comentariosCtrl.createcomentario = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    const newcomentario = new comentario({
        estado,
        horno,
        finicio,
        ffin
    });
    await newcomentario.save();
    res.json({ message: 'comentario Registrada' })
};

comentariosCtrl.getcomentario = async (req, res) => {
    const comentario = await comentario.findById(req.params.id);
    res.json(comentario)
};
comentariosCtrl.updatecomentario = async (req, res) => {
    const { estado, horno, finicio, ffin } = req.body;
    await comentario.findByIdAndUpdate({_id: req.params.id}, {
        estado,
        horno,
        finicio,
        ffin
    });
    res.json({ message: 'comentario Actualizada' })
};

comentariosCtrl.deletecomentario = async (req, res) => {
    const { id } = req.query
    const comentario = await pool.query(`DELETE FROM COMENTARIO WHERE COMENTARIO.id = ${id}`);
    res.json({ message: 'comentario Eliminado' })
};

module.exports = comentariosCtrl;