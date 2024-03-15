import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
const app = express();
app.use(bodyParser.json)
app.listen(8082, async () => {
    console.log('Server is running at port 8084.')
    await mongoose.connect('mongodb://127.0.0.1/urlShortener');
    console.log('Connected to mongodb.')
})