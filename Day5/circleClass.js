class Circle{
    constructor(radius, colour){
        this.radius = radius
        this.colour = colour
    }
}

var circle1 =  new Circle (1, 'Red')


function getRadius(){
    console.log(`Radius: ${circle1.radius}`)

}

function setRadius(newRadius){
    circle1.radius = newRadius
    console.log(`Radius: ${circle1.radius}`)
}

function getColor() {
    console.log(`Colour: ${circle1.colour}`)
}

function setColor(newColor){
    circle1.colour = newColor
    console.log(`Colour: ${circle1.colour}`)
}

function toString(){
    console.log(`Circle [radius= ${circle1.radius}, colour= ${circle1.colour}]`)
}

function getArea(){
    area = Math.PI * circle1.radius * circle1.radius
    console.log(`Area: ${area.toFixed(2)}`)
}
function getCircumference(){
    let circumference = 2 * Math.PI * circle1.radius
    console.log(`Circumference: ${circumference.toFixed(2)}`)
}

getRadius()
setRadius(3)
getColor()
setColor('Yellow')
toString()
getArea()
getCircumference()