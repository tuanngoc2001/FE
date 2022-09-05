"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const promise_1 = require("./promise");
class Rectangle extends promise_1.Share {
    constructor(x, y, _width, _height) {
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    area() {
        return this._width * this._height;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    setWidth(width) {
        this._width = width;
    }
    setHeight(height) {
        this._height = height;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map