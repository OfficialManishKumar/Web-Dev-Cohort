// Let we get any of these input from the user: rainy, sunny, cloudy. And we wann to response the user about carrying umbrella.
function carryingUmbrella(weather){
    if (weather == "rainy"){
        console.log("Don't go Outside because it's raining outside")
    }
    else if (weather == "sunny"){
        console.log("Carry Umbrella, because it's sunny outside and be prevented from UV rays")
    }
    else if (weather == "cloudy"){
        console.log("You can carry umbrella because it might rain")
    }
    else {console.log("Invalid Weather")}
}

carryingUmbrella("rainy")


// Grade calculator

let marks = 10

if (marks >= 90){
    console.log("A+")
}else if (marks >= 80){
    console.log("A")
}else if (marks >= 70){
    console.log("B+")
}else if (marks >= 60){
    console.log("B")
}else if (marks >= 50){
    console.log("C")
}else if (marks >= 40){
    console.log("D")
}else{
    console.log("Fail")
}