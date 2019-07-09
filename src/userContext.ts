var UserContext;

import Registry from './lib/_registry';
import Os from 'os';
import Path from 'path';

UserContext = class UserContext {
	private sitectx: any
	private _requiremode: number
	constructor(sitectx) {
		this.sitectx = sitectx;
	}

	async require(name, version, file) {
		var file1;
		file1 = (await this.resolve(name, version, file));
		return require(file1);
	}

	async resolve(name, version, file) {
		var file1, mod1, reg;
		reg = new Registry();
		mod1 = (await reg.resolve(name, version));
		file1 = mod1.folder;
		if (file) {
			file1 = Path.join(mod1.folder, file);
		}
		return file1;
	}

	getHomeDir() {
		return this.sitectx.getHomeDir();
	}

	setRequireMode(mode) {
		this._requiremode = mode;
		return this;
	}

};

export default UserContext;
