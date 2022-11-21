import {useState, useEffect, FC } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Truck } from "../type/Truck";
import { getTruckData } from "../controllers/TruckController";

const columns: GridColDef[] = [
  {
    field: 'licencePlate',
    headerName: 'Licence plate',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
];


/*
[
        { id: 1, licenceplate: 'ABC-123', name: 'Volvo'},
        { id: 2, licenceplate: 'XYZ-321', name: 'Scania'},
        { id: 3, licenceplate: 'AKU-313', name: 'Volvo' }
      ]
*/

interface Props{
  trucks?:Array<Truck>;
}
const TruckDatagridComponent:FC<Props>=props=>{
    return(
      <div data-testid="truck-data-grid-div1">
        <h2 data-testid="truck-data-grid-h2-1">Trucks</h2>
      {props.trucks&&props.trucks.length>0?(
        <Box data-testid="truck-data-grid-box1" sx={{ height: 400, width: '100%' }}>
            <DataGrid
                data-testid="truck-data-grid-datagrid1"
                rows={props.trucks}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
      ):(<h2>No data</h2>)}
      </div>
    )
}
export default TruckDatagridComponent;