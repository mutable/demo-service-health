const onFinished = require('on-finished');

const getDiffTook = (time) => {
  const diff = process.hrtime(time);
  const ms = diff[0] * 1e3 + diff[1] * 1e-6;
  return ms.toFixed(3);
}


const getReportingInfo = (callback) => {
  return (req,res,next) => {
    req._startedAt = process.hrtime()
    req._startedTime = new Date
    onFinished(res, function(){
      const request = {}
      request.status = res.statusCode
      request.date = req._startedTime
      request.took = getDiffTook(req._startedAt) 
      request.path = req.originalUrl
      request.ip = req.ip
        || req._remoteAddress
        || (req.connection && req.connection.remoteAddress)
        || undefined
      request.method = req.method
      request.body = req.body
      request.headers = req.headers
      callback(request)
    })
    next()
  }
}

module.exports = getReportingInfo;