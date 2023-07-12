import { Box, Button, Grid, Link, Typography, colors } from "@mui/material";
import { MainLogo } from "../../components/icons/main_logo";
import { theme } from "../../theme";
import { primaryPurple } from "../../const/colors";

export default function Layout() {
  return (
    <Grid container spacing={2} padding={theme.spacing(2)}>
      <Grid item xs={3}>
        <MainLogo />
      </Grid>
      <Grid
        item
        xs={6}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        display={"flex"}
      >
        <Box paddingRight={2}>
          <Link color={colors.blueGrey} underline="none">
            <Typography>Home</Typography>
          </Link>
        </Box>
        <Box paddingRight={2}>
          <Link color={colors.blueGrey} underline="none">
            <Typography>Products</Typography>
          </Link>
        </Box>
        <Box paddingRight={2}>
          <Link color={colors.blueGrey} underline="none">
            {" "}
            <Typography>Documentation</Typography>
          </Link>
        </Box>
        <Box>
          <Link color={colors.blueGrey} underline="none">
            <Typography>Pricing</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Button
          style={{
            borderRadius: theme.spacing(2),
            backgroundColor: primaryPurple,
          }}
          variant="contained"
        >
          Open Dashboard
        </Button>
      </Grid>
    </Grid>
  );
}
