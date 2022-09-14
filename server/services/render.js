const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // make a get request to api/dishes
  axios
    .get("http://localhost:3000/api/dishes")
    .then(function(response) {
      res.render("index", { dishes: response.data });
    })
    .catch(err => {
      res.send(err);
    });
};

exports.add_dish = (req, res) => {
  res.render("add_dish");
};

exports.update_dish = (req, res) => {
  axios
    .get("http://localhost:3000/api/dishes", {
      params: { id: req.query.id }
    })
    .then(function(dishdata) {
      res.render("update_dish", { dish: dishdata.data });
    })
    .catch(err => {
      res.send(err);
    });
};
