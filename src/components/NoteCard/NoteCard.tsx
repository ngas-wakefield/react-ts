import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography, Avatar } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { yellow, green, pink, blue } from "@mui/material/colors";

const avatarStyle = (category: string) => ({
  backgroundColor:
    category === "work"
      ? yellow[700]
      : category === "money"
      ? green[500]
      : category === "todos"
      ? pink[500]
      : blue[500],
});

export interface Note {
  id: number;
  title: string;
  category: string;
  details: string;
}

export default function NoteCard({ n }: { n: Note }) {
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar sx={avatarStyle(n.category)}>
            {n.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => console.log(`Delete note ${n.id}`)}>
            <DeleteOutlineOutlined />
          </IconButton>
        }
        title={n.title}
        subheader={n.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {n.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
