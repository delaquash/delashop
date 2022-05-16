const router= require('express').Router();

// GET Request
// Url path

router.get('/usertest', (req, res) => {
    res.send('User testing')
})

router.post('/userposttest', (req, res)=> {
    const data = req.body.data;
    console.log(data);
})

module.exports = router;