import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test-Endpunkt
app.get("/", (req, res) => {
  res.json({ message: "Crossword API läuft!" });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
