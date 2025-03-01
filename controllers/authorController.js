const db = require("../db")

async function getAuthorById(req, res)  {
  try{
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId))

    if (!author){
      res.status(404).send("author not found")
      return
    }
    
    res.send(`Author Name: ${author.name}`);
  }
  catch (error) {
    console.error("error retrievind author: ", error)
    res.status(500).send("Internet server error")
  }
}

module.exports = {getAuthorById}