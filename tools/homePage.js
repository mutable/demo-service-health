const sendMarkdown = require('./sendMarkdown');

const homePage = (req, res) => {
  res.redirect("/healthCheck.html");
}

module.exports = homePage;