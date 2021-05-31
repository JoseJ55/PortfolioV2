const router = require('express').Router();

router.get('/first-project', (req, res) => {
    try {
        // res.send("first");
        res.render("project")
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/second-project', (req, res) => {
    try {
        res.send("second");
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/third-project', (req, res) => {
    try {
        res.send("third");
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;