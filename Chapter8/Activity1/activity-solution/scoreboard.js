"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwtTokenAuth = function (target, propertyKey, descriptor) {
    var originalFunction = descriptor.value;
    descriptor.value = function (request) {
        if (request && request.token) {
            var bindedOriginalFunction = originalFunction.bind(this);
            var result = bindedOriginalFunction(request);
            return result;
        }
        else {
            throw new Error("Not authenticated");
        }
    };
    return descriptor;
};
var Scoreboard = /** @class */ (function () {
    function Scoreboard(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
    Scoreboard.prototype.render = function () {
        return "<div>" + this.homeTeam + " vs " + this.awayTeam + "</div>";
    };
    __decorate([
        jwtTokenAuth
    ], Scoreboard.prototype, "render", null);
    return Scoreboard;
}());
exports.default = Scoreboard;
