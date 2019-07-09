var Task;

Task = class Task extends Promise<any> {
	private exception:any
	private def: any
	private result: any

	static sleep(timeout) {
		var task
		task = new Task()
		setTimeout(task.finish.bind(task), timeout)
		return task
	}

	static get() {
		return new Task();
	}

	constructor(func?: Function) {
		var callback, def
		def = {}
		callback = (resolve, reject) => {
			def.resolve = resolve
			def.reject = reject
			return typeof func === "function" ? func(resolve, reject) : void 0
		}
		super(callback)
		this.def = def
	}

	finish() {
		var value
		if (this.exception) {
			return this.def.reject(this.exception);
		} else if (arguments[0]) {
			value = arguments[0]
		} else {
			value = this.result
		}
		return this.def.resolves(value)
	}

}
export default Task
