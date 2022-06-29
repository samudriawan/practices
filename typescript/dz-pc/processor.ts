import { Brand, ICpu } from './partModel';

enum Series {
	i5 = 'I5-10400F',
	i7 = 'I7-12700K',
	i9 = 'I9-12900K',
	r5g = 'Ryzen 5 5600G',
	r5 = 'Ryzen 5 5600X',
	r7 = 'Ryzen 7 5800X',
}

const processors: ICpu[] = [
	{
		brand: Brand.intel,
		series: Series.i5,
		numberCores: 6,
	},
	{
		brand: Brand.intel,
		series: Series.i7,
		numberCores: 12,
	},
	{
		brand: Brand.intel,
		series: Series.i9,
		numberCores: 16,
	},
	{
		brand: Brand.amd,
		series: Series.r5g,
		numberCores: 6,
	},
	{
		brand: Brand.amd,
		series: Series.r5,
		numberCores: 6,
	},
	{
		brand: Brand.amd,
		series: Series.r7,
		numberCores: 8,
	},
];

const getCpuDetails = (cpu: ICpu[], series: string) => {
	let cpuIndex: number;
	switch (series) {
		case 'i5':
			cpuIndex = cpu.findIndex((cpu) => cpu.series === Series.i5);
			break;
		case 'i7':
			cpuIndex = cpu.findIndex((cpu) => cpu.series === Series.i7);
			break;
		case 'i9':
			cpuIndex = cpu.findIndex((cpu) => cpu.series === Series.i9);
			break;
		case 'r5g':
			cpuIndex = cpu.findIndex((cpu) => cpu.series === Series.r5g);
			break;
		case 'r5':
			cpuIndex = cpu.findIndex((cpu) => cpu.series === Series.r5);
			break;
		case 'r7':
			cpuIndex = cpu.findIndex((cpu) => cpu.series === Series.r7);
			break;
		// default:
		// 	return 'processor series not found!';
	}
	return cpu[cpuIndex];
};

export const getIntelCpu = (series: string) => {
	const cpu = processors.filter((cpu) => cpu.brand === Brand.intel);
	return getCpuDetails(cpu, series);
};
export const getAmdCpu = (series: string) => {
	const cpu = processors.filter((cpu) => cpu.brand === Brand.amd);
	return getCpuDetails(cpu, series);
};

// console.log(getIntelCpu('i9'));
// console.log(getAmdCpu('r5g'));
