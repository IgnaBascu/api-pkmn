const Pkmn = require('../models/pkmn');

const router = require('express').Router(); // Importamos el módulo Router de express

// Obtener todos los pkmns

router.get('/all', async (req, res) => {
    const pokemones = await Pkmn.findAll();
    res.json(pokemones);
});

// Obtener solo 1 pkmn 

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const pokemon = await Pkmn.findByPk(id);

    res.json(pokemon);
});

// Crear pkmn (POST)

router.post('/', async (req, res) => {
    const { name, type } = req.body;

    if (!name || !type ) {
        res.status(400).json({
            msg: 'Falta información del pokemón',
        });
    }

    const pokemon = await Pkmn.create({name,type});

    res.json(pokemon);    
});

router.get('/', (req, res) => {    
    res.json({
        msg: 'Index Pkmn General',
    });
});


module.exports = router; // Exportamos el módulo Router de express