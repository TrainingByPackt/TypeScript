"use strict";
exports.__esModule = true;
var _ = require("lodash");
exports.data = {
    batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
    pitcherHotZones: [[3, 2], [-12.2, 3], [10.2, -5]]
};
exports.findMatch = function (batterHotZones, pitcherHotZones) {
    return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
};
exports.data.coordinateMap = exports.findMatch(exports.data.batterHotZones, exports.data.pitcherHotZones);
console.log(exports.data.coordinateMap);
