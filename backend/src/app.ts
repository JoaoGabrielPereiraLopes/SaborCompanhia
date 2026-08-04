import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes";
import { notFound, errorHandler } from "./middlewares";

dotenv.config();

const app = express();

/* app default middlewares */
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

/* routes */
app.use(routes);

/* custom middlewares */
app.use(cookieParser());
app.use(notFound);
app.use(errorHandler);

export default app;
