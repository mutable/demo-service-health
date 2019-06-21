
/**
* Redirect to Services health check page
**/

const HomeApi = {};

module.exports = HomeApi;

HomeApi.homePage = (req, res) => {
  res.redirect("/healthCheck.html");
}
