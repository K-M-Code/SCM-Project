import { Routes, Route } from 'react-router-dom';
import LocationPage from '../pages/Location';
import TruckPage from '../pages/Truck';
import HomePage from '../pages/Home';

const scmRoutes =  (
    
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pages/Truck' element={<TruckPage/>}/>
        <Route path='/pages/Location' element={<LocationPage/>}/>
    </Routes>
);

export default scmRoutes;