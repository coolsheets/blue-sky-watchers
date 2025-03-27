import express from 'express';
import superHeroRoutes from './routes/superHeroRoutes.js'
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/superheroes', superHeroRoutes);

// Test endpoints
// app.get('/burger', function (req, res) {
//     res.send('Ah welcome to our resturant, we have the best burgers in town! but I cant make any right now');
// })

// app.get('/fries', function (req, res) {
//     res.send('Ah welcome to our resturant, we have the best fries in town! but I cant make any right now');
// })


const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
})