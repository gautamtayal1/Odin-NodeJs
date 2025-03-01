const {Router} = require("express")
const authorRouter = Router()
const {getAuthorById} = require("../controllers/authorController")

authorRouter.get("/", (req, res) => {
  res.send("All Authors")
})

authorRouter.get("/:authorId", getAuthorById)

module.exports = authorRouter