import { IGraphic, Brand, GraphicModel } from '../index';

const graphics: IGraphic[] = [
	{
		model: 'Ryzen 5 5600G',
		brand: Brand.amd,
	},
	{
		model: 'GeForce RTX 3050',
		brand: Brand.nvidia,
	},
	{
		model: 'GeForce RTX 3060',
		brand: Brand.nvidia,
	},
	{
		model: 'GeForce RTX 3060 Ti',
		brand: Brand.nvidia,
	},
];

export class Graphic {
	constructor(private model: GraphicModel) {}
	public getGpuDetails(): IGraphic {
		let gpuIndex: number = 0;
		switch (this.model) {
			case GraphicModel.igp:
				gpuIndex = graphics.findIndex((gpu) => gpu.model === GraphicModel.igp);
				break;
			case GraphicModel.rtx3050:
				gpuIndex = graphics.findIndex(
					(gpu) => gpu.model === GraphicModel.rtx3050
				);
				break;
			case GraphicModel.rtx3060:
				gpuIndex = graphics.findIndex(
					(gpu) => gpu.model === GraphicModel.rtx3060
				);
				break;
			case GraphicModel.rtx3060ti:
				gpuIndex = graphics.findIndex(
					(gpu) => gpu.model === GraphicModel.rtx3060ti
				);
				break;
		}
		return graphics[gpuIndex];
	}
}

// test
// const starterPC = new Graphic(GraphicModel.igp);
// console.log(starterPC.getGpuDetails());
