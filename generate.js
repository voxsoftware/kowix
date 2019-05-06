
import 'https://kwx.kodhe.com/x/v/0.4.0/std/coffeescript/register'
import 'https://kwx.kodhe.com/x/v/0.4.0/std/coffeescript/cson/register'
import Compiler from 'https://kwx.kodhe.com/x/v/0.4.0/std/package/production/compiler.js'
import Path from 'path'
import fs from 'https://kwx.kodhe.com/x/v/0.4.0/std/fs/mod.js'
var createTarball
import fsextra from 'npm://fs-extra@^7.x'


// this files generate a .kwa distributable file 
// perfect for applications that needs rely on specific
// versions instead on git repository

init()
async function init() {


	// import generate 
	var body = {}
	body.dirname = __dirname
	body.outputfolder = Path.join(__dirname, ".dist")
	body.distfolder = Path.join(__dirname, "..", "modules", "kowix")
	body.package = Path.join(__dirname, "kawix.json")
	body.name = "kowix.kwa"



	var Generate = await KModule.import('https://kwx.kodhe.com/x/v/0.4.0/std/package/kwa/generate.coffee', {
		force: true
	})
	createTarball = Generate.createTarball


	var modified = await createTarball(Object.assign({}, body, {
		getmodified: true
	}))
	modified = modified.toString()

	var path = Path.join(__dirname, ".dist")
	if (!fs.existsSync(path)) {
		await fs.mkdirAsync(path)
	}

	console.log("Last modified: ", modified)
	path = Path.join(path, modified)
	body.dirname = path
	if (fs.existsSync(path)) {
		return

		await fsextra.remove(path)
	}
	await fs.mkdirAsync(path)


	var compiler = new Compiler()
	compiler.type = 'js'
	compiler.filter = function (a) {
		if (a.startsWith(".dist")) {
			return false
		}
		return true
	}

	compiler.passthrough = function (a) {
		if (a.startsWith("public/") || a.startsWith("public\\")) {
			return true
		}
		return false
	}
	compiler.writeToFolder(path)
	await compiler.generate(__dirname)


	await createTarball(body)
}