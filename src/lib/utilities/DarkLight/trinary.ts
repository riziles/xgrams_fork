import { TrinaryValue } from './trinary.d';

export class Trinary {
	public value = TrinaryValue.false;

	constructor(value: number) {
		this.value = Math.abs(value % 3);
	}
	/**
	 * toggle false -> true -> neither -> false ...
	 */
	public toggleForward() {
		this.value = Math.abs((this.value + 1) % 3);
	}
	/**
	 * toggleBack false -> neither -> true -> false ...
	 */
	public toggleBack() {
		this.value = Math.abs((this.value + 2) % 3);
	}
}
