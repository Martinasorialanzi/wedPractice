// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inika', // Nombre de la fuente personalizada
      'serif', // Fallback genérico en caso de que la fuente no esté disponible
    ].join(','),
  },
});

export default theme;
