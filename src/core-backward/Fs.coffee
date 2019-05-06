
import fs from '../lib/_fs'
Fs=
	async: {}
	sync: {}


names= Object.keys(fs)
for name in names
	if name.endsWith("Async")
		Fs.async[name.substring(0,name.length-5)]= fs[name]
	else if name.endsWith("Sync")
		Fs.sync[name.substring(0,name.length-4)]= fs[name]


export default Fs
