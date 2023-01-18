import { Grid, Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogIn = async () => {
    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    setEmail("");
    setPassword("");

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
        <Typography variant="h5">Login</Typography>
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
            onClick={handleLogIn}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
