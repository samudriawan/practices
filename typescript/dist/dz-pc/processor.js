"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCpuDetails = void 0;
const processors = [
    {
        brand: "Intel",
        series: "I5-10400F",
        numberCores: 6,
    },
    {
        brand: "Intel",
        series: "I7-12700K",
        numberCores: 12,
    },
    {
        brand: "Intel",
        series: "I9-12900K",
        numberCores: 16,
    },
    {
        brand: "AMD",
        series: "Ryzen 5 5600G",
        numberCores: 6,
    },
    {
        brand: "AMD",
        series: "Ryzen 5 5600X",
        numberCores: 6,
    },
    {
        brand: "AMD",
        series: "Ryzen 7 5800X",
        numberCores: 8,
    },
];
const getCpuDetails = (brand, series) => {
    let cpu = [];
    let cpuIndex = 0;
    cpu = selectCpuBrand(brand);
    cpuIndex = getCpuSeries(cpu, series);
    return cpu[cpuIndex];
};
exports.getCpuDetails = getCpuDetails;
const selectCpuBrand = (brand) => {
    let cpu = [];
    if (brand === "Intel")
        return (cpu = processors.filter((cpu) => cpu.brand === "Intel"));
    if (brand === "AMD")
        return (cpu = processors.filter((cpu) => cpu.brand === "AMD"));
    return cpu;
};
const getCpuSeries = (cpu, series) => {
    let cpuArray = cpu;
    let cpuIndex = 0;
    switch (series) {
        case "I5-10400F":
            cpuIndex = cpuArray.findIndex((cpu) => cpu.series === "I5-10400F");
            break;
        case "I7-12700K":
            cpuIndex = cpuArray.findIndex((cpu) => cpu.series === "I7-12700K");
            break;
        case "I9-12900K":
            cpuIndex = cpuArray.findIndex((cpu) => cpu.series === "I9-12900K");
            break;
        case "Ryzen 5 5600G":
            cpuIndex = cpuArray.findIndex((cpu) => cpu.series === "Ryzen 5 5600G");
            break;
        case "Ryzen 5 5600X":
            cpuIndex = cpuArray.findIndex((cpu) => cpu.series === "Ryzen 5 5600X");
            break;
        case "Ryzen 7 5800X":
            cpuIndex = cpuArray.findIndex((cpu) => cpu.series === "Ryzen 7 5800X");
            break;
    }
    return cpuIndex;
};
//# sourceMappingURL=processor.js.map