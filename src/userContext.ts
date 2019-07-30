
import Registry from './lib/_registry'
import Path from 'path'
import * as Types from './_types'


class UserContext implements Types.UserContext{
	private sitectx: any
	private _requiremode: number

	constructor(sitectx) {
		this.sitectx = sitectx;
	}

	async require(name: string, version: string, file?: string): Promise<any> {
		var file1
		file1 = (await this.resolve(name, version, file))
		return require(file1)
	}

	async resolve(name: string, version:string, file?:string): Promise<string> {
		var file1, mod1, reg
		reg = new Registry()
		mod1 = (await reg.resolve(name, version))
		file1 = mod1.folder
		if (file) {
			file1 = Path.join(mod1.folder, file)
		}else{
			file1= mod1.main 
		}
		return file1
	}

	getHomeDir(): string {
		return this.sitectx.getHomeDir();
	}

	setRequireMode(mode:number): this {
		this._requiremode = mode
		return this
	}

};

export default UserContext
