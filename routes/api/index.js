const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./bookRoute");
const userRoutes = require("./userRoute");

// Book routes
router.use("/books", bookRoutes);

// User routes
router.use("/users", userRoutes);

// For anything else, render the html page
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
