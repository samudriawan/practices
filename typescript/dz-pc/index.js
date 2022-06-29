"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = exports.getGpuDetails = exports.getIntelCpu = exports.getAmdCpu = void 0;
// computer component
var processor_1 = require("./processor");
Object.defineProperty(exports, "getAmdCpu", { enumerable: true, get: function () { return processor_1.getAmdCpu; } });
Object.defineProperty(exports, "getIntelCpu", { enumerable: true, get: function () { return processor_1.getIntelCpu; } });
var graphic_1 = require("./graphic");
Object.defineProperty(exports, "getGpuDetails", { enumerable: true, get: function () { return graphic_1.getGpuDetails; } });
// part model
var partModel_1 = require("./partModel");
Object.defineProperty(exports, "Brand", { enumerable: true, get: function () { return partModel_1.Brand; } });
//# sourceMappingURL=index.js.map