"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAmdCpu = exports.getIntelCpu = void 0;
var partModel_1 = require("./partModel");
var Series;
(function (Series) {
    Series["i5"] = "I5-10400F";
    Series["i7"] = "I7-12700K";
    Series["i9"] = "I9-12900K";
    Series["r5g"] = "Ryzen 5 5600G";
    Series["r5"] = "Ryzen 5 5600X";
    Series["r7"] = "Ryzen 7 5800X";
})(Series || (Series = {}));
var processors = [
    {
        brand: partModel_1.Brand.intel,
        series: Series.i5,
        numberCores: 6,
    },
    {
        brand: partModel_1.Brand.intel,
        series: Series.i7,
        numberCores: 12,
    },
    {
        brand: partModel_1.Brand.intel,
        series: Series.i9,
        numberCores: 16,
    },
    {
        brand: partModel_1.Brand.amd,
        series: Series.r5g,
        numberCores: 6,
    },
    {
        brand: partModel_1.Brand.amd,
        series: Series.r5,
        numberCores: 6,
    },
    {
        brand: partModel_1.Brand.amd,
        series: Series.r7,
        numberCores: 8,
    },
];
var getCpuDetails = function (cpu, series) {
    var cpuIndex;
    switch (series) {
        case 'i5':
            cpuIndex = cpu.findIndex(function (cpu) { return cpu.series === Series.i5; });
            break;
        case 'i7':
            cpuIndex = cpu.findIndex(function (cpu) { return cpu.series === Series.i7; });
            break;
        case 'i9':
            cpuIndex = cpu.findIndex(function (cpu) { return cpu.series === Series.i9; });
            break;
        case 'r5g':
            cpuIndex = cpu.findIndex(function (cpu) { return cpu.series === Series.r5g; });
            break;
        case 'r5':
            cpuIndex = cpu.findIndex(function (cpu) { return cpu.series === Series.r5; });
            break;
        case 'r7':
            cpuIndex = cpu.findIndex(function (cpu) { return cpu.series === Series.r7; });
            break;
        // default:
        // 	return 'processor series not found!';
    }
    return cpu[cpuIndex];
};
var getIntelCpu = function (series) {
    var cpu = processors.filter(function (cpu) { return cpu.brand === partModel_1.Brand.intel; });
    return getCpuDetails(cpu, series);
};
exports.getIntelCpu = getIntelCpu;
var getAmdCpu = function (series) {
    var cpu = processors.filter(function (cpu) { return cpu.brand === partModel_1.Brand.amd; });
    return getCpuDetails(cpu, series);
};
exports.getAmdCpu = getAmdCpu;
// console.log(getIntelCpu('i9'));
// console.log(getAmdCpu('r5g'));
//# sourceMappingURL=processor.js.map