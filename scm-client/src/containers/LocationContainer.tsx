import { FC } from 'react';
import LocationAdd from '../components/LocationAdd';
import LocationDatagridComponent from '../components/LocationDatagridComponent';
// import styles from './container.module.css'; 

const LocationContainer:FC=props=> {
    return(
        <div className='fullBody'>
            <h1>Location Collection</h1>
            
            <LocationAdd/>
            <LocationDatagridComponent/>
            
        </div>
    )
}

export default LocationContainer;