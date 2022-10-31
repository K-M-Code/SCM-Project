import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styles from './truckAdd.module.css';


const TruckAdd = () => {
  return (
    <div className="">            
      <Box sx={{ height: 150, width: '100%' }}>
        <h2>Add Truck</h2>
        <Box className={styles.textInputBox}>

          <TextField className={styles.textInput} id="outlined-basic" label="Licence Plate" variant="outlined" />            
          <TextField className={styles.textInput} id="outlined-basic" label="Name" variant="outlined" />

          <Button className={styles.buttonInput} variant="contained">Add Truck</Button>

        </Box>

      </Box>
    </div>
  );
};

export default TruckAdd;