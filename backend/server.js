import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("You Got 20 Notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note Created Successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note Updated Successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note Deleted Successfully!" });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
