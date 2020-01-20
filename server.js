const express = require("express");
const apiRoutes = require("../Note-Taker-two/routes/apiRoutes");
const htmlRoutes = require("../Note-Taker-two/routes/htmlRoutes");

// Initialize the app and create a port
// ==============================================================================
// DEPENDENCIES
const app = express();
// ==============================================================================
// EXPRESS CONFIGURATION
const PORT = process.env.PORT || 8081;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

/* route stuff */
//const path = require("path");
//const router = require("express").Router();
// ================================================================================
// ROUTER
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// ================================================================================
// LISTENER
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
// ============================================================================
