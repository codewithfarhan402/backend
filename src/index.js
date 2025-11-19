// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";

import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})











connectDB();









// connecting the application to the database
/*
import express from "express";
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR: ", err);
            throw err
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is litning n port ${process.env.PORT}`);
        })

    }catch (error) {
        console.error("ERROR ", error)
        throw err
    }
}) ()
*/