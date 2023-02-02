import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAddMedicationMutation } from "../api/apiSlice";
import { useAppSelector } from "../app/hooks";

export default function AddNewMedDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [usedFor, setUsedFor] = useState("");
  const [cantBeTakenWith, setCantBeTakenWith] = useState("");
  const [dontTakeWith, setDontTakeWith] = useState<string[]>([]);

  const [addMedication, { isLoading }] = useAddMedicationMutation();
  const token = useAppSelector((state) => state.tokenSlice.token);

  const canSave = [name, description, usedFor].every(Boolean) && !isLoading;
  const newMedication = {
    name,
    description,
    used_for: usedFor,
    dont_take_with: dontTakeWith,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (canSave) {
      await addMedication({ token, newMedication }).unwrap();
    }
    setName("");
    setDescription("");
    setUsedFor("");
    setDontTakeWith([]);

    // const data = await response.json();

    // return data;
  };

  const AddMedicationToList = () => {
    setDontTakeWith([...dontTakeWith, cantBeTakenWith]);

    setCantBeTakenWith("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
        Add New Medication
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="medication"
          label="Medication"
          type="text"
          variant="outlined"
          value={name}
          fullWidth
          onChange={(event) => setName(event.target.value)}
          sx={{ marginBottom: "25px", marginTop: "10px" }}
        />
        <TextField
          id="description"
          label="Description"
          type="text"
          variant="outlined"
          value={description}
          multiline
          rows={4}
          fullWidth
          sx={{ marginBottom: "25px" }}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          id="used_for"
          label="Used For"
          type="text"
          variant="outlined"
          value={usedFor}
          fullWidth
          onChange={(event) => setUsedFor(event.target.value)}
          sx={{ marginBottom: "25px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="cant_be_taken_with"
            label="Can't be taken with"
            type="text"
            variant="outlined"
            value={cantBeTakenWith}
            fullWidth
            onChange={(event) => setCantBeTakenWith(event.target.value)}
            sx={{ marginBottom: "25px" }}
          />
          <Box sx={{ display: "flex", marginBottom: "30px" }}>
            {dontTakeWith.map((meds) => (
              <Box key={meds} sx={{ display: "flex", marginLeft: "10px" }}>
                <Typography>{meds}</Typography>
                <DeleteIcon
                  onClick={() =>
                    setDontTakeWith(dontTakeWith.filter((med) => med !== meds))
                  }
                />
              </Box>
            ))}
          </Box>
          <Button
            sx={{ height: "50px", width: "40px" }}
            variant="contained"
            onClick={AddMedicationToList}
          >
            Add
          </Button>
        </Box>
      </DialogContent>
      <DialogActions sx={{ marginRight: "13px" }}>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
