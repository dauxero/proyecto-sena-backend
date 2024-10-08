import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import exp from "constants";
import dashboardRoutes from './routes/dashboardRoutes'
/* ROUTES IMPORTS */

/* configuraciones */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//? Routes
app.use('/dashboard', dashboardRoutes)


//? server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`sevidor corriendo en el puerto ${port}`);
});
