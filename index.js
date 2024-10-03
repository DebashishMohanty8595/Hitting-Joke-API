import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
    res.render("index.ejs", {
      jokeQ: result.data.setup,
      jokeD: result.data.delivery,
    });
  } catch (error) {
    res.render("index.ejs", { jokeQ: "Failed to Request Joke" });
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
