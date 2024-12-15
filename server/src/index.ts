import express, {Express, Application, urlencoded, json } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

const app: Express = express();
app.use(cors());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json({ limit: "30mb" }));

app.use("/api/v1", routes);

app.listen(3001, () => {
  console.log("Server listening at port 3001");
});
