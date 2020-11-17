"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, token) {
        this.token = '';
        this.timeStamp = new Date().getTime();
        this.userName = userName;
        this.token = token;
    }
    User.prototype.logOut = function () {
        this.userName = '';
        this.token = '';
    };
    User.prototype.getUser = function () {
        return {
            userName: this.userName,
            token: this.token,
            createdAt: this.timeStamp
        };
    };
    User.prototype.renewToken = function (newToken) {
        this.token = newToken;
    };
    return User;
}());
var Cashier = /** @class */ (function (_super) {
    __extends(Cashier, _super);
    function Cashier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.float = 0;
        return _this;
    }
    Cashier.prototype.start = function (balance, float) {
        this.balance = balance;
        this.float = float;
    };
    return Cashier;
}(User));
var Inventory = /** @class */ (function (_super) {
    __extends(Inventory, _super);
    // override constructor method, add new prop
    function Inventory(userName, token, products) {
        var _this = 
        // call parent constructor method
        _super.call(this, userName, token) || this;
        _this.products = [];
        // set new prop
        _this.products = products;
        return _this;
    }
    return Inventory;
}(User));
var FloorWorker = /** @class */ (function (_super) {
    __extends(FloorWorker, _super);
    function FloorWorker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.floorStock = [];
        return _this;
    }
    // move product from products array to floorStock array  
    FloorWorker.prototype.CheckOut = function (id) {
        if (this.products.length >= 0) {
            this.floorStock.push(this.products[id]);
        }
    };
    return FloorWorker;
}(Inventory));
// init your basic user
var basicUser = new User('user1', '12345678ttt');
console.log(basicUser);
// init cashier user
var cashUser = new Cashier('user2', '12345678');
console.log(cashUser);
cashUser.start(10, 1.5);
console.log(cashUser);
// init inventory
var iUser = new Inventory('user3', '123456789', [
    'orange', 'mango', 'playStation 2'
]);
console.log(iUser);
// FloorWorker
var fUser = new FloorWorker('user4', '12345678', [
    'orange', 'mango', 'playStation 2'
]);
fUser.CheckOut(0);
console.log(fUser.products);
console.log(fUser.floorStock);
