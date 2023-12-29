const express = require('express');

const app = express();

const port = 8000;

const path = require('path');

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.use('/', require('./routes/userRoutes'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})