import * as React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Snackbar } from '@mui/material';
import styles from './truckAdd.module.css';
import { Truck } from '../type/Truck';
import { postTruckData } from '../controllers/TruckController';
import { FC, useState } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



type FormInputs = {
    licencePlate: string;
    name: string;
};

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


const TruckAdd: FC = () => {
    const { register, handleSubmit } = useForm<FormInputs>();

    const [startLPValue, setLPValue] = useState("");
    const [startNValue, setNValue] = useState("");



    const submitHandler = (data: FormInputs) => {
        console.log(data);
        const truck: Truck = {
            "id": 0,
            "licencePlate": data.licencePlate,
            "name": data.name
        };
        postTruckData(truck);

        setLPValue("");
        setNValue("");

        notificationOpen();

    };

    const [open, setOpen] = React.useState(false);

    const notificationOpen = () => {
    setOpen(true);
    };

    const notificationClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };



return (
<div className="">            
    <Box sx={{ height: 150, width: '100%' }}>
    <h2>Add Truck</h2>

        <form onSubmit={handleSubmit(submitHandler)}>

<FormControl variant="outlined">
    <Box className={styles.textInputBox}>


        <TextField 
        className={styles.textInput} 
        id="licencePlate" 
        label="Licence Plate" 
        variant="outlined" 
        {...register("licencePlate")} 
        onChange={(newValue) => {setLPValue(newValue.target.value);}}
        value={startLPValue}
        />     
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="Name" 
        variant="outlined" 
        {...register("name")}
        onChange={(newValue) => {setNValue(newValue.target.value);}}
        value={startNValue}
        />

        <Button 
        className={styles.buttonInput} 
        variant="contained" 
        type="submit"
        >
            Add Truck
        </Button>

        
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={notificationClose}
        >            
            <Alert onClose={notificationClose} severity="success" sx={{ width: '100%' }}>
            Truck Added Successfully
            </Alert>
        </Snackbar>
        

    </Box>
    </FormControl>

        </form>


    </Box>
</div>
);
};

export default TruckAdd;