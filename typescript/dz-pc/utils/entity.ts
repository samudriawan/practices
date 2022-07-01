import { IComponent } from './component.h';

type constr<T> = { new (...args: unknown[]): T };

export abstract class Entity {
	protected _components: IComponent[] = [];

	public get Components(): IComponent[] {
		return this._components;
	}

	public AddComponent(component: IComponent): void {
		this._components.push(component);
		component.Entity = this;
	}

	public GetComponent<C extends IComponent>(constr: constr<C>): C {
		for (const component of this._components) {
			if (component instanceof constr) return component as C;
		}
		throw new Error(
			`Component ${constr.name} not found on Entity ${this.constructor.name}`
		);
	}

	public RemoveComponent<C extends IComponent>(constr: constr<C>): void {
		let toRemove: IComponent | undefined;
		let index: number | undefined;

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

	public HasComponent<C extends IComponent>(constr: constr<C>): boolean {
		for (const component of this._components) {
			if (component instanceof constr) return true;
		}
		return false;
	}
}

// somewhere in our game, Player is an Entity:
// class Player extends Entity {}
// const player1 = new Player()

// which has Moving and Dancing Components:
// class MovingComponent implements IComponent {}
// class DancingComponent implements IComponent {}
// player1.AddComponent(new MovingComponent())
// player1.AddComponent(new DancingComponent())

// so, we can access them later on:
// const movingComponent = player1.GetComponent(MovingComponent)
// const dancingComponent = player1.GetComponent(DancingComponent)
