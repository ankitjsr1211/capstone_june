import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./db/index.js";
import adminRouter from "./routes/AdminAuth.js";
import userRouter from "./routes/UserAuth.js";
import adminDashboad from "./routes/AdminDashboard.js";
import homeRouter from "./routes/homeRouts.js";
import searchRouter from "./routes/searchRoute.js";
import movieRouter from "./routes/movieRoutes.js";
import tvRouter from "./routes/tvRoutes.js";
import watchlistRouter from "./routes/watchlistRoutes.js";
import subscribePlan from "./routes/subscribeRoute.js";
import paymentRouter from "./routes/paymntRoute.js";
import videoRouter from "./routes/videoRoutes.js";
import historyRouter from "./routes/historyRoute.js";
import User from "./model/userModel.js";
import bcrypt from "bcrypt";
import { authentiacteRoute, reteLimit } from "./utils/Utils.js";

import { config } from "dotenv";

config()
const app = express();



 https: app.use(cors({ origin: "https://capstone-hjpm.vercel.app" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "pug");


app.get("/", (req, res) => {
  res.send({
    message1: "Movies,TV Shows and more...",
});
});
app.get("/admin", (req, res) =>
  res.render("signup", {
    title: "Signup",
    instructions: "Flixxit Admin Signup",
  })
);
app.post("/admin/signup", async (req, res) => {
  const { name, email, username, password, cpassword } = req.body;
  if (password === cpassword) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({
        name,
        email,
        username,
        password: hashedPassword,
        role: "admin",
      });
      await user.save();
      
      return res.redirect("https://capstone-hjpm.vercel.app");
    } catch {
      req.send("error");
    }
  }
  return res.redirect("/admin");
});


app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/user", videoRouter);
app.use("/user", paymentRouter);

app.use(authentiacteRoute, reteLimit)

app.use("/admin", adminDashboad);
app.use("/user", homeRouter);
app.use("/user", searchRouter);
app.use("/user", movieRouter);
app.use("/user", tvRouter);
app.use("/user", watchlistRouter);
app.use("/user", subscribePlan);
app.use("/user", historyRouter);
let port= "https://capstone-hjpm.vercel.app"
connection
  .then(() =>
    app.listen(port, () => {
      console.log("server listening on port ");
      console.log("connected to mongoDB");
    })
  )
  .catch((err) => {
    console.log("server failed to listen with error", err);
  });
