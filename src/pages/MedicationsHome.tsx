import { Grid, Typography, Button } from "@mui/material";
import MedTable from "../components/Table";
import { useState, useEffect, useMemo } from "react";
import AddNewMedDialog from "../components/AddNewMedDialog";
import { useAppSelector } from "../app/hooks";
import { useGetMedicationsQuery } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";
import Medication from "../schemas/schemas";

export default function MedicationsHome() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();
  const token = useAppSelector((state) => state.tokenSlice.token);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  console.log("token before get med query", token);
  const {
    data: Medications = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMedicationsQuery(token);

  const sortedMedications = useMemo(() => {
    const sortedMedications: Medication[] = Medications.slice();

    sortedMedications.sort((med1: Medication, med2: Medication) =>
      med2.created_at.localeCompare(med1.created_at)
    );

    return sortedMedications;
  }, [Medications]);

  // console.log(result.currentData);
  // console.log("data", result);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Animal Hospital Medication Instructions</Typography>
        <Button onClick={handleClickOpen} variant="contained">
          Add Medication
        </Button>
      </Grid>
      <Grid item xs={12}>
        <MedTable medication={sortedMedications} />
      </Grid>
      <AddNewMedDialog open={open} setOpen={setOpen} />
    </Grid>
  );
}
