const tooBusy = require("toobusy-js");

const healthCheck = (req,res) => {
	res.send(tooBusy.lag()+"");
}

module.exports = healthCheck;