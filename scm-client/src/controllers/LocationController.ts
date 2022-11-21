import { Location } from '../type/Location';
import http from "./http-common";

export async function getLocationData(): Promise<any> {
    const locationResponse = await http.get('/location');
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    return locationResponse.data;
    }
}

export async function getLocationDataById(id:number): Promise<any> {
    const locationResponse = await http.get(`/location/${id}`);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    return locationResponse;
    }
}

// axios post request to add new location
export async function postLocationData(location: Location): Promise<any> {
    const locationResponse = await http.post('/location', location);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    console.log(locationResponse.data);
    return locationResponse.data;
    }
}

// axios put request to update location id
export async function updateLocationData(location: Location): Promise<any> {
    const locationResponse = await http.put(`/location/${location.id}`, location);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    console.log(locationResponse.data);
    return locationResponse.data;
    }
}

// axios delete request to delete location
export async function deleteLocationData(location: Location): Promise<any> {
    const locationResponse = await http.delete(`/location/${location.id}`);
    if(!locationResponse) {
        throw new Error(locationResponse);
    } else {
    console.log(locationResponse.data);
    return locationResponse.data;
    }
}

// axios delete request to delete location id
export async function deleteLocationDataById(location: number): Promise<any> {
    const locationResponse = await http.delete(`/location/${location}`);
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