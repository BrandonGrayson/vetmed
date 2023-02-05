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

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          mt={3}
          sx={{
            marginBottom: "30px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Animal Hospital Medication Instructions
        </Typography>
        <Button
          sx={{ marginLeft: "75px" }}
          onClick={handleClickOpen}
          variant="contained"
        >
          Add Medication
        </Button>
      </Grid>
      <MedTable medication={sortedMedications} />
      <AddNewMedDialog open={open} setOpen={setOpen} />
    </Grid>
  );
}
