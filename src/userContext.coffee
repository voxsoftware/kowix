import Registry  from './lib/_registry'
import Os from 'os'
import Path from 'path'


class UserContext
	constructor: (@sitectx)->

	require: (name, version, file)->
		file1= await @resolve(name,version,file)
		return require(file1)

	resolve: (name,version,file)->
		reg= new Registry()
		mod1= await reg.resolve name, version
		file1= mod1.folder
		if file
			file1= Path.join(mod1.folder, file)
		return file1


	getHomeDir:()->
		return @sitectx.getHomeDir()

	setRequireMode: (mode)->
		@_requiremode= mode
		@


export default UserContext
