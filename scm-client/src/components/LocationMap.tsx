// import { MarkEmailReadTwoTone } from "@mui/icons-material";
// import { LatLngExpression } from "leaflet";
import { FC, ReactNode, useEffect, useState } from "react";
import {
    MapContainer,
    // TileLayer,
    // useMap,
    Marker,
    Popup
  } from 'react-leaflet';
import { getLocationData } from "../controllers/LocationController";
// import styles from 'LocationMap.module.css';



const LocationMap:FC=()=>{
    const [locationArray, setLocationArray] = useState<Array<any>>();
    useEffect(()=>{
        readLocationData();
    },[]);
    
    type HeaderProps={
        children:JSX.Element;
    };

    async function readLocationData(){
        await getLocationData()
        .catch(console.error)
        .then(response=>{
        response&&response!=null&&setLocationArray(response);
            console.log(JSON.stringify(response));
        })
    }

    
    const markers:ReactNode[]|any =()=>{
        locationArray&&locationArray.map((marker, index)=>{
            return(
                <Marker position={[marker.latitude, marker.longitude]}>
                    <Popup>
                        {marker.name}
                    </Popup>
                </Marker>
            )
        })
    }

    function Header(props: HeaderProps) {
        return <div>{markers}</div>;
    }


    return(
        <div>
            <MapContainer center={[63.10, 21.62]} zoom={11} >
                {/* <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
<Marker position={[63.1, 21.62]}>
      <Popup>
        I am a pop-up!
      </Popup>
  </Marker>                
                {markers}


            </MapContainer>
        </div>
    );
}

export default LocationMap;

// export default function LocationMap() {
//     // Default coordinates set to Oslo central station
//     const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
//     const zoom: number = 15;

//     const [locationArray, setLocationArray] = useState<Array<any>>();


    
  
//     return (
//       <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
//         <TileLayer
//           attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {
//             async function getLocationData(): Promise<any> {
//                 const locationResponse = await fetch('/api/location');
//                 if(!locationResponse.ok) {
//                     throw new Error(locationResponse.statusText);
//                 } else {
//                     return locationResponse.json();
//                 }
//             }

//             locationResponse.map((item, index) => (
//                 <Marker
//                 icon={icon}
//                 key={index}
//                 position={[item.lat, item.lon]}
//                 title={`${item.englishProductName} at ${item.vendor}`}
//                 >
//                 <Popup>
//                     <strong>
//                     {item.englishProductName} at {item.vendor}
//                     </strong>
//                     <br />
//                     <p>
//                     Look for <strong>{item.productName}</strong> on the menu.
//                     </p>
//                     <p>{item.location}</p>
//                     {item.description && <em>{item.description}</em>}
//                 </Popup>
//                 </Marker>
//             ));
//         }
//       </MapContainer>
//     );
//   }


