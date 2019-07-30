var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var apiEndpoints = {};
var apiEndpoint = function (constructor) {
    var className = constructor.name;
    var endpointPath = "/" + className.toLowerCase();
    apiEndpoints[endpointPath] = new constructor();
};
var DevQueries = /** @class */ (function () {
    function DevQueries() {
        this.topics = ["React", "JavaScript", "TypeScript"];
    }
    DevQueries.prototype.get = function () {
        return this.topics;
    };
    DevQueries.prototype.post = function (request) {
        this.topics.push(request.body);
    };
    DevQueries = __decorate([
        apiEndpoint
    ], DevQueries);
    return DevQueries;
}());
var MachineLearningQueries = /** @class */ (function () {
    function MachineLearningQueries() {
        this.topics = ["Python", "Data Science"];
    }
    MachineLearningQueries.prototype.get = function () {
        return this.topics;
    };
    MachineLearningQueries.prototype.post = function (request) {
        this.topics.push(request.body);
    };
    MachineLearningQueries = __decorate([
        apiEndpoint
    ], MachineLearningQueries);
    return MachineLearningQueries;
}());
apiEndpoint(DevQueries);
apiEndpoint(MachineLearningQueries);
console.log(apiEndpoints);
apiEndpoints["/machinelearningqueries"].get(); //?
