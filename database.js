let notes = [
  {
    id: 1,
    title: "Note 1",
    timestamp: Date.now(),
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit tempus ante, vitae ultricies lectus rhoncus dictum. Vivamus eu luctus orci, a accumsan dolor. Maecenas vel justo at felis elementum consectetur. Maecenas eget ornare eros. Pellentesque in faucibus enim, et tristique neque. Praesent suscipit commodo placerat.",
  },
  {
    id: 2,
    title: "Note 2",
    timestamp: Date.now(),
    contents:
      "Duis sagittis quam felis, vel suscipit metus luctus luctus. Morbi at leo vel risus bibendum tincidunt. In odio nibh, eleifend quis metus non, imperdiet convallis enim. Curabitur ac metus convallis, maximus ligula eget, rutrum ex. Sed lacus dui, accumsan nec scelerisque ut, tempor quis magna.",
  },
];

function getNotes() {
  return notes;
}
exports.getNotes = getNotes;

function getNote(id) {
  return notes.find((note) => note.id === id);
}
exports.getNote = getNote;

function addNote(note) {
  notes.push({
    ...note,
    id: notes.length + 1,
    timestamp: Date.now(),
  });
}
exports.addNote = addNote;

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
}
exports.deleteNote = deleteNote;
