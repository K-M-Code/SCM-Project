import {useState, useEffect, FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Location } from '../type/Location';
import { deleteLocationData, getLocationData } from '../controllers/LocationController';
import styles from './datagrid.module.css'; 
import Button from '@mui/material/Button';



const LocationDatagridComponent:FC=props=> {

    const [locationArray, setLocationArray] = useState<Array<Location>>([]);

    const [clickedRow, setClickedRow] = useState<Location>()


    const columns: GridColDef[] = [
      {
        field: 'id',
        headerName: 'ID',
        // width: 25,
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
        field: 'latitude',
        headerName: 'Latitude',
        width: 100,
        editable: true,
        headerAlign: 'center',
      },
      {
        field: 'longitude',
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
      {
        field: "deleteButton",
        headerName: "Actions",
        description: "Actions column.",
        sortable: false,
        width: 160,
        renderCell: (params) => {
          return (
            <Button
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              Delete
            </Button>
          );
        }
      }
    ];

    const location: Location = {
      "id": clickedRow?.id,
      "no": clickedRow?.no,
      "latitude": clickedRow?.latitude,
      "longitude": clickedRow?.longitude,
      "maxHrCap": clickedRow?.maxHrCap,
      "name": clickedRow?.name,
      "processingCost": clickedRow?.processingCost,
      "sla": clickedRow?.sla
    }

    const onButtonClick = (e:any, row:any) => {
      setClickedRow(row);
      deleteLocationData(location);
      e.stopPropagation();
    };
  

    async function readLocationData() {
        await getLocationData()
        .catch(console.error)
        .then(locationResponse=>{
            setLocationArray(locationResponse);
        })
    }

    useEffect(() => {
        readLocationData();
    }, [])



    return(
      <div className={styles.datagrid}>        
        <Box sx={{ height: 635, width: '100%' }}>
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
        {/* clickedRow: {clickedRow ? `${clickedRow?.id}` : null} */}
      </div>
    )
}

export default LocationDatagridComponent;