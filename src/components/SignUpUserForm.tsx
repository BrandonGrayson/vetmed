import { Grid, TextField, Box, Button, Typography } from "@mui/material";

export default function SignUpUser() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid grey",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            height: "300px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              marginBottom: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "45px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{
              marginBottom: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Button
            sx={{
              marginTop: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
