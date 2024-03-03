import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
import authRoutes from "./routes/auth.routes.js";

app.get("/",(req,res)=>{
    res.send("Hello world");
})


app.use("/api/auth/",authRoutes);



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})