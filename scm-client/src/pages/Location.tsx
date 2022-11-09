import {FC} from 'react';
import LocationContainer from '../containers/LocationContainer';
import { Helmet } from 'react-helmet';
import LocationMap from '../components/LocationMap';

const TITLE = 'SCM - Location';

const LocationPage:FC=props=> {
    return(
        <div className='fullBody'>
        
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        
        <LocationContainer/>
        {/* <LocationMap/> */}
            
        </div>
    )
}

export default LocationPage;