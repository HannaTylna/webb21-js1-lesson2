/*
DRY - Dont Repeat Yourself
*/
function Greeting(name) {
    console.log(`Hej ${name}`)
}

Greeting("Hassan")
Greeting("John")
Greeting("Jane")
Greeting("Doe")


function areaOfCircle(radius){
    if(radius > 0){
        return radius*radius*Math.PI
    } else {
        return 0
    }
    
}

function areaOfRectangle(width, height) {
    return width * height
}

function fahrenheitToCelsius(fahrenheit){
    return(5/9)*(fahrenheit - 32)
}

console.log(areaOfCircle(1))
console.log(areaOfRectangle(3, 9))
console.log(fahrenheitToCelsius(100))

/*
camel case - areaOfCircle
pascal case/title case - AreaOfCircle
Capital Case - AREA_OF_CIRCLE
snake case - area_of_circle
kebab case - area-of-circle
*/
