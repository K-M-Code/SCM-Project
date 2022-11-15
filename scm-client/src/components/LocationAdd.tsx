import * as React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Snackbar } from '@mui/material';
import styles from './locationAdd.module.css';
import { Location } from '../type/Location';
import { postLocationData } from '../controllers/LocationController';
import { FC, useState } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


type FormInputs = {
    id?: number;
    latitude?: number;
    longitude?: number;
    maxHrCap?: number;
    name?: string;
    no?: number;
    processingCost?: number;
    sla?: number;
};


const LocationAdd: FC = () => {
    const { register, handleSubmit } = useForm<FormInputs>();

    const [startNoValue, setNoValue] = useState("");
    const [startNameValue, setNameValue] = useState("");
    const [startLatitudeValue, setLatitudeValue] = useState("");
    const [startLongitudeValue, setLongitudeValue] = useState("");
    const [startMaxHrCapValue, setMaxHrCapValue] = useState("");
    const [startProcessingCostValue, setProcessingCostValue] = useState("");
    const [startSlaValue, setSlaValue] = useState("");

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
        const location: Location = {
            "id": 0,
            "name": data.name,
            "longitude": data.longitude,
            "latitude": data.latitude,
            "maxHrCap": data.maxHrCap,
            "sla": data.sla,
            "processingCost": data.processingCost,
            "no": data.no
        };
        postLocationData(location).then((response) => {
            console.log(response);

        setNoValue("");
        setNameValue("");
        setLongitudeValue("");
        setLatitudeValue("");
        setMaxHrCapValue("");
        setProcessingCostValue("");
        setSlaValue("");

        setSuccess(true);
    })
    .catch((error) => {
        console.log(error);
        setError(true);
    });

    };



return (
<div className="">            
    <Box sx={{ height: 250, width: '100%' }}>
    <h2>Add Location</h2>

        <form onSubmit={handleSubmit(submitHandler)}>

<FormControl variant="outlined">
    <Box className={styles.textInputBox}>


        <TextField 
        className={styles.textInput} 
        id="no" 
        label="Number" 
        variant="outlined" 
        {...register("no")} 
        onChange={(newValue) => {setNoValue(newValue.target.value);}}
        value={startNoValue}
        />     
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="Name" 
        variant="outlined" 
        {...register("name")}
        onChange={(newValue) => {setNameValue(newValue.target.value);}}
        value={startNameValue}
        />     
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="Latitude" 
        variant="outlined" 
        {...register("latitude")}
        onChange={(newValue) => {setLatitudeValue(newValue.target.value);}}
        value={startLatitudeValue}
        />     
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="Longitude"
        variant="outlined" 
        {...register("longitude")}
        onChange={(newValue) => {setLongitudeValue(newValue.target.value);}}
        value={startLongitudeValue}
        /> 
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="Max HR Cap"
        variant="outlined" 
        {...register("maxHrCap")}
        onChange={(newValue) => {setMaxHrCapValue(newValue.target.value);}}
        value={startMaxHrCapValue}
        />
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="Processing Cost"
        variant="outlined" 
        {...register("processingCost")}
        onChange={(newValue) => {setProcessingCostValue(newValue.target.value);}}
        value={startProcessingCostValue}
        />
        
        <TextField 
        className={styles.textInput} 
        id="name" 
        label="SLA"
        variant="outlined" 
        {...register("sla")}
        onChange={(newValue) => {setSlaValue(newValue.target.value);}}
        value={startSlaValue}
        />

        <Button 
        className={styles.buttonInput} 
        variant="contained" 
        type="submit"
        >
            Add Location
        </Button>

        


        <Snackbar
            open={success}
            autoHideDuration={6000}
            onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success">
                Location successfully added to database!
            </Alert>
        </Snackbar>
        <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error">
                Error adding Location to database!
            </Alert>
        </Snackbar>
        

    </Box>
    </FormControl>

        </form>


    </Box>
</div>
);
};

export default LocationAdd;