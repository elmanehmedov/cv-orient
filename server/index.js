import express from "express";
import { MockRoutes } from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = 4000;

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT"],
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", MockRoutes);

app.listen(PORT, function () {
  console.log(`Is up  ${PORT}`);
});
