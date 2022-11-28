export function getKeyValue() {
    return localStorage.getItem('array');
}

export function getMapValue() {
    return localStorage.getItem('map');
}

export function saveKeyValue() {

    let array = [];
    const item={name:"Kunal"};
    const item2={client:"Blah"};
    array.push(item);
    array.push(item2);
    return localStorage.setItem('array', JSON.stringify(array));
}

export function saveMapValue() {

    let array = [];
    let map = new Map();
    map.set('Kunal', 'Student');
    map.set('Timo', 'Teacher');
    const item={name:"Kunal"};
    const item2={client:"React"};
    array.push(item);
    array.push(item2);
    return localStorage.setItem('map', JSON.stringify(map));
}