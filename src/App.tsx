import "./App.css";
import SignUpUser from "./components/SignUpUserForm";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Grid>
        <SignUpUser />
      </Grid>
    </Grid>
  );
}

export default App;
