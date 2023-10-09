const router = require('express').Router();

router.get('/homepage', async (req, res) => {
        res.render('homepage', {
            logged_in: req.session.logged_in,
        });
});

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/homepage");
        return;
    }
    res.render("signup");
});

// Render Login
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/homepage");
        return;
    }
    res.render("login");
});

module.exports = router;