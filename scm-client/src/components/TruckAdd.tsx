import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import styles from './truckAdd.module.css';
import { Truck } from '../type/Truck';
import { postTruckData } from '../controllers/TruckController';


// Create a post request to the server to add a new truck from the form where id is generated by the server

const submitHandler = (event: any) => {
    event.preventDefault();
    const truck: Truck = {
        id: 0,
        licencePlate: event.target[0].value,
        name: event.target[1].value
    };
    console.log(truck);
    postTruckData(truck);

}

const TruckAdd = () => {
return (
<div className="">            
    <Box sx={{ height: 150, width: '100%' }}>
    <h2>Add Truck</h2>

        <form onSubmit={submitHandler}>

<FormControl variant="outlined">
    <Box className={styles.textInputBox}>


            <TextField className={styles.textInput} id="licencePlate outlined-basic" label="Licence Plate" variant="outlined" />            
            <TextField className={styles.textInput} id="name outlined-basic" label="Name" variant="outlined" />

            <Button className={styles.buttonInput} variant="contained" type="submit">Add Truck</Button>

    </Box>
    </FormControl>

        </form>


    </Box>
</div>
);
};

export default TruckAdd;