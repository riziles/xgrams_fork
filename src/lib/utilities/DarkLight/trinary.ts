export enum TrinaryValue {
	false = 0,
	true,
	neither,
}

export class Trinary {
	value = TrinaryValue.false;

	constructor(value: number) {
		this.value = Math.abs(value % 3);
	}
	/**
	 * toggle false -> true -> neither -> false ...
	 */
	toggleForward(): TrinaryValue {
		this.value = Math.abs((this.value + 1) % 3);
		return this.value;
	}
	/**
	 * toggleBack false -> neither -> true -> false ...
	 */
	toggleBack(): TrinaryValue {
		this.value = Math.abs((this.value + 2) % 3);
		return this.value;
	}
}
