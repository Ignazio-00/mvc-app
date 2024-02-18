"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var readline = require("readline");
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.askForName = function () {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return new Promise(function (resolve) {
            rl.question("Enter your name: ", function (name) {
                rl.close();
                resolve(name || "");
            });
        });
    };
    return View;
}());
exports.View = View;
