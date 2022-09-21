const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description add dish Route
 * @method GET /add-dish
 */
route.get("/add-dish", services.add_dish);

/**
 * @description updte dish Route
 * @method GET /update-dish
 */
route.get("/update-dish", services.update_dish);

// API
route.post("/api/dishes", controller.create);
route.get("/api/dishes", controller.find);
route.put("/api/dishes/:id", controller.update);
route.delete("/api/dishes/:id", controller.delete);

module.exports = route;
