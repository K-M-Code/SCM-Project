import {FC} from 'react';
import TruckContainer from '../containers/TruckContainer';
import { Helmet } from 'react-helmet';

const TITLE = 'SCM - Truck';

const TruckPage:FC=props=> {
    return(
        <div className='fullBody'>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>        

        
        <TruckContainer/>

            
        </div>
    )
}

export default TruckPage;