var F, Fs;

import Os from 'os'
import Path from 'path'
import fs from 'fs'

declare var core 
Fs = core.System.IO.Fs

F = async function() {
	var ca, crt, crt1, crt2, defaultca, file1, file2, global, i, j, k, l, len, len1, len2, len3, newca, ref, ref1, stat;
	global = F.global;
	F.checkFileExists = function(path) {
		return new Promise(function(resolve, reject) {
			return fs.access(path, fs.constants.F_OK, function(error) {
				return resolve(!error);
			});
		});
	};
	file1 = Path.join(__dirname, "..", "..", "certs", "ca.crt");
	file2 = Path.join(global.UserContext.getHomeDir(), "..", "certs", "ca.crt");
	crt1 = global.publicContext.crt1 = global.publicContext.crt1 || {};
	crt2 = global.publicContext.crt2 = global.publicContext.crt2 || {};
	ca = require('https').globalAgent.options.ca = require('https').globalAgent.options.ca || [];
	if ((await F.checkFileExists(file1))) {
		stat = (await Fs.async.stat(file1));
		if (!crt1.mtime || (stat.mtime.getTime() > crt1.mtime)) {
			crt1.edited = true;
			crt1.mtime = stat.mtime.getTime();
			crt1.content = (await Fs.async.readFile(file1, 'utf8'));
			crt1.certs = crt1.content.split("-----END CERTIFICATE-----").map(function(a) {
				return a + "-----END CERTIFICATE-----";
			});
		}
	}
	if ((await F.checkFileExists(file2))) {
		stat = (await Fs.async.stat(file2));
		if (!crt2.mtime || (stat.mtime.getTime() > crt2.mtime)) {
			crt2.edited = true;
			crt2.mtime = stat.mtime.getTime();
			crt2.content = (await Fs.async.readFile(file1, 'utf8'));
			crt2.certs = crt1.content.split("-----END CERTIFICATE-----").map(function(a) {
				return a + "-----END CERTIFICATE-----";
			});
		}
	}
	defaultca = ca;
	newca = [];
	if (crt1.edited) {
		for (i = 0, len = ca.length; i < len; i++) {
			crt = ca[i];
			if (crt1.content.indexOf(crt) < 0) {
				newca.push(crt);
			}
		}
		ca = newca
		newca = []
		crt1.time = Date.now()
	}
	if (crt2.edited) {
		for (j = 0, len1 = ca.length; j < len1; j++) {
			crt = ca[j]
			if (crt2.content.indexOf(crt) < 0) {
				newca.push(crt)
			}
		}
		ca = newca
		crt2.time = Date.now()
	}
	if (crt1.edited) {
		crt1.edited = false
		ref = crt1.certs
		for (k = 0, len2 = ref.length; k < len2; k++) {
			crt = ref[k]
			ca.push(crt)
		}
	}
	if (crt2.edited) {
		crt2.edited = false
		ref1 = crt2.certs
		for (l = 0, len3 = ref1.length; l < len3; l++) {
			crt = ref1[l]
			ca.push(crt)
		}
	}
	if (ca !== defaultca) {
		require('https').globalAgent.options.ca = ca
	}
	return ca
};

module.exports = function(global) {
	F.global = global
	return F
}
