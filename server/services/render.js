const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // make a get request to api/dishes
  axios
    .get("http://localhost:3000/api/dishes")
    .then(function(response) {
      console.log(response.data);
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
  res.render("update_dish");
};
