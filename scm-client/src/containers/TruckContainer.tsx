import { FC, useEffect, useState } from 'react';
import TruckDatagridComponent from '../components/TruckDatagridComponent';
import styles from './container.module.css'; 
import TruckAdd from '../components/TruckAdd';
import { Truck } from '../type/Truck';
import { getTruckData } from '../controllers/TruckController';
// import TruckDatagridComponent from '../components/TruckDatagridComponent2';

// use state for when new truck is added in TruckAdd component and then pass it to TruckDatagridComponent as props to update the grid



const TruckContainer:FC=props=> {
    const [truckArray, setTruckArray] = useState(Array<Truck>());


    // async function readTruckData() {
    //     await getTruckData()
    //     .catch(console.error)
    //     .then(truckResponse=>{
    //         setTruckArray(truckResponse=>truckArray);
    //     })
    // }



    return(
        <div className={styles.fullBody}>
            <h1>Truck Collection</h1>
            <TruckAdd/>
            <TruckDatagridComponent trucks={truckArray}/>
            
        </div>
    )
}

export default TruckContainer;