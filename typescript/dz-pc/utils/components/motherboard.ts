import { IMotherboard } from '../part.h';

export class Motherboard {
	public _motherboard: IMotherboard = {
		model: '',
		formFactor: '',
		wifi: '',
	};

	constructor(model: string, formFactor: string, wifi: string) {
		(this._motherboard.model = model),
			(this._motherboard.formFactor = formFactor),
			(this._motherboard.wifi = wifi);
	}

	public get Motherboard(): IMotherboard {
		return this._motherboard;
	}
}

// test
// const starterPC = new Motherboard('ASUS B560', 'ATX', 'Included');
// console.log(starterPC.Motherboard);
