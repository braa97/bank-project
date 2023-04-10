import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Navbar({balance}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
      },
      secondary: {
        main: "#3d5afe",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack direction='row' spacing={1}>
              <Link to={`/`}>
                <Button style={{textTransform: 'none', fontSize: '1.3rem'}} color="inherit">Transactions</Button>
              </Link>
              <Link to={`/operations`}>
                <Button style={{textTransform: 'none', fontSize: '1.3rem'}} color="inherit">Operations</Button>
              </Link>
              <Link to={`/breakdown`}>
                <Button style={{textTransform: 'none', fontSize: '1.3rem'}} color="inherit">Breakdown</Button>
              </Link>
            </Stack>
            <Typography sx={{marginLeft: 'auto', marginRight: '25px'}} variant="h6" component="div">Balance: ₪<span className={balance < 0 ? 'balance-negative' : 'balance-positive'}>{balance}</span> </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
