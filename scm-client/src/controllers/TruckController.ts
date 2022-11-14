import { Truck } from '../type/Truck';
import axios from 'axios';

const truckApi = 'http://localhost:8080/api/truck'

export async function getTruckData(): Promise<any> {
    const truckResponse = await axios.get(truckApi);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    return truckResponse.data;
    }
}

// axios post request to add new truck
export async function postTruckData(truck: Truck): Promise<any> {
    const truckResponse = await axios.post('/api/truck', truck);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    console.log(truckResponse.data);
    return truckResponse.data;
    }
}

// axios put request to update truck by id
export async function putTruckData(truck: Truck): Promise<any> {
    const truckResponse = await axios.put(`/api/truck/${truck.id}`, truck);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    console.log(truckResponse.data);
    return truckResponse.data;
    }
}

// axios delete request to delete truck id
export async function deleteTruckData(truck: Truck): Promise<any> {
    const truckResponse = await axios.delete(`http://localhost:8080/api/truck/${truck.id}`);
    console.log(truck.id);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    console.log(truckResponse.data);
    return truckResponse.data;
    }
}

// export async function getTruckData(): Promise<any> {
//     const truckResponse = await fetch('/api/truck');
//     if(!truckResponse.ok) {
//         throw new Error(truckResponse.statusText);
//     } else {
//         return truckResponse.json();
//     }
// }