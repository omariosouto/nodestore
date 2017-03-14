const express = require('express'),
	  router    = express.Router();

const mongoose                  = require('../db/mongoose');
const StormtrooperModel         = require('../models/StormtroopersModel')(mongoose);
const StormtrooperController    = require('../controllers/StormtroopersController')(StormtrooperModel);

const passport = require('passport');


router.get('/', StormtrooperController.getAll.bind(StormtrooperController));
router.get('/:_id', StormtrooperController.getById.bind(StormtrooperController));
router.post('/', StormtrooperController.create.bind(StormtrooperController));
router.put('/:_id', StormtrooperController.update.bind(StormtrooperController));
router.delete('/:_id', StormtrooperController.remove.bind(StormtrooperController));

module.exports = router;
