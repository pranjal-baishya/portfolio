import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#f50057", // Pink color
    },
    background: {
      default: "#f5f5f5", // Light gray background
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
})

export default theme
