import {Electron} from '/virtual/@kawix/gix/src/electron'
import * as Types from '../../src/typing'
import Os from 'os'
export async function kowixInvoke(local: Types.SiteContext, gui:Electron){

	await gui.bridge.dynamicInvoke(`

		var instance = arguments[0]
		var electron = instance.electron
		var Menu = electron.Menu
		var app = electron.app

		var mainWindow = electron.mainWindow
		var params = arguments[1]

		var subm, template, template2

		subm = [
			{
				label: "About Application",
				selector: "orderFrontStandardAboutPanel:"
			},
			{
				type: "separator"
			},
			{
				label: "Quit",
				accelerator: "CmdOrCtrl+Q",
				click: function () {
					app.isQuiting = true
					return mainWindow.close()
				}
			}
		]


		if (params.platform !== "darwin") {
			subm = [
				{
					label: "Quit",
					accelerator: "CmdOrCtrl+Q",
					click: function () {
						app.isQuiting = true;
						return mainWindow.close();
					}
				}
			];
		}


		template = [
			{
				label: "Application",
				submenu: subm
			},
			{
				label: "Edit",
				submenu: [
					{
						label: "Undo",
						accelerator: "CmdOrCtrl+Z",
						selector: "undo:"
					},
					{
						label: "Redo",
						accelerator: "Shift+CmdOrCtrl+Z",
						selector: "redo:"
					},
					{
						type: "separator"
					},
					{
						label: "Cut",
						accelerator: "CmdOrCtrl+X",
						selector: "cut:"
					},
					{
						label: "Copy",
						accelerator: "CmdOrCtrl+C",
						selector: "copy:"
					},
					{
						label: "Paste",
						accelerator: "CmdOrCtrl+V",
						selector: "paste:"
					},
					{
						label: "Select All",
						accelerator: "CmdOrCtrl+A",
						selector: "selectAll:"
					}
				]
			}
		]

		template2 = [
			{
				label: "Edit",
				submenu: [
					{
						label: "Undo",
						accelerator: "CmdOrCtrl+Z",
						selector: "undo:"
					},
					{
						label: "Redo",
						accelerator: "Shift+CmdOrCtrl+Z",
						selector: "redo:"
					},
					{
						type: "separator"
					},
					{
						label: "Cut",
						accelerator: "CmdOrCtrl+X",
						selector: "cut:"
					},
					{
						label: "Copy",
						accelerator: "CmdOrCtrl+C",
						selector: "copy:"
					},
					{
						label: "Paste",
						accelerator: "CmdOrCtrl+V",
						selector: "paste:"
					},
					{
						label: "Select All",
						accelerator: "CmdOrCtrl+A",
						selector: "selectAll:"
					}
				]
			}
		]




		if (params.platform === "darwin") {
			Menu.setApplicationMenu(Menu.buildFromTemplate(template));
		} else {
			mainWindow.setMenu(Menu.buildFromTemplate(template))
		}
		return null
		
	`, gui.channel.plain({
		platform: Os.platform()
	}))




}
