const express = require("express")
const authorRouter = require("./routes/authorRouter")
const app = express()
const path = require("node:path");
const aboutRouter = require("./routes/aboutRouter");

const links = [
  { href: "/", text: "Home"},
  { href: "about", text: "About"}
]

const users = ["Rose", "Cake", "Biff"];
const assetsPath = path.join(__dirname, "public")

app.use(express.static(assetsPath))
app.use("/author", authorRouter)
app.use("/about", aboutRouter)
app.get("/", (req, res) => res.render("index", {links:links, users:users}))

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000

app.listen(PORT, () => {
  console.log(
    `serving on port ${PORT}`
  );
  
})