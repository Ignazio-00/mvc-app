"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var Model_1 = require("./model/Model");
var View_1 = require("./view/View");
var Logger_1 = require("./logger/Logger");
var Injector_1 = require("./injector/Injector");
var Controller_1 = require("./controller/Controller");
// Create instances
var model = new Model_1.Model();
var view = new View_1.View();
var logger = new Logger_1.Logger();
var injector = new Injector_1.Injector();
// Register dependencies
injector.register(Model_1.Model, model);
injector.register(View_1.View, view);
injector.register(Logger_1.Logger, logger);
// Resolve dependencies
var resolvedModel = injector.resolve(Model_1.Model);
var resolvedView = injector.resolve(View_1.View);
var resolvedLogger = injector.resolve(Logger_1.Logger);
// Create AppConfig
var appConfig = {
    logger: resolvedLogger,
};
// Create Controller
var controller = new Controller_1.Controller(resolvedModel, resolvedView, appConfig);
// Start the app
controller.greetUser();
