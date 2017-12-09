const express = require('express');
const app = express();
const logger = require('./logger');
const User = require('./models/User');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan("combined", { stream: { write: message => logger.info(message) }}));
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
    const { email, password } = req.body;

    if(email && password) {
        User.create({
            email,
            password
        }, function(err, user) {
            if(err) {
                logger.error('Error creating user.', err);
                if(err.code === 11000) {
                    res.status(409);
                } else {
                    res.status(500);
                }
            } else {
                logger.info(`Created user with email ${user.email}.`);
                res.status(200);
            }

            res.send();
        });
    } else {
        res.status(400);
        res.send();
    }


});

app.get('/api/*', (req, res) => {
    res.send("Hello from API");
});

app.listen(8084, () => console.log('API listening on port 8084!'));