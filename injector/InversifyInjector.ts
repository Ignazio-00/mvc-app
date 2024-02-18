import { Container, injectable } from "inversify";
import { Model } from "../model/Model";
import { View } from "../view/View";
import { Controller } from "../controller/Controller";
import { AppConfig } from "../config/AppConfig";
import { Logger } from "../logger/Logger";

@injectable()
class InversifyInjector {
  container: Container;

  constructor() {
    this.container = new Container();
    this.setupBindings();
  }

  private setupBindings(): void {
    this.container.bind<Model>(Model).toSelf();
    this.container.bind<View>(View).toSelf();
    this.container.bind<Logger>(Logger).toSelf();
    this.container.bind<AppConfig>("AppConfig").toConstantValue({
      logger: this.container.get<Logger>(Logger),
    });
    this.container.bind<Controller>(Controller).toSelf();
  }

  resolve<T>(key: any): T {
    return this.container.get<T>(key);
  }
}

export { InversifyInjector };
