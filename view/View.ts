import * as readline from "readline";

class View {
  askForName(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question("Enter your name: ", (name) => {
        rl.close();
        resolve(name || "");
      });
    });
  }
}

export { View };
