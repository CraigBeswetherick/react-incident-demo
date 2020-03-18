import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";

export default createMuiTheme({
  palette: {
    primary: pink,
    secondary: indigo // Indigo is probably a good match with pink
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
        "font-size": "1.5em",
        backgroundColor: "#e91e63",
        "&:hover": {
          backgroundColor: "white"
        }
      },
      label: {
        color: "black"
      }
    },
    MuiTypography: {
      body1: {
        "font-size": "2em"
      },
      body2: {
        "font-size": "1em"
      }
    }
  }
});
