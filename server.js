const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cacheControl = require('express-cache-controller');
const path = require('path');
const app = express();

app.use(cacheControl({
    maxAge: 300,
}));
app.use(helmet());
app.use(compression());
app.use(express.static(`${__dirname}/www`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/www/index.html`));
});

app.listen(process.env.PORT || 8080);
