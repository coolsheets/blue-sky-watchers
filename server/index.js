import express from 'express';

const app = express();
const PORT = 3000;
// console.log("Welcome to mars, earthings!");

app.get('/burger', function (req, res) {
    res.send('Ah welcome to our resturant, we have the best burgers in town! but I cant make any right now');
})

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
})