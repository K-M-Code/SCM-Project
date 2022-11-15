import { Truck } from '../type/Truck';
import http from "../http-common";

export async function getTruckData(): Promise<any> {
    const truckResponse = await http.get('/truck');
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    return truckResponse.data;
    }
}

export async function getTruckDataById(id:number): Promise<any> {
    const truckResponse = await http.get(`/truck/${id}`);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    return truckResponse;
    }
}

// axios post request to add new truck
export async function postTruckData(truck: Truck): Promise<any> {
    const truckResponse = await http.post('/truck', truck);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    console.log(truckResponse.data);
    return truckResponse.data;
    }
}

// axios put request to update truck by id
export async function updateTruckData(truck: Truck): Promise<any> {
    const truckResponse = await http.put(`/truck/${truck.id}`, truck);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    console.log(truckResponse.data);
    return truckResponse.data;
    }
}

// axios delete request to delete truck id
export async function deleteTruckData(truck: Truck): Promise<any> {
    const truckResponse = await http.delete(`/truck/${truck.id}`);
    console.log(truck.id);
    if(!truckResponse) {
        throw new Error(truckResponse);
    } else {
    console.log(truckResponse.data);
    return truckResponse.data;
    }
}

// axios delete request to delete truck id
export async function deleteTruckDataById(truck: number): Promise<any> {
    const truckResponse = await http.delete(`/truck/${truck}`);
    console.log(truck);
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