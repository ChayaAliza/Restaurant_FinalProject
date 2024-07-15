const express = require('express');
const router = express.Router();

const { getAll } = require('../controllers/dishesController'); 

router.use(express.json());

router.get('/', async (req, res) => {
    res.send(await getAll());
});

module.exports = router;
