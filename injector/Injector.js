"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injector = void 0;
var Injector = /** @class */ (function () {
    function Injector() {
        this.registry = new Map();
    }
    Injector.prototype.register = function (key, value) {
        this.registry.set(key, value);
    };
    Injector.prototype.resolve = function (key) {
        return this.registry.get(key);
    };
    return Injector;
}());
exports.Injector = Injector;
