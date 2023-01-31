import { Grid, Typography, Button } from "@mui/material";
import MedTable from "../components/Table";
import { useState, useEffect } from "react";
import AddNewMedDialog from "../components/AddNewMedDialog";
import { useAppSelector } from "../app/hooks";
import { useGetMedicationsQuery } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function MedicationsHome() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const token = useAppSelector((state) => state.tokenSlice.token);

  console.log("token", token);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const result = useGetMedicationsQuery(token);

  console.log("useGetMedicationsQuery", result);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Animal Hospital Medication Instructions</Typography>
        <Button onClick={handleClickOpen} variant="contained">
          Add Medication
        </Button>
      </Grid>
      <Grid item xs={12}>
        <MedTable />
      </Grid>
      <AddNewMedDialog open={open} setOpen={setOpen} />
    </Grid>
  );
}
