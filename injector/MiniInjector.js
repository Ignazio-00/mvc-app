"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniInjector = void 0;
var MiniInjector = /** @class */ (function () {
    function MiniInjector() {
        this.registry = new Map();
    }
    MiniInjector.prototype.register = function (key, value) {
        this.registry.set(key, value);
    };
    MiniInjector.prototype.resolve = function (key) {
        return this.registry.get(key);
    };
    return MiniInjector;
}());
exports.MiniInjector = MiniInjector;
