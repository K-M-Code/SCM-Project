import { FC } from 'react';
import TruckDatagridComponent from '../components/TruckDatagridComponent';
// import styles from './container.module.css'; 

const TruckContainer:FC=props=> {
    return(
        <div className='fullBody'>
            <h1>Truck Collection</h1>
            
            <TruckDatagridComponent/>
            
        </div>
    )
}

export default TruckContainer;