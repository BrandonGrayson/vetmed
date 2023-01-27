import { Grid, Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTokenMutation } from "../api/apiSlice";
import { useAppDispatch } from "../app/hooks";
import { setToken } from "../features/tokenSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [getToken, { isLoading }] = useGetTokenMutation();
  const dispatch = useAppDispatch();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const canSave = [email, password].every(Boolean) && !isLoading;
  //   const canSave = [email, password].every(Boolean);

  const handleLogIn = async () => {
    if (canSave) {
      try {
        const response = await getToken({ email, password }).unwrap();
        const { access_token } = response;
        dispatch(setToken(access_token));
        navigate(`/home`);
      } catch (error) {
        console.log("error", error);
      }
      setEmail("");
      setPassword("");
    }
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
