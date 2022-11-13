import { Location } from '../type/Location';
import axios from 'axios';


export async function getLocationData(): Promise<any> {
    const locationResponse = await axios.get('/api/location');
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    return locationResponse.data;
    }
}

// axios post request
export async function postLocationData(location: Location): Promise<any> {
    const locationResponse = await axios.post('/api/location', location);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    console.log(locationResponse.data);
    return locationResponse.data;
    }
}

// axios put request to update location id
export async function putLocationData(location: Location): Promise<any> {
    const locationResponse = await axios.put(`/api/location/${location.id}`, location);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    console.log(locationResponse.data);
    return locationResponse.data;
    }
}

// axios delete request to delete location id
export async function deleteLocationData(location: Location): Promise<any> {
    const locationResponse = await axios.delete(`/api/location/${location.id}`);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    console.log(locationResponse.data);
    return locationResponse.data;
    }
}



// export async function getLocationData(): Promise<any> {
//     const locationResponse = await fetch('/api/location');
//     if(!locationResponse.ok) {
//         throw new Error(locationResponse.statusText);
//     } else {
//         return locationResponse.json();
//     }
// }

// import axios and create function to get, post, update and delete data from API