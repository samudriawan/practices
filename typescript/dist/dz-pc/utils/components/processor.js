"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processor = void 0;
const processors = [
    {
        brand: "Intel",
        series: 'I5-10400F',
        numberCores: 6,
    },
    {
        brand: "Intel",
        series: 'I7-12700K',
        numberCores: 12,
    },
    {
        brand: "Intel",
        series: 'I9-12900K',
        numberCores: 16,
    },
    {
        brand: "AMD",
        series: 'Ryzen 5 5600G',
        numberCores: 6,
    },
    {
        brand: "AMD",
        series: 'Ryzen 5 5600X',
        numberCores: 6,
    },
    {
        brand: "AMD",
        series: 'Ryzen 7 5800X',
        numberCores: 8,
    },
];
class Processor {
    constructor(brand, series) {
        this.brand = brand;
        this.series = series;
    }
    GetProcessor() {
        let cpuIndex = 0;
        if (this.brand === "Intel") {
            cpuIndex = processors.findIndex((cpu) => cpu.brand === "Intel" && cpu.series === this.series);
        }
        if (this.brand === "AMD") {
            cpuIndex = processors.findIndex((cpu) => cpu.brand === "AMD" && cpu.series === this.series);
        }
        return processors[cpuIndex];
    }
}
exports.Processor = Processor;
//# sourceMappingURL=processor.js.map