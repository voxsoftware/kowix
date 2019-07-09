var Mod;

import fs from './_fs'
import uniqid from '/virtual/@kawix/std/util/uniqid'
import Exception from '../exception'
import pcontext from '../publicContext'

Mod = {
	fs: function() {
		return fs
	},
	/*
	moment: function() {
		return moment;
	},*/
	exception: function() {
		return Exception
	},
	state: function() {
		var ref
		return (ref = pcontext["_kowix"]) != null ? ref : (pcontext["_kowix"] = {})
	},
	gix: async function(name) {
		var cgix, gix, mod, ref, ui
		mod = (await import('/virtual/@kawix/gix/mod'))
		cgix = this.state().gix = (ref = this.state().gix) != null ? ref : {}
		gix = mod.gix
		if (!cgix[name]) {
			ui = new gix(name)
			cgix[name] = ui
			if (!(await ui.requestSingleInstanceLock())) {
				delete cgix[name]
				return
			}
			ui.once("close", function() {
				delete cgix[name]
				return ui = null
			})
		} else {
			ui = cgix[name]
		}
		return ui
	},
	uniqid: function() {
		return uniqid()
	},
	deferred: function() {
		var def
		def = {}
		def.promise = new Promise(function(a, b) {
			def.resolve = a
			return def.reject = b
		})
		return def
	},
	checkFileExists: function(file) {
		var def
		def = this.deferred()
		fs.access(file, fs.constants.F_OK, function(err) {
			return def.resolve(err ? false : true)
		})
		return def.promise
	},
	sleep: function(timeout) {
		var def
		def = this.deferred()
		setTimeout(def.resolve, timeout)
		return def.promise
	},
	reply: function(env, value) {
		var id, nv, val
		if (value instanceof Error) {
			nv = {
				message: value.message,
				code: value.code
			}
			for (id in value) {
				val = value[id]
				nv[id] = val
			}
			return env.reply.code(500).send(nv)
		} else {
			return env.reply.code(200).send(value)
		}
	}
};

export default Mod
export var kawixDynamic = {
	time: 15000
}
