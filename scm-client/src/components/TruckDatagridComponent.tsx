import {useState, useEffect, FC} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Truck } from '../type/Truck';
import { deleteTruckData, getTruckData } from '../controllers/TruckController';
import styles from './datagrid.module.css'; 
import Button from '@mui/material/Button';




// When TruckAdd adds a new truck, it should be added to the datagrid. The datagrid should be updated with the new truck.





const TruckDatagridComponent:FC=props=> {

  const [truckArray, setTruckArray] = useState<Array<Truck>>([]);

  const [clickedRow, setClickedRow] = useState<Truck>()


  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      // width: auto,
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

  

    const truck: Truck = {
      "id": clickedRow?.id,
      "licencePlate": clickedRow?.licencePlate,
      "name": clickedRow?.name
    };

    const onButtonClick = (e:any, row:any) => {
      setClickedRow(row);
      deleteTruckData(truck);
      e.stopPropagation();
    };

    async function readTruckData() {
        await getTruckData()
        .catch(console.error)
        .then(truckResponse=>{
            setTruckArray(truckResponse);
            // console.log(JSON.stringify(truckResponse));
        })
    }

    useEffect(() => {
        readTruckData();
    }, [])



    return(
      <div className={styles.datagrid}>        
        <Box sx={{ height: 635, width: '100%' }}>
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
        clickedRow: {clickedRow ? `${clickedRow?.id}` : null}
      </div>
    )
}

export default TruckDatagridComponent;