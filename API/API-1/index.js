import express from 'express';
import router from './routes/myRoute.js';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './Database/database.js';
import cors from 'cors';
import the_product from './models/the_product.js';


const app = express();
const port = process.env.PORT || 34545;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));



// routes start frome here
app.use("/api", router);


const server = async () => {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
server();