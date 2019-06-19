
/**
* Redirect to Services health check page
**/

const API = {};

module.exports = API;

API.homePage = (req, res) => {
  res.redirect("/healthCheck.html");
}
