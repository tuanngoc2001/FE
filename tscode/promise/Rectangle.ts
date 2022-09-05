import {Share} from "./promise"
export class Rectangle extends Share implements IArea{
    
    constructor(x:number,y:number,private _width:number,private _height:number)
    {       
        super(x,y);
    }
    area(): number {
        return this._width* this._height;
    }
    getWidth()
    {
        return this._width;
    }
    getHeight()
    {
        return this._height;
    }
    setWidth(width:number)
    {
        this._width=width;
    }
    setHeight(height:number)
    {
        this._height=height;
    }
}
interface IArea{
    area():number;
}