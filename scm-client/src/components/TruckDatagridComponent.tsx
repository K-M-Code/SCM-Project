import {useState, useEffect, FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Truck } from '../type/Truck';
import { getTruckData } from '../controllers/TruckController';
import styles from './datagrid.module.css'; 


const columns: GridColDef[] = [
  {
    field: 'licencePlate',
    headerName: 'License Plate',
    width: 150,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
    headerAlign: 'center',
  },
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
      <div className={styles.datagrid}>        
        <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={truckArray}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
      </div>
    )
}

export default TruckDatagridComponent;