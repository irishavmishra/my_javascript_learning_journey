// object destructuring


const band = {
    bandName: "sanam",
    famusSong: "zanam zanam",
    placeName: "india"
};


let {bandName, famusSong, ...leftobject} = band;
console.log(bandName);
console.log(famusSong);
console.log(leftobject);