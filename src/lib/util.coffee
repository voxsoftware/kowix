
import fs from './_fs'
import uniqid from '/virtual/@kawix/std/util/uniqid'
#import moment from './moment'
import Exception from '../exception'
import pcontext from '../publicContext'

Mod=


	fs: ()-> fs

	moment: ()-> moment

	exception: ()->Exception

	state: ()->
		pcontext["_kowix"] ? (pcontext["_kowix"] = {})

	gix: (name)->
		mod= await `import('../lib/gix')`
		cgix= @state().gix= @state().gix ? {}
		gix= mod.gix
		if not cgix[name]
			ui = new gix(name)
			cgix[name]= ui
			if (! await ui.requestSingleInstanceLock())
				delete cgix[name]
				return
			ui.once "close", ()->
				delete cgix[name]
				ui= null
		else
			ui= cgix[name]
		return ui


	uniqid: ()->
		return uniqid()

	deferred: ()->
		def= {}
		def.promise= new Promise (a,b)->
			def.resolve= a
			def.reject= b
		return def

	checkFileExists: (file)->
		def= deferred()
		fs.access file, fs.F_OK, (err)->
			def.resolve(if err then no else yes)
		return def.promise

	sleep: (timeout)->
		def= deferred()
		setTimeout(def.resolve,timeout)
		return def.promise

	reply: (env, value)->
		if value instanceof Error
			nv=
				message: value.message
				code: value.code
			for id,val of value
				nv[id]= val
			return env.reply.code(500).send(nv)
		else
			return env.reply.code(200).send(value)



export default Mod
export kawixDynamic=
	time: 15000
