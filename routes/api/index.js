const router = require('express').Router();

const home = require('./home');
const project = require('./project')

router.use('/', home)

router.use('/project', project)

module.exports = router;
