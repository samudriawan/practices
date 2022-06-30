"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGpuDetails = void 0;
const graphic = [
    {
        model: "Ryzen 5 5600G",
        brand: "AMD",
    },
    {
        model: "GeForce RTX 3050",
        brand: "NVIDIA",
    },
    {
        model: "GeForce RTX 3060",
        brand: "NVIDIA",
    },
    {
        model: "GeForce RTX 3060 Ti",
        brand: "NVIDIA",
    },
];
const getGpuDetails = (series) => {
    let gpuIndex = 0;
    switch (series) {
        case "Ryzen 5 5600G":
            gpuIndex = graphic.findIndex((gpu) => gpu.model === "Ryzen 5 5600G");
            break;
        case "GeForce RTX 3050":
            gpuIndex = graphic.findIndex((gpu) => gpu.model === "GeForce RTX 3050");
            break;
        case "GeForce RTX 3060":
            gpuIndex = graphic.findIndex((gpu) => gpu.model === "GeForce RTX 3060");
            break;
        case "GeForce RTX 3060 Ti":
            gpuIndex = graphic.findIndex((gpu) => gpu.model === "GeForce RTX 3060 Ti");
            break;
    }
    return graphic[gpuIndex];
};
exports.getGpuDetails = getGpuDetails;
//# sourceMappingURL=graphic.js.map