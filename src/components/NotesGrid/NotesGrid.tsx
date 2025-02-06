import Masonry from "@mui/lab/Masonry";
import NoteCard from "../NoteCard/NoteCard";
import { Note } from "../../data/db";
import { Container } from "@mui/material";

export default function NotesGrid({ notes }: { notes: Note[] }) {
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
