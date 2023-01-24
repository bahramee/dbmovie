import { createTheme } from "@mui/material";
import { blueGrey, green, grey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[800],
        },
        secondary: {
            main: red[800],
        },
        success: {
            main: green[500],
            contrastText: grey[50],
        }
    },
    direction: "rtl",
})