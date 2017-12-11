require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./logger');
const User = require('./models/User');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const requiresAuthMiddleware = require('./middleware/requiresAuth');
const { sendWelcomeEmail } = require('./emails/sendEmail');

app.use(morgan("combined", { stream: { write: message => logger.info(message) }}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}));

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
                sendWelcomeEmail(user.email)
                    .then(() => {
                        logger.info(`Sent welcome email to ${user.email}.`);
                    })
                    .catch((e) => {
                        logger.error(`Failed to send welcome email to ${user.email}.`, e);
                    });
                res.status(200);
            }

            res.send();
        });
    } else {
        res.status(400);
        res.send();
    }

});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if(email && password) {
        
        User.authenticate(email, password, function (err, user) {
             if(err && err.status) {
                 res.status(err.status);
             } else if(err) {
                 res.status(500);
             } else if(user) {
                 req.session.userId = user._id;
                 res.status(200);
             } else {
                 res.status(500);
             }

             res.send();
        });
        
    } else {
        res.status(400);
        res.send();
    }
});

app.post('/api/logout', function(req, res) {
    if (req.session) {
        req.session.destroy(function(err) {
            if(err) {
                res.status(500);
            } else {
                res.status(200);
                res.send();
            }
        });
    }
});

app.get('/api/secret', requiresAuthMiddleware, (req, res) => {
    res.send("Hello from API");
});

app.listen(8084, () => logger.info('API listening on port 8084!'));