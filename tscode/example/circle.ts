class Circle{
    color:String;
    radius:number;
    constructor(color:String,radius:number){
        this.color=color,
        this.radius=radius;
    }
    
}
function showCricle(circle:Circle) {
        console.log("Color "+circle.color+" radius:"+circle.radius);
}