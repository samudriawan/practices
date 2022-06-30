import {
	getCpuDetails,
	getGpuDetails,
	ICpu,
	IGraphic,
	CpuSeries,
	GraphicModel,
	Brand,
} from './index';

class Computer {
	public constructor(private cpu: ICpu, private gpu: IGraphic) {}

	public getCpu() {
		const { brand, series, numberCores } = this.cpu;
		return `PROCESSOR\nBrand: ${brand}\nSeries: ${series}\nNumber of Cores: ${numberCores}`;
	}

	public getGraphic() {
		const { model, brand } = this.gpu;
		return `GRAPHIC\nModel: ${model}\nChipset Manufacturer: ${brand}`;
	}
}

const Cpu = getCpuDetails(Brand.intel, CpuSeries.i5);
const Gpu = getGpuDetails(GraphicModel.rtx3050);

const starterPC = new Computer(Cpu, Gpu);
console.log(starterPC.getCpu());
console.log(starterPC.getGraphic());
