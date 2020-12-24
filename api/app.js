const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


const db = mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const port = process.env.PORT || 3000;

const postRouter = require('./controllers/postController');

app.use('/api', postRouter);

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});