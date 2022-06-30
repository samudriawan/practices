type Model = string;
type FormFactor = string;

export const enum Brand {
	intel = 'Intel',
	amd = 'AMD',
	nvidia = 'NVIDIA',
	vary = 'Vary',
}

export const enum CpuSeries {
	i5 = 'I5-10400F',
	i7 = 'I7-12700K',
	i9 = 'I9-12900K',
	r5g = 'Ryzen 5 5600G',
	r5 = 'Ryzen 5 5600X',
	r7 = 'Ryzen 7 5800X',
}

export const enum GraphicModel {
	igp = 'Ryzen 5 5600G',
	rtx3050 = 'GeForce RTX 3050',
	rtx3060 = 'GeForce RTX 3060',
	rtx3060ti = 'GeForce RTX 3060 Ti',
}

export interface ICpu {
	brand: Brand;
	series: string;
	numberCores: number;
}

export interface IGraphic {
	model: Model;
	brand: Brand;
}

export interface IMotherboard {
	model: Model;
	formFactor: FormFactor;
	wifi?: boolean;
}

export interface IMemory {
	model: Model;
	capacity: string;
	speed: string;
	interface: string;
}

export interface IPower {
	model: Model;
	wattage: number;
	formFactor: FormFactor;
	rating: string;
}

export interface ICase {
	model: Model;
	motherboardSupport: string;
	frontIo: string;
}

export interface ICooler {
	model: Model;
}
