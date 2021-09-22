import cors from 'cors';
import path from 'path';
import express from 'express';
import { success, error } from 'consola';

import { PORT } from './config';

// import Routes
import imagesRoutes from './routes/images';

// Initialize the express application
const app = express();

// Inject the middlewares to our app Object
app.use(cors());
app.use(express.json());

// Injecting routes in main app
app.use('/api/images', imagesRoutes);


// Setting up the express static directory
app.use(express.static(path.join(__dirname, './public')));

// Starting Application function
const startApp = () => {
    app.listen(PORT, () => success({ badge: true, message: `Server started on port ${PORT}` }));
};

startApp();
