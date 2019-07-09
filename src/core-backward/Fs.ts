var Fs, i, len, name, names;
import fs from '../lib/_fs'
Fs = {
	async: {},
	sync: {}
}

names = Object.keys(fs)
for (i = 0, len = names.length; i < len; i++) {
	name = names[i]
	if (name.endsWith("Async")) {
		Fs.async[name.substring(0, name.length - 5)] = fs[name]
	} else if (name.endsWith("Sync")) {
		Fs.sync[name.substring(0, name.length - 4)] = fs[name]
	}
}

export default Fs
