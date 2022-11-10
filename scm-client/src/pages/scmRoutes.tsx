import { Routes, Route } from 'react-router-dom';
import LocationPage from './Location';
import TruckPage from './Truck';
import HomePage from './Home';
import AboutPage from './About';

const scmRoutes =  (
    
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pages/Truck' element={<TruckPage/>}/>
        <Route path='/pages/Location' element={<LocationPage/>}/>
        <Route path='/pages/About' element={<AboutPage/>}/>
    </Routes>
);

export default scmRoutes;