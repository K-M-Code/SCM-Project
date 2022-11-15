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



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


type FormInputs = {
    licencePlate: string;
    name: string;
};

const TruckAdd: FC = () => {


    const { register, handleSubmit } = useForm<FormInputs>();

    const [startLPValue, setLPValue] = useState("");
    const [startNValue, setNValue] = useState("");

    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    
    const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    };
    const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    const submitHandler = (data: FormInputs) => {
        console.log(data);
        const truck: Truck = {
            "id": 0,
            "licencePlate": data.licencePlate,
            "name": data.name
        };

        postTruckData(truck).then((response) => {
            console.log(response);
            setLPValue("");
            setNValue("");
            setSuccess(true);
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        });

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
            open={success}
            autoHideDuration={6000}
            onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success">
                Truck successfully added to database!
            </Alert>
        </Snackbar>
        <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error">
                Error adding truck to database!
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