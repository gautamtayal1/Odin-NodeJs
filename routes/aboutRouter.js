const { Router } = require("express")
const { route } = require("./authorRouter")
const aboutRouter = Router()

aboutRouter.get("/", (req, res) => {
  res.render("about")
})

module.exports = aboutRouter