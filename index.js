const express = require("express");
const cors=require("cors");
const app = express();
const port = 5000;
const path = require("path")
require("dotenv").config({ path: "./config/.env" });
app.use(express.json());
app.use(cors({
    origin: "https://hpvs.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
require("./DataBase/conn");
const URLS = require("./Router/route");

app.use("/api/v1/",URLS);


app.listen(port,()=>{
    console.log("server starts.............");
})
