'use strict';
function trafficLights(){
    let colors = ["red", "yellow", "green"];
    let counter = -1;
    if(counter == -1){
        for(let i = 0; i <= 2; i++){
            console.log(colors[i + 1]);
            ++counter;
        }
    }
    if(counter == 2){
        for(let i = 2; i >= 0; i--){
            console.log(colors[i - 1]);
            --counter;
        }
    }
} 