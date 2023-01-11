import express from "express";
import BodyParser from "body-parser";
import "reflect-metadata";
import config from "../config/enviroment";
import cors from "cors";
import router from "./frameworks/http/router";
import moment from "moment-timezone";
import { initializeConnection } from "./frameworks/db/postgres/initializeConnection";

moment.tz.setDefault("ETC/GMT+3");

const app = express();

app.use(BodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ origin: "*" }));

router.forEach((item) => {
  app.use(item.path, item.router);
});


 
initializeConnection().then(() => {
  app.listen(config.server.port, async () => {
    console.log(`listening on port ${config.server.port}`);
  });
}).catch((err) => {
  console.log(err)
})

export default app;
