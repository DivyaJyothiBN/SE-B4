const express = require('express');
const ValidateRouter = express.Router();
const doesUSNExist = require('./logi.js');
/**
 * Router to check if the USN has already registered.
 * Request parameters => USN
 * Response parameters => { exist : true/false }
 */
ValidateRouter.post('/routes/index1', (req, res, next) => {
    doesUSNExist(req.query.usn,req.query.pass)
    .then(exist => {
        
        var ob=({usn:res.usn});
        res.send(ob).status(200);
    })
    .catch(err => console.log(err));
});
module.exports = ValidateRouter; 