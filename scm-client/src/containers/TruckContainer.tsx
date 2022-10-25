import {useState, useEffect, FC} from 'react';
import TruckDatagridComponent from '../components/TruckDatagridComponent';
import styles from './truckContainer.module.css'; 

const TruckContainer:FC=props=> {
    return(
        <div className='fullBody'>
            <h1>SCM Application</h1>
            
            <TruckDatagridComponent/>
            
        </div>
    )
}

export default TruckContainer;