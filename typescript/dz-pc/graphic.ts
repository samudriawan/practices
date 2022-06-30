import { Brand, IGraphic, GraphicModel } from './partModel';

const graphic: IGraphic[] = [
	{
		model: GraphicModel.igp,
		brand: Brand.amd,
	},
	{
		model: GraphicModel.rtx3050,
		brand: Brand.nvidia,
	},
	{
		model: GraphicModel.rtx3060,
		brand: Brand.nvidia,
	},
	{
		model: GraphicModel.rtx3060ti,
		brand: Brand.nvidia,
	},
];

export const getGpuDetails = (series: string) => {
	let gpuIndex: number = 0;
	switch (series) {
		case GraphicModel.igp:
			gpuIndex = graphic.findIndex((gpu) => gpu.model === GraphicModel.igp);
			break;
		case GraphicModel.rtx3050:
			gpuIndex = graphic.findIndex((gpu) => gpu.model === GraphicModel.rtx3050);
			break;
		case GraphicModel.rtx3060:
			gpuIndex = graphic.findIndex((gpu) => gpu.model === GraphicModel.rtx3060);
			break;
		case GraphicModel.rtx3060ti:
			gpuIndex = graphic.findIndex(
				(gpu) => gpu.model === GraphicModel.rtx3060ti
			);
			break;
	}
	return graphic[gpuIndex];
};

// console.log(getGpuDetails(GraphicModel.rtx3060ti));
