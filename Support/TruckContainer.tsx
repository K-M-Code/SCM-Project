import { useState,useEffect, FC } from "react";
import TruckDatagridComponent from "../components/TruckDatagridComponent";
import { getTruckData } from "../controllers/TruckController";
import { Truck } from "../type/Truck";

//keep the state of the trucks
const TruckContainer=()=>{
    //state managed by truckArray
    const [truckArray, setTruckArray] = useState<Array<Truck>|undefined>();

    //need initially fetch the data from database
    useEffect(()=>{
        readTruckData();
    },[]); //[] means call the function only once in the beginning
    
    async function readTruckData(){
        await getTruckData()
        .catch(console.error)
        .then(response=>{
            setTruckArray(response);
            console.log(JSON.stringify(response));
        })
    }
    return(
        <div>
            <h1>SCM Application</h1>
            <TruckDatagridComponent trucks={truckArray}/>
        </div>
    )
}
export default TruckContainer;