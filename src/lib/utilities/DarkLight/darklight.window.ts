import type { TrinaryValue } from './trinary';
// export interface OSDarkLightChangedFunc {
// 	(): void;
// }

export interface DarkLightWindow extends Window {
	userDarkLight: TrinaryValue;
	// osDarkLightChanged: OSDarkLightChangedFunc;
}
