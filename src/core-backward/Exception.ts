var Exception

Exception = class Exception extends Error {
	code: string 
	static create(message, innerException) {
		var e;
		e = new Exception(message);
		if (innerException) {
			e.innerException = innerException;
		}
		return e;
	}

	putCode(code) {
		return this.code = code;
	}

	putStack(stack) {
		return this.stack = stack;
	}

	putMessage(message) {
		return this.message = message;
	}

	raise() {
		throw this;
	}

}
export default Exception
