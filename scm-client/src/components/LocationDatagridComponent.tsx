import {useState, useEffect, FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Location } from '../type/Location';
import { getLocationData } from '../controllers/LocationController';
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
    field: 'no',
    headerName: 'No.',
    width: 25,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'lat',
    headerName: 'Latitude',
    width: 100,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'long_',
    headerName: 'Longitude',
    width: 100,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'maxHrCap',
    headerName: 'Max HR Capacity',
    width: 150,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 125,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'processingCost',
    headerName: 'Processing Cost',
    width: 125,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'sla',
    headerName: 'SLA',
    width: 50,
    editable: true,
    headerAlign: 'center',
  },
];


const LocationDatagridComponent:FC=props=> {
    const [locationArray, setLocationArray] = useState<Array<Location>>([]);

    async function readLocationData() {
        await getLocationData()
        .catch(console.error)
        .then(locationResponse=>{
            setLocationArray(locationResponse);
            console.log(JSON.stringify(locationResponse));
        })
    }

    useEffect(() => {
        readLocationData();
    }, [])



    return(
      <div className={styles.datagrid}>        
        <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid 
          rows={locationArray}
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

export default LocationDatagridComponent;