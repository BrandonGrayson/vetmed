import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "medication",
    headerName: "Medication",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
  {
    field: "used_for",
    headerName: "Used For",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "cant_be_taken_with",
    headerName: "Can't Be Taken With",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    medication: "Snow",
    description: "Jon",
    used_for: 35,
    cant_be_taken_with: "these Nuts",
  },
  {
    id: 2,
    medication: "Lannister",
    description: "Cersei",
    used_for: 42,
    cant_be_taken_with: "these Nuts",
  },
  {
    id: 3,
    medication: "Lannister",
    description: "Jaime",
    used_for: 45,
    cant_be_taken_with: "these Nuts",
  },
];

export default function MedTable() {
  return (
    <Grid container>
      <Grid item xs={12} mt={5}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          sx={{ height: "400px" }}
        />
      </Grid>
    </Grid>
  );
}
