"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scoreboard_js_1 = require("./../scoreboard.js");
require("jasmine");
describe("scoreboard with decorator validation", function () {
    it("should throw an error if the scoreboard's render method isn't passed a JWT token", function () {
        var scoreboard = new scoreboard_js_1.default("Blue Jays", "Mariners");
        expect(function () {
            scoreboard.render();
        }).toThrow(new Error("Not authenticated"));
    });
    it("should render content when a jwt token is sent with the request", function () {
        var scoreboard = new scoreboard_js_1.default("Blue Jays", "Mariners");
        expect(function () {
            scoreboard.render({ token: "somelongcode" });
        }).toThrow(new Error("Not authenticated"));
    });
});
