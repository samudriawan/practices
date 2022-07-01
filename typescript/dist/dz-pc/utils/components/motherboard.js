"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motherboard = void 0;
class Motherboard {
    constructor(model, formFactor, wifi) {
        this._motherboard = {
            model: '',
            formFactor: '',
            wifi: '',
        };
        (this._motherboard.model = model),
            (this._motherboard.formFactor = formFactor),
            (this._motherboard.wifi = wifi);
    }
    get Motherboard() {
        return this._motherboard;
    }
}
exports.Motherboard = Motherboard;
//# sourceMappingURL=motherboard.js.map