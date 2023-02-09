import dotenvFlow from 'dotenv-flow';
import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import apiRouter from 'routes';

dotenvFlow.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use('/api', apiRouter);

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI!;

try {
    await connect(MONGO_URI);

    app.listen(PORT, () => console.log(`App is running at ${PORT}...`));
} catch (error) {
    console.log(error);
}

export default app;
