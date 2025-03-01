const express = require("express")
const authorRouter = require("./routes/authorRouter")
const app = express()

app.use("/author", authorRouter)
app.get("/", (req, res) => res.send("Hello, Odin"))

const PORT = 3000

app.listen(PORT, () => {
  console.log(
    `serving on port ${PORT}`
  );
  
})