// import { Truck } from '../type/Truck';

export async function getTruckData(): Promise<any> {
    const truckResponse = await fetch('/api/truck');
    if(!truckResponse.ok) {
        throw new Error(truckResponse.statusText);
    } else {
        return truckResponse.json();
    }
}