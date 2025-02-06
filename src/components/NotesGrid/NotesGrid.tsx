import Masonry from "@mui/lab/Masonry";
import NoteCard from "../NoteCard/NoteCard";
import { Container } from "@mui/material";
import { useNotes } from "../../providers/NotesContext";

export default function NotesGrid() {
  const { notes } = useNotes(); 

  return (
    <Container>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {notes.map((note) => (
          <NoteCard key={note.id} n={note} />
        ))}
      </Masonry>
    </Container>
  );
}
