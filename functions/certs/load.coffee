import Os from 'os'
import Path from 'path'
import fs from 'fs'
Fs= core.System.IO.Fs

F= ()->
	global= F.global 


	F.checkFileExists= (path)->
		return new Promise (resolve,reject)->
			fs.access path, fs.F_OK, (error)->
				resolve not error 


	file1= Path.join __dirname, "..", "..", "certs", "ca.crt"
	file2= Path.join global.UserContext.getHomeDir(), "..", "certs", "ca.crt"

	crt1= global.publicContext.crt1= global.publicContext.crt1 or {}
	crt2= global.publicContext.crt2= global.publicContext.crt2 or {}
	ca= require('https').globalAgent.options.ca=require('https').globalAgent.options.ca or []

	
	
	if await F.checkFileExists file1 
		stat= await Fs.async.stat file1 
		if not crt1.mtime or (stat.mtime.getTime() > crt1.mtime)
			crt1.edited= yes 
			crt1.mtime= stat.mtime.getTime()
			crt1.content= await Fs.async.readFile file1, 'utf8'
			crt1.certs= crt1.content.split("-----END CERTIFICATE-----").map (a)-> a + "-----END CERTIFICATE-----"



	if await F.checkFileExists file2
		stat= await Fs.async.stat file2
		if not crt2.mtime or (stat.mtime.getTime() > crt2.mtime)
			crt2.edited= yes 
			crt2.mtime= stat.mtime.getTime()
			crt2.content= await Fs.async.readFile file1, 'utf8'
			crt2.certs= crt1.content.split("-----END CERTIFICATE-----").map (a)-> a + "-----END CERTIFICATE-----"

	defaultca= ca 
	newca= [] 
	if crt1.edited 
		for crt in ca 
			if crt1.content.indexOf(crt) < 0 
				newca.push crt 
		ca= newca 
		newca= []
		crt1.time= Date.now()
	
	if crt2.edited 
		for crt in ca 
			if crt2.content.indexOf(crt) < 0 
				newca.push crt 
		ca= newca 
		crt2.time= Date.now()
	
	if crt1.edited 
		crt1.edited=no
		for crt in crt1.certs 
			ca.push crt 

	if crt2.edited 
		crt2.edited=no
		for crt in crt2.certs 
			ca.push crt 
	
	if ca != defaultca
		require('https').globalAgent.options.ca= ca 
	
	return ca 


module.exports= (global)->
	F.global= global 
	F 



