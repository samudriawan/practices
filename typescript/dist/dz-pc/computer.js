"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
const components_1 = require("./utils/components");
class Computer {
    constructor(processor, graphic, motherboard) {
        this.processor = processor;
        this.graphic = graphic;
        this.motherboard = motherboard;
    }
    get Processor() {
        return `PROCESSOR:\nBrand: ${this.processor.brand}\nSeries: ${this.processor.series}\nNumber of Cores: ${this.processor.numberCores}`;
    }
    get Graphic() {
        return `GRAPHIC:\nModel: ${this.graphic.model}\nChipset Manufacturer: ${this.graphic.brand}`;
    }
    get Motherboard() {
        return `MOTHERBOARD:\nModel: ${this.motherboard.model}\nForm Factor: ${this.motherboard.formFactor}\nWi-Fi: ${this.motherboard.wifi}`;
    }
}
exports.Computer = Computer;
const starterPC = new Computer(new components_1.Processor("Intel", "I5-10400F").GetProcessor(), new components_1.Graphic("GeForce RTX 3050").getGpuDetails(), new components_1.Motherboard('ASUS B560', 'ATX', 'Included').Motherboard);
console.log(starterPC.Processor);
console.log(starterPC.Graphic);
console.log(starterPC.Motherboard);
//# sourceMappingURL=computer.js.map