import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

//checking all routes in Routes.js
app.get( '*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('listening port 3000');
});