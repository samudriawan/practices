import { getIntelCpu, getGpuDetails, ICpu, IGraphic } from './index';

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

const Cpu = getIntelCpu('i9');
const Gpu = getGpuDetails('rtx3050');

const starterPC = new Computer(Cpu, Gpu);
console.log(starterPC.getCpu());
console.log(starterPC.getGraphic());
