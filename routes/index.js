const express = require('express'),
	  router  = express.Router();

router.get('/', (req, res) => {
	res.status(201);
	res.json({
		'name': 'Mario Souto',
		'email': 'soutomarios@gmail.com'
	});
});

// Stormtroppers
router.use('/stormtroopers', require('./stormtroopers'));

module.exports = router;