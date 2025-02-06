import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Modal,
  Box,
  TextField,
  Button,
  Fab,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export default function AddNoteModal({ onAdd }: { onAdd: (title: string, category: string, details: string) => void }) {
const [open, setOpen] = useState(false);
const [title, setTitle] = useState("");
const [category, setCategory] = useState("");
const [details, setDetails] = useState("");

const handleSubmit = () => {
if (title && category && details) {
    onAdd(title, category, details);
    setTitle("");
    setCategory("");
    setDetails("");
    setOpen(false);
}
};

  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        sx={{ position: "fixed", top: 16, right: 16 }}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>

      {/* Portal for Modal */}
      {open &&
        createPortal(
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <TextField
                fullWidth
                label="Title"
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                fullWidth
                label="Category"
                margin="normal"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                fullWidth
                label="Details"
                margin="normal"
                multiline
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
                Add Note
              </Button>
            </Box>
          </Modal>,
          document.body // Mounts the modal outside the main component tree
        )}
    </>
  );
}
