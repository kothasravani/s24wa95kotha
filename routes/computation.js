var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // Check if x value is provided in the query parameters
    let x = req.query.x;

    // If x is not provided, generate a random value for x
    if (!x) {
        x = Math.random() * 100;
    }

    // Generate a random value for y
    let y = Math.random() * 100;

    // Apply Math.atan2() to calculate the angle in radians
    let result = Math.atan2(x, y);

    // Construct the response string
    let response = `Math.atan2 applied to (${x}, ${y}) is ${result}`;

    // Send the response
    res.send(response);
});
module.exports = router;
