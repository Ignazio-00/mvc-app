import { Model } from "../model/Model";
import { View } from "../view/View";
import { AppConfig } from "../config/AppConfig";

class Controller {
  private model: Model;
  private view: View;
  private appConfig: AppConfig;

  constructor(model: Model, view: View, appConfig: AppConfig) {
    this.model = model;
    this.view = view;
    this.appConfig = appConfig;
  }

  async greetUser(): Promise<void> {
    const name: string = await this.view.askForName();
    this.model.setName(name);
    const greeting = `Hello, ${this.model.getName()}!`;
    this.appConfig.logger.log(greeting);
  }
}

export { Controller };
