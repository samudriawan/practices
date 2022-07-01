"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphic = void 0;
const graphics = [
    {
        model: 'Ryzen 5 5600G',
        brand: "AMD",
    },
    {
        model: 'GeForce RTX 3050',
        brand: "NVIDIA",
    },
    {
        model: 'GeForce RTX 3060',
        brand: "NVIDIA",
    },
    {
        model: 'GeForce RTX 3060 Ti',
        brand: "NVIDIA",
    },
];
class Graphic {
    constructor(model) {
        this.model = model;
    }
    getGpuDetails() {
        let gpuIndex = 0;
        switch (this.model) {
            case "Ryzen 5 5600G":
                gpuIndex = graphics.findIndex((gpu) => gpu.model === "Ryzen 5 5600G");
                break;
            case "GeForce RTX 3050":
                gpuIndex = graphics.findIndex((gpu) => gpu.model === "GeForce RTX 3050");
                break;
            case "GeForce RTX 3060":
                gpuIndex = graphics.findIndex((gpu) => gpu.model === "GeForce RTX 3060");
                break;
            case "GeForce RTX 3060 Ti":
                gpuIndex = graphics.findIndex((gpu) => gpu.model === "GeForce RTX 3060 Ti");
                break;
        }
        return graphics[gpuIndex];
    }
}
exports.Graphic = Graphic;
//# sourceMappingURL=graphic.js.map