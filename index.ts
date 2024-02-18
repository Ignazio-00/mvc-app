// index.ts
import { Model } from "./model/Model";
import { View } from "./view/View";
import { Logger } from "./logger/Logger";
import { Injector } from "./injector/Injector";
import { AppConfig } from "./config/AppConfig";
import { Controller } from "./controller/Controller";

// Create instances
const model = new Model();
const view = new View();
const logger = new Logger();
const injector = new Injector();

// Register dependencies
injector.register(Model, model);
injector.register(View, view);
injector.register(Logger, logger);

// Resolve dependencies
const resolvedModel = injector.resolve<Model>(Model);
const resolvedView = injector.resolve<View>(View);
const resolvedLogger = injector.resolve<Logger>(Logger);

// Create AppConfig
const appConfig: AppConfig = {
  logger: resolvedLogger,
};

// Create Controller
const controller = new Controller(resolvedModel, resolvedView, appConfig);

// Start the app
controller.greetUser();
