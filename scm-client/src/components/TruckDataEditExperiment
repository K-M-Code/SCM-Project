import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  GridColumns,
  GridRowsProp,
  DataGrid,
  GridRowId,
  GridCellModes,
  GridEventListener,
  GridCellModesModel,
} from '@mui/x-data-grid';
import { deleteTruckDataById, getTruckData, getTruckDataById, updateTruckData } from '../controllers/TruckController';
import { useEffect, useState } from 'react';
import { Truck } from '../type/Truck';

interface SelectedCellParams {
  id: GridRowId;
  field: string;
}

interface EditToolbarProps {
  selectedCellParams?: SelectedCellParams;
  cellModesModel: GridCellModesModel;
  setCellModesModel: (value: GridCellModesModel) => void;
  cellMode: 'view' | 'edit';
}



// const truck: Truck = {
//   "id": clickedRow?.id,
//   "licencePlate": clickedRow?.licencePlate,
//   "name": clickedRow?.name
// };

function EditToolbar(props: EditToolbarProps) {
  const { selectedCellParams, cellMode, cellModesModel, setCellModesModel } = props;

  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === 'edit') {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
      console.log(selectedCellParams);
      console.log(selectedCellParams);
      // updateTruckData(selectedCellParams);
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleDelete = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    
    const tempID:number = +selectedCellParams.id;
    deleteTruckDataById(tempID);
    
    // refresh the datagrid after deleting the row
    getTruckData().then(truckData => {
      // setTruckArray(truckData);
    })
    
    
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        variant="outlined"
      >
        {cellMode === 'edit' ? 'Save' : 'Edit'}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === 'view'}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
      <Button
        onClick={handleDelete}
        onMouseDown={handleMouseDown}
        // disabled={cellMode === 'view'}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Delete
      </Button>
    </Box>
  );
}

export default function StartEditButtonGrid() {
  const [selectedCellParams, setSelectedCellParams] =
    React.useState<SelectedCellParams | null>(null);
  const [cellModesModel, setCellModesModel] = React.useState<GridCellModesModel>({});

  const handleCellFocus = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const row = event.currentTarget.parentElement;
      const id = row!.dataset.id!;
      const field = event.currentTarget.dataset.field!;
      console.log("HandleCellFocus :" +event.currentTarget.textContent);
      setSelectedCellParams({ id, field });
    },
    [],
  );

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return 'view';
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || 'view';
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params:any, event:any) => {
      if (cellMode === 'edit') {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode],
  );

  

  const columns: GridColumns = [
    {
      field: 'id',
      headerName: 'ID',
      // width: 25,
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
    }
  ];


  const [truckArray, setTruckArray] = useState<Array<Truck>>([]);

  async function readTruckData() {
    await getTruckData()
    .catch(console.error)
    .then(truckResponse=>{
        setTruckArray(truckResponse);
    })
  }

  useEffect(() => {
      readTruckData();
  }, [])

  return (
    <div style={{ height: 1100, width: '100%' }}>
      <DataGrid
        rows={truckArray}
        columns={columns}
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        onCellModesModelChange={(model) => setCellModesModel(model)}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

