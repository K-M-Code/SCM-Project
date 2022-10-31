import {FC} from 'react';
import LocationContainer from '../containers/LocationContainer';
import { Helmet } from 'react-helmet';

const TITLE = 'SCM - Location';

const LocationPage:FC=props=> {
    return(
        <div className='fullBody'>
        
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        
        <LocationContainer/>
            
        </div>
    )
}

export default LocationPage;