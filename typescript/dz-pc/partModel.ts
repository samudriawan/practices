type Model = string;
type FormFactor = string;

export enum Brand {
	intel = 'Intel',
	amd = 'AMD',
	nvidia = 'NVIDIA',
	vary = 'Vary',
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
