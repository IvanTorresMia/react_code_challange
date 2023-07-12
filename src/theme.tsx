import { createTheme } from "@mui/material";
import { primaryPurple } from "./const/colors";

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
  },
  palette: {
    primary: {
      main: primaryPurple,
    },
  },
});
