// Import Express
import express from "express";

// Import Router
import Router from "./routes/page.route.js";

// Create an Express app
const app = express();

// Use Router
app.use(Router);

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
