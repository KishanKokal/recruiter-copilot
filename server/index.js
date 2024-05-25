import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import RecruiterRouter from "./src/recruiter/recruiter.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/recruiter", RecruiterRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
