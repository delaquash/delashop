const router= require('express').Router();
const { verifyToken } = require('./verifyToken');


// GET Request
// Url path

router.put('/:id',verifyToken, (req, res) => {
    
})



module.exports = router;