import express from 'express';

import superHeroRoutes from './routes/superHeroRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/superheroes', superHeroRoutes);

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})