
const TestApi = {}

module.exports = TestApi;

TestApi.count = (req, res) => {
  let i = 0
  while (i < 1e9) i++
  res.send("I counted to " + i)
}
