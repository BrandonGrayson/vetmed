import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const [dontTakeWith, setDontTakeWith] = useState<string[]>([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:8000/medications", {
      method: "POST",
      mode: "cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ medication, description }),
    });

    return response.json();
  };

  const AddMedicationToList = () => {
    setDontTakeWith([...dontTakeWith, cantBeTakenWith]);

    setCantBeTakenWith("");
  };

  console.log("meds", dontTakeWith);

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
          value={medication}
          fullWidth
          onChange={(event) => setMedication(event.target.value)}
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
