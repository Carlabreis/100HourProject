const express = require("express");
const route = express.Router();

const services = require("../services/render");

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

module.exports = route;
