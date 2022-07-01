import { IProcessor, Brand, CpuSeries } from '../index';

const processors: IProcessor[] = [
	{
		brand: Brand.intel,
		series: 'I5-10400F',
		numberCores: 6,
	},
	{
		brand: Brand.intel,
		series: 'I7-12700K',
		numberCores: 12,
	},
	{
		brand: Brand.intel,
		series: 'I9-12900K',
		numberCores: 16,
	},
	{
		brand: Brand.amd,
		series: 'Ryzen 5 5600G',
		numberCores: 6,
	},
	{
		brand: Brand.amd,
		series: 'Ryzen 5 5600X',
		numberCores: 6,
	},
	{
		brand: Brand.amd,
		series: 'Ryzen 7 5800X',
		numberCores: 8,
	},
];

export class Processor {
	constructor(private brand: Brand, private series: CpuSeries) {}
	public GetProcessor(): IProcessor {
		let cpuIndex: number = 0;
		if (this.brand === Brand.intel) {
			cpuIndex = processors.findIndex(
				(cpu) => cpu.brand === Brand.intel && cpu.series === this.series
			);
		}
		if (this.brand === Brand.amd) {
			cpuIndex = processors.findIndex(
				(cpu) => cpu.brand === Brand.amd && cpu.series === this.series
			);
		}
		return processors[cpuIndex];
	}
}

// test
// const starterPC = new Processor(Brand.intel, CpuSeries.i9);
// console.log(starterPC.GetProcessor());
