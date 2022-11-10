import {FC} from 'react';
import { Helmet } from 'react-helmet';
import AboutComponent from '../components/AboutComponent';


const TITLE = 'SCM - About';

const AboutPage:FC=props=> {
    return(

        <div className='fullBody'>
        
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        
        <h1>About Page</h1>
        <AboutComponent/>
            
        </div>
    )
}

export default AboutPage;