import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./todos/router.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(router)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`
    ====================
    RUN PORT : ${PORT}
    ====================
    `));