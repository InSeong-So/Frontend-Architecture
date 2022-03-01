export default class Application {
  public sampleDataGenerator: SampleDataGenerator;

  constructor(...rest: any[]) {
    this.init();
  }

  public init() {
    this.sampleDataGenerator.generate();
  }

  public run(application: Application, args: any[]) {
    console.log('execute');
  }

  public start(...args: any[]): void {
    try {
      this.run(this, args);
    } catch (error) {
      console.log(error);
    }
  }
}
