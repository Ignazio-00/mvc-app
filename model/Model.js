"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model() {
        this.name = "";
    }
    Model.prototype.setName = function (name) {
        this.name = name;
    };
    Model.prototype.getName = function () {
        return this.name;
    };
    return Model;
}());
exports.Model = Model;
