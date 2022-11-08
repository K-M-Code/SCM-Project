import {useState, useEffect, FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Truck } from '../type/Truck';
import { getTruckData } from '../controllers/TruckController';
import styles from './datagrid.module.css'; 


const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 25,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'licencePlate',
    headerName: 'License Plate',
    width: 125,
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
        .then(truckResponse=>{
            setTruckArray(truckResponse);
            console.log(JSON.stringify(truckResponse));
        })
    }

    useEffect(() => {
        readTruckData();
    }, [])



    return(
      <div className={styles.datagrid}>        
        <Box sx={{ height: 630, width: '100%' }}>
        <DataGrid 
          rows={truckArray}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
      </div>
    )
}

export default TruckDatagridComponent;