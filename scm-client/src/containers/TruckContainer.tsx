import { FC } from 'react';
import TruckDatagridComponent from '../components/TruckDatagridComponent';
import TruckAdd from '../components/TruckAdd';
// import styles from './container.module.css'; 

const TruckContainer:FC=props=> {
    return(
        <div className='fullBody'>
            <h1>Truck Collection</h1>
            <TruckAdd/>
            <TruckDatagridComponent/>
            
        </div>
    )
}

export default TruckContainer;