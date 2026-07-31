import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import { notFound, errorHandler } from "./middlewares";

const app = express();

/* app default middlewares */
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

/* routes */
app.use(routes);

/* custom middlewares */
app.use(notFound);
app.use(errorHandler);

export default app;
