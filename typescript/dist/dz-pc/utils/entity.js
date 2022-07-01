"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor() {
        this._components = [];
    }
    get Components() {
        return this._components;
    }
    AddComponent(component) {
        this._components.push(component);
        component.Entity = this;
    }
    GetComponent(constr) {
        for (const component of this._components) {
            if (component instanceof constr)
                return component;
        }
        throw new Error(`Component ${constr.name} not found on Entity ${this.constructor.name}`);
    }
    RemoveComponent(constr) {
        let toRemove;
        let index;
        for (let i = 0, c = this._components; i < c.length; i++) {
            const component = this._components[i];
            if (component instanceof constr) {
                toRemove = component;
                index = i;
                break;
            }
        }
        if (toRemove && index) {
            toRemove.Entity = null;
            this._components.splice(index, 1);
        }
    }
    HasComponent(constr) {
        for (const component of this._components) {
            if (component instanceof constr)
                return true;
        }
        return false;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map