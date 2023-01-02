import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function AddNewMedDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [medication, setMedication] = useState("");
  const [description, setDescription] = useState("");
  const [usedFor, setUsedFor] = useState("");
  const [cantBeTakenWith, setCantBeTakenWith] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Medication</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="medication"
          label="Medication"
          type="text"
          fullWidth
          variant="outlined"
          value={medication}
          onChange={(event) => setMedication(event.target.value)}
          sx={{ marginBottom: "25px", marginTop: "10px" }}
        />
        <TextField
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          sx={{ marginBottom: "25px" }}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          id="used_for"
          label="Used For"
          type="text"
          fullWidth
          variant="outlined"
          value={usedFor}
          onChange={(event) => setUsedFor(event.target.value)}
          sx={{ marginBottom: "25px" }}
        />
        <TextField
          id="cant_be_taken_with"
          label="Can't be taken with"
          type="text"
          fullWidth
          variant="outlined"
          value={cantBeTakenWith}
          onChange={(event) => setCantBeTakenWith(event.target.value)}
          sx={{ marginBottom: "25px" }}
        />
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
