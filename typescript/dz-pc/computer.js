"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Computer = /** @class */ (function () {
    function Computer(cpu, gpu) {
        this.cpu = cpu;
        this.gpu = gpu;
    }
    Computer.prototype.getCpu = function () {
        var _a = this.cpu, brand = _a.brand, series = _a.series, numberCores = _a.numberCores;
        return "PROCESSOR\nBrand: ".concat(brand, "\nSeries: ").concat(series, "\nNumber of Cores: ").concat(numberCores);
    };
    Computer.prototype.getGraphic = function () {
        var _a = this.gpu, model = _a.model, brand = _a.brand;
        return "GRAPHIC\nModel: ".concat(model, "\nChipset Manufacturer: ").concat(brand);
    };
    return Computer;
}());
var Cpu = (0, index_1.getIntelCpu)('i9');
var Gpu = (0, index_1.getGpuDetails)('rtx3050');
var starterPC = new Computer(Cpu, Gpu);
console.log(starterPC.getCpu());
console.log(starterPC.getGraphic());
//# sourceMappingURL=computer.js.map