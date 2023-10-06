//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/views/Home.jsx"
import SecondsCounter from "./component/SecondsCounter";
let counter = 0
setInterval(() => {
    let six = Math.floor((counter / 100000) % 10)
    let five = Math.floor((counter / 10000) % 10)
    let four = Math.floor((counter / 1000) % 10)
    let three = Math.floor((counter / 100) % 10)
    let two = Math.floor((counter / 10) % 10)
    let one = Math.floor((counter / 1) % 10)
    console.log(one)
    counter++
    //render your react application
    ReactDOM.render(<SecondsCounter one={one} two={two} three={three} four={four} five={five} six={six} />, document.querySelector("#app"));
}, 1000)

