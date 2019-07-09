

export default class Database {
	private sitectx : any
	private _db: any
	constructor(sitectx) {
		this.sitectx = sitectx;
	}

	table(name) {
		return this.collection(name);
	}

	async collection(name) {
		var constants;
		if (!this._db) {
			constants = this.sitectx.constants;
			this._db = (await this.sitectx.userFunction("database.init").invoke(constants));
		}
		return (await this._db.table(name));
	}

}


