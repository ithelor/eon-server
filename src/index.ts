import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import apiRouter from 'routes';
import { CLIENT_URL, MONGO_URI, PORT } from 'constant/env';

const app = express();

app.use(cors({ origin: CLIENT_URL }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter);

try {
    await connect(MONGO_URI!);

    app.listen(PORT, () => console.log(`App is running at ${PORT}...`));
} catch (error) {
    console.log(error);
}

export default app;
