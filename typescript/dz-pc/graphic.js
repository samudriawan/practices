"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGpuDetails = void 0;
var partModel_1 = require("./partModel");
var Series;
(function (Series) {
    Series["igp"] = "Ryzen 5 5600G";
    Series["rtx3050"] = "GeForce RTX 3050";
    Series["rtx3060"] = "GeForce RTX 3060";
    Series["rtx3060ti"] = "GeForce RTX 3060 Ti";
})(Series || (Series = {}));
var graphic = [
    {
        model: Series.igp,
        brand: partModel_1.Brand.amd,
    },
    {
        model: Series.rtx3050,
        brand: partModel_1.Brand.nvidia,
    },
    {
        model: Series.rtx3060,
        brand: partModel_1.Brand.nvidia,
    },
    {
        model: Series.rtx3060ti,
        brand: partModel_1.Brand.nvidia,
    },
];
var getGpuDetails = function (series) {
    var gpuIndex;
    switch (series) {
        case 'igp':
            gpuIndex = graphic.findIndex(function (gpu) { return gpu.model === Series.igp; });
            break;
        case 'rtx3050':
            gpuIndex = graphic.findIndex(function (gpu) { return gpu.model === Series.rtx3050; });
            break;
        case 'rtx3060':
            gpuIndex = graphic.findIndex(function (gpu) { return gpu.model === Series.rtx3060; });
            break;
        case 'rtx3060ti':
            gpuIndex = graphic.findIndex(function (gpu) { return gpu.model === Series.rtx3060ti; });
            break;
        // default:
        // 	return 'processor series not found!';
    }
    return graphic[gpuIndex];
};
exports.getGpuDetails = getGpuDetails;
// console.log(getGpuDetails('rtx3060ti'));
//# sourceMappingURL=graphic.js.map