class MiniInjector {
  private registry: Map<any, any> = new Map();

  register<T>(key: any, value: T): void {
    this.registry.set(key, value);
  }

  resolve<T>(key: any): T {
    return this.registry.get(key);
  }
}

export { MiniInjector };