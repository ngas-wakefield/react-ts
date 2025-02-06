import { Container, Typography } from "@mui/material";
import NotesGrid from "../components/NotesGrid/NotesGrid";
import { notes } from "../data/db";
import { Note } from "../components/NoteCard/NoteCard";

export default function Notes() {
  const notesArray: Note[] = notes;
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Notes
      </Typography>
      <NotesGrid notes={notesArray} />
    </Container>
  );
}
