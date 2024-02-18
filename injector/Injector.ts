// src/injector/Injector.ts
import { Model } from "../model/Model";
import { View } from "../view/View";
import { Controller } from "../controller/Controller";
import { Logger } from "../logger/Logger";
import { AppConfig } from "../config/AppConfig";

export class Injector {
  private registry: Map<any, any> = new Map();

  register<T>(key: any, value: T): void {
    this.registry.set(key, value);
  }

  resolve<T>(key: any): T {
    return this.registry.get(key);
  }
}
