const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        // res.send("Hello");
        res.render('home')
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;