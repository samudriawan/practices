import { Brand, IGraphic } from './partModel';

enum Series {
	igp = 'Ryzen 5 5600G',
	rtx3050 = 'GeForce RTX 3050',
	rtx3060 = 'GeForce RTX 3060',
	rtx3060ti = 'GeForce RTX 3060 Ti',
}

const graphic: IGraphic[] = [
	{
		model: Series.igp,
		brand: Brand.amd,
	},
	{
		model: Series.rtx3050,
		brand: Brand.nvidia,
	},
	{
		model: Series.rtx3060,
		brand: Brand.nvidia,
	},
	{
		model: Series.rtx3060ti,
		brand: Brand.nvidia,
	},
];

export const getGpuDetails = (series: string) => {
	let gpuIndex: number;
	switch (series) {
		case 'igp':
			gpuIndex = graphic.findIndex((gpu) => gpu.model === Series.igp);
			break;
		case 'rtx3050':
			gpuIndex = graphic.findIndex((gpu) => gpu.model === Series.rtx3050);
			break;
		case 'rtx3060':
			gpuIndex = graphic.findIndex((gpu) => gpu.model === Series.rtx3060);
			break;
		case 'rtx3060ti':
			gpuIndex = graphic.findIndex((gpu) => gpu.model === Series.rtx3060ti);
			break;
		// default:
		// 	return 'processor series not found!';
	}
	return graphic[gpuIndex];
};

// console.log(getGpuDetails('rtx3060ti'));
