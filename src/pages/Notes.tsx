import { Container, Typography} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import NotesGrid from "../components/NotesGrid/NotesGrid";
import AddNoteModal from "../components/Modals/AddNoteModal";

export default function Notes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Container>
        <Typography variant="h5" gutterBottom>
          You need to log in to view your notes.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
      </Typography>
      <AddNoteModal />
      <NotesGrid />
    </Container>
  );
}
