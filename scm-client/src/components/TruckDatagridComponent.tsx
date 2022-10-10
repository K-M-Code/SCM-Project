import {useState, useEffect, FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Truck } from '../type/Truck';
import { getTruckData } from '../controllers/TruckController';

const columns: GridColDef[] = [
  {
    field: 'licencePlate',
    headerName: 'License Plate',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, licensePlate: 'ABC-123', name: 'Volvo' },
  { id: 2, licensePlate: 'XYZ-456', name: 'Mercedes' },
];




const TruckDatagridComponent:FC=props=> {
    const [truckArray, setTruckArray] = useState<Array<Truck>>([]);

    async function readTruckData() {
        await getTruckData()
        .catch(console.error)
        .then(response=>{
            setTruckArray(response);
            console.log(JSON.stringify(response));
        })
    }

    useEffect(() => {
        readTruckData();
    }, [])


    return(
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={truckArray}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    )
}

export default TruckDatagridComponent;