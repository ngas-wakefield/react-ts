import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const { isAuthenticated, logout, login, user } = useAuth();
  const [open, setOpen] = useState(false);

  // Function to handle closing the drawer
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Top AppBar for Mobile */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton 
            color="inherit" 
            edge="start" 
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer 
        anchor="left" 
        open={open} 
        onClose={handleClose}  // Ensures the drawer closes on outside click
      >
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" onClick={handleClose}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {!isAuthenticated ? (
            <ListItem disablePadding>
              <ListItemButton onClick={() => { login(); handleClose(); }}>
                <ListItemIcon><LoginIcon /></ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                  <ListItemText primary={`Welcome, ${user?.name}`} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => { logout(); handleClose(); }}>
                  <ListItemIcon><LogoutIcon /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
