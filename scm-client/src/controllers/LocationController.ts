// import { Location } from '../type/Location';

export async function getLocationData(): Promise<any> {
    const locationResponse = await fetch('/api/location');
    if(!locationResponse.ok) {
        throw new Error(locationResponse.statusText);
    } else {
        return locationResponse.json();
    }
}