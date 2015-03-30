  var sendMarkdown =  require('./sendMarkdown')
  
  var homePage = function(req, res){
    res.redirect("/healthCheck.html")
  }

  module.exports = homePage