import { Grid, TextField, Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function SignUpUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:8000/users", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response.json();
  };
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
            value={email}
            variant="outlined"
            sx={{
              marginBottom: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "45px",
            }}
            onChange={handleEmailChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            value={password}
            variant="outlined"
            sx={{
              marginBottom: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onChange={handlePasswordChange}
          />
          <Button
            sx={{
              marginTop: "20px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
