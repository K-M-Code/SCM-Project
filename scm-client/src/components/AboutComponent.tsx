import { FC } from "react";
import { getKeyValue, saveKeyValue, getMapValue, saveMapValue } from "../controllers/AboutController";

const AboutComponent:FC=()=> {
    saveKeyValue();
    saveMapValue();
    const myArray = JSON.parse(getKeyValue() || '{}');
    const myMap = JSON.parse(getMapValue() || '{}');
    // const key = myMap.keys(1);
  return (
    <div className="about">
      <h1></h1>
      <p>This is the about page.</p>
        {/* <p>Key: {key}</p> */}
        <p>{myArray[0].name}</p>
        <p>{myArray[1].client}</p>
        <p>{myMap[1]}</p>
    </div>
  );
}

export default AboutComponent;