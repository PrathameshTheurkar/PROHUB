import express from "express";

const app = express();

app.use("/api", HandleRoutes);

const server = app.listen(5000, () =>
  console.log("Server running on port 5000")
);
