import express from 'express';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import apiRouter from 'routes';
import { CLIENT_URL, MONGO_URI, PORT } from 'constant/env';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL }));
app.use('/api', apiRouter);

try {
    await connect(MONGO_URI!);

    app.listen(PORT, () => console.log(`App is running at ${PORT}...`));
} catch (error) {
    console.log(error);
}

export default app;
