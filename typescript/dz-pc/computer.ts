import {
	IProcessor,
	IGraphic,
	IMotherboard,
	Brand,
	CpuSeries,
	GraphicModel,
} from './utils';
import { Graphic, Motherboard, Processor } from './utils/components';

export class Computer {
	public constructor(
		public processor: IProcessor,
		public graphic: IGraphic,
		public motherboard: IMotherboard
	) {}

	public get Processor(): string {
		return `PROCESSOR:\nBrand: ${this.processor.brand}\nSeries: ${this.processor.series}\nNumber of Cores: ${this.processor.numberCores}`;
	}

	public get Graphic(): string {
		return `GRAPHIC:\nModel: ${this.graphic.model}\nChipset Manufacturer: ${this.graphic.brand}`;
	}

	public get Motherboard(): string {
		return `MOTHERBOARD:\nModel: ${this.motherboard.model}\nForm Factor: ${this.motherboard.formFactor}\nWi-Fi: ${this.motherboard.wifi}`;
	}
}

// test
const starterPC = new Computer(
	new Processor(Brand.intel, CpuSeries.i5).GetProcessor(),
	new Graphic(GraphicModel.rtx3050).getGpuDetails(),
	new Motherboard('ASUS B560', 'ATX', 'Included').Motherboard
);

console.log(starterPC.Processor);
console.log(starterPC.Graphic);
console.log(starterPC.Motherboard);
