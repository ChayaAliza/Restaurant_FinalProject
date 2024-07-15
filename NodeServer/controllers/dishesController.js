const express = require('express');
const router = express.Router(); 

router.use(express.json());

const model = require('../models/dishesModel');

async function getAll() {
    try {
        return await model.getDishes();
    } catch (err) {
        throw err;
    }
}

module.exports = { getAll };
