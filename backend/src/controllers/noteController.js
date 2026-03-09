export const getAllNotes = (req, res) => {
  res.send("You Just Fetched Notes");
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "Note Created Successfully!" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Note Updated Successfully!" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note Deleted Successfully!" });
}
