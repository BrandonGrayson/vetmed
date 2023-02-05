import { Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Medication from "../schemas/schemas";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Medication",
    width: 150,
    editable: true,
  },
  {
    field: "used_for",
    headerName: "Used For",
    width: 150,
    editable: true,
  },
  {
    field: "dont_take_with",
    headerName: "Can't Be Taken With",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
  },
  {
    field: "description",
    headerName: "Description",
    width: 500,
    editable: true,
  },
];

export default function MedTable({ medication }: { medication: Medication[] }) {
  return (
    <Grid
      item
      xs={12}
      mt={1}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ height: 400, width: "90%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={medication}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
              sx={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
    </Grid>
  );
}
