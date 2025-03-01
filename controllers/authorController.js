const db = require("../db")
const CustomNotFoundError = require("../errors/CustomNotFoundError")

async function getAuthorById(req, res)  {
  try{
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId))
    if (!author){
      throw new CustomNotFoundError("author not found")
      return
    }
    res.send(`Author Name: ${author.name}`);
  }
  catch (error) {
    console.error("error retrieving author: ", error)
    res.status(500).send("Internet server error")
  }
}

module.exports = {getAuthorById}