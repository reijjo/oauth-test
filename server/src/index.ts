import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";

dotenv.config();

const app = express();

mongoose
  .connect(
    `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`
  )
  .then(() => {
    console.log("Connected to MONGOOOOOSE!");
  })
  .catch((error) => {
    console.log("Error connecting Mongoose.");
  });

// Middleware

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log("Server Started at port 3001");
});
