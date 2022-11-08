import {FC} from 'react';
import { Helmet } from 'react-helmet';


const TITLE = 'SCM - Home';

const HomePage:FC=props=> {
    return(

        <div className='fullBody'>
        
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        
        <h1>Welcome the KM's SCM Project</h1>
            
        </div>
    )
}

export default HomePage;