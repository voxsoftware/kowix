import 'https://kwx.kodhe.com/x/v/0.7.8/std/dist/stdlib'

import Path, { parse } from 'path'
import fs from '/virtual/@kawix/std/fs/mod'

main()
// copy to packages folder 
export async function main(){
	let packages = Path.join(__dirname, "..", "..", "packages")
	let kowix = Path.join(packages, "kowix")
	let files = await fs.readdirAsync(kowix)
	files.sort(function(a,b){
		let a1 = a.split(".")
		let b1 = b.split(".")
		if(a1.length < 3){
			if(b1.length < 3) return 0
			return 1 
		}else if(b1.length < 3){
			return -1
		}

		let num1 = (parseInt(a1[0] || "0") * 10000) + (parseInt(a1[1] || "0") * 100) + (parseInt(a1[2] || "0") * 1)
		let num2 = (parseInt(b1[0] || "0") * 10000) + (parseInt(b1[1] || "0") * 100) + (parseInt(b1[2] || "0") * 1)
		return num1 > num2 ? -1 : (num1 < num2 ? 1 : 0)
	})


	let currentver = files[0]
	let newver = ''
	let increment = process.argv[3] || '0.0.1'
	if(currentver.startsWith(".")){
		newver = increment
	}
	else{
		let parts = currentver.split(".")
		if(parts[parts.length-1] == "kwa") parts.pop()
		let parts2 = increment.split(".")
		for(let i=0;i<parts2.length;i++){
			let num = parseInt(parts2[i])
			parts[i] = (parseInt(parts[i]) + num ).toString()
			if(num > 0){
				if (parts[i + 1]) {
					parts[i + 1] = '0'
				}
				if (parts[i + 2]) {
					parts[i + 2] = '0'
				}
			}
		}
		newver = parts.join(".")
	}

	console.info(` Current version: ${currentver}  New version: ${newver}.kwa`)
	console.info(" If you want cancel copy, please push CTRL+C before 3 seconds")
	setTimeout(async function(){
		let dist = Path.join(__dirname, "..", ".dist", "kowix.kwa")
		await fs.copyFileAsync(dist, Path.join(kowix, newver + ".kwa"))
	}, 3000)
	
}