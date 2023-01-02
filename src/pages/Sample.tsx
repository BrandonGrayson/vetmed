import { Grid, Typography, Button } from "@mui/material";
import MedTable from "../components/Table";
import { useState } from "react";
import AddNewMedDialog from "../components/AddNewMedDialog";

export default function Sample() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Standard Medication Instructions</Typography>
        <Button onClick={handleClickOpen} variant="contained">
          Add Medication
        </Button>
      </Grid>
      <Grid item xs={12}>
        <MedTable />
      </Grid>
      {/* Dialog Form */}
      <AddNewMedDialog open={open} setOpen={setOpen} />
    </Grid>
  );
}
