import Fs from './Fs'
import Exception from './Exception'

import Request from './Request'
import Task from './Task'
import Moment from './Moment'




var core= global.core= global.core || {}
core.System= core.System || {}
core.System.IO = core.System.IO || {}
core.VW = core.VW || {}
core.VW.Http = core.VW.Http || {}

if(!core.System.IO.Fs){
	Object.defineProperty(core.System.IO, "Fs", {
		get: function () { return Fs }
	})
}
if (!core.System.Exception) {
	Object.defineProperty(core.System, "Exception", {
		get: function () { return Exception }
	})
}

if (!core.VW.Http.Request) {
	Object.defineProperty(core.VW.Http, "Request", {
		get: function () { return Request }
	})
}

if (!core.VW.Task) {
	Object.defineProperty(core.VW, "Task", {
		get: function () { return Task }
	})
}

if (!core.VW.Moment) {
	Object.defineProperty(core.VW, "Moment", {
		get: function () { return Moment }
	})
}


export default core
export var kawixDynamic = {
	time: 30000
}
