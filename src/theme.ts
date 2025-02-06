import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
palette: {
mode: 'light',
primary: {
    main: '#6200ea', // Example primary color
},
background: {
    default: '#ffffff',
},
text: {
    primary: '#000000',
    secondary: '#666666',
},
},
});

export const darkTheme = createTheme({
palette: {
mode: 'dark',
primary: {
    main: '#bb86fc', // Example primary color
},
background: {
    default: '#121212',
},
text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
},
},
});
