"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InversifyInjector = void 0;
var inversify_1 = require("inversify");
var Model_1 = require("../model/Model");
var View_1 = require("../view/View");
var Controller_1 = require("../controller/Controller");
var Logger_1 = require("../logger/Logger");
var InversifyInjector = /** @class */ (function () {
    function InversifyInjector() {
        this.container = new inversify_1.Container();
        this.setupBindings();
    }
    InversifyInjector.prototype.setupBindings = function () {
        this.container.bind(Model_1.Model).toSelf();
        this.container.bind(View_1.View).toSelf();
        this.container.bind(Logger_1.Logger).toSelf();
        this.container.bind("AppConfig").toConstantValue({
            logger: this.container.get(Logger_1.Logger),
        });
        this.container.bind(Controller_1.Controller).toSelf();
    };
    InversifyInjector.prototype.resolve = function (key) {
        return this.container.get(key);
    };
    InversifyInjector = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [])
    ], InversifyInjector);
    return InversifyInjector;
}());
exports.InversifyInjector = InversifyInjector;
