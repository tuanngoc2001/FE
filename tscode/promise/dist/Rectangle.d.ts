import { Share } from "./promise";
export declare class Rectangle extends Share implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, _width: number, _height: number);
    area(): number;
    getWidth(): number;
    getHeight(): number;
    setWidth(width: number): void;
    setHeight(height: number): void;
}
interface IArea {
    area(): number;
}
export {};
