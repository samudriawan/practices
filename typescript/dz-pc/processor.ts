import { Brand, ICpu, CpuSeries } from './partModel';

const processors: ICpu[] = [
	{
		brand: Brand.intel,
		series: CpuSeries.i5,
		numberCores: 6,
	},
	{
		brand: Brand.intel,
		series: CpuSeries.i7,
		numberCores: 12,
	},
	{
		brand: Brand.intel,
		series: CpuSeries.i9,
		numberCores: 16,
	},
	{
		brand: Brand.amd,
		series: CpuSeries.r5g,
		numberCores: 6,
	},
	{
		brand: Brand.amd,
		series: CpuSeries.r5,
		numberCores: 6,
	},
	{
		brand: Brand.amd,
		series: CpuSeries.r7,
		numberCores: 8,
	},
];

export const getCpuDetails = (brand: string, series: string) => {
	let cpu: ICpu[] = [];
	let cpuIndex: number = 0;

	cpu = selectCpuBrand(brand);
	cpuIndex = getCpuSeries(cpu, series);

	return cpu[cpuIndex];
};

const selectCpuBrand = (brand: string): ICpu[] => {
	let cpu: ICpu[] = [];
	if (brand === Brand.intel)
		return (cpu = processors.filter((cpu) => cpu.brand === Brand.intel));
	if (brand === Brand.amd)
		return (cpu = processors.filter((cpu) => cpu.brand === Brand.amd));
	return cpu;
};

const getCpuSeries = (cpu: ICpu[], series: string): number => {
	let cpuArray: ICpu[] = cpu;
	let cpuIndex: number = 0;

	switch (series) {
		case CpuSeries.i5:
			cpuIndex = cpuArray.findIndex((cpu) => cpu.series === CpuSeries.i5);
			break;
		case CpuSeries.i7:
			cpuIndex = cpuArray.findIndex((cpu) => cpu.series === CpuSeries.i7);
			break;
		case CpuSeries.i9:
			cpuIndex = cpuArray.findIndex((cpu) => cpu.series === CpuSeries.i9);
			break;
		case CpuSeries.r5g:
			cpuIndex = cpuArray.findIndex((cpu) => cpu.series === CpuSeries.r5g);
			break;
		case CpuSeries.r5:
			cpuIndex = cpuArray.findIndex((cpu) => cpu.series === CpuSeries.r5);
			break;
		case CpuSeries.r7:
			cpuIndex = cpuArray.findIndex((cpu) => cpu.series === CpuSeries.r7);
			break;
	}
	return cpuIndex;
};

// console.log(getCpuDetails(Brand.intel, CpuSeries.i7));
// console.log(getCpuDetails(Brand.amd, CpuSeries.r7));
