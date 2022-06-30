"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class Computer {
    constructor(cpu, gpu) {
        this.cpu = cpu;
        this.gpu = gpu;
    }
    getCpu() {
        const { brand, series, numberCores } = this.cpu;
        return `PROCESSOR\nBrand: ${brand}\nSeries: ${series}\nNumber of Cores: ${numberCores}`;
    }
    getGraphic() {
        const { model, brand } = this.gpu;
        return `GRAPHIC\nModel: ${model}\nChipset Manufacturer: ${brand}`;
    }
}
const Cpu = (0, index_1.getCpuDetails)("Intel", "I5-10400F");
const Gpu = (0, index_1.getGpuDetails)("GeForce RTX 3050");
const starterPC = new Computer(Cpu, Gpu);
console.log(starterPC.getCpu());
console.log(starterPC.getGraphic());
//# sourceMappingURL=computer.js.map