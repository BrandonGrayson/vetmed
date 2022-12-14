import { Box, TextField } from "@mui/material";

export default function SignUpUser() {
  return (
    <Box sx={{ border: "1px solid grey", width: "300px", maxWidth: "100%" }}>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </Box>
  );
}
