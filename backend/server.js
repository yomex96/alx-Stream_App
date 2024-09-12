// import express

// use this when using commonJS
// const express = require("express");
// OR

// Use this when working with ESModule
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"
import searchRoutes from "./routes/search.route.js"

import { ENV_VARS } from "./config/envVars.js";
// import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";


const app = express();
const PORT = ENV_VARS.PORT

// Middleware
// this will allow us to parse req.body
app.use(express.json()); // Body Parser for JSON
app.use(cookieParser());

// END POINTS FOR MOVIES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
// END POINTS FOR TV SHOWS
app.use("/api/v1/tv", protectRoute, tvRoutes);
// END POINTS FOR SEARCH
app.use("/api/v1/search", protectRoute, searchRoutes);

// Custom Port Configuration
app.listen(PORT, () => {
    console.log("My Server is Started at http://localhost:" + PORT);
    connectDB();
});

