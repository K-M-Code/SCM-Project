import { FC } from 'react';
import TruckDatagridComponent from '../components/TruckDatagridComponent';
import styles from './container.module.css'; 
import TruckAdd from '../components/TruckAdd';




const TruckContainer:FC=props=> {

    return(
        <div className={styles.fullBody}>
            <h1>Truck Collection</h1>
            <TruckAdd/>
            <TruckDatagridComponent/>
            
        </div>
    )
}

export default TruckContainer;