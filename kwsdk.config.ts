import 'https://kwx.kodhe.com/x/v/0.7.5/std/dist/stdlib'
import '/virtual/@kawix/std/coffeescript/register'
import '/virtual/@kawix/std/coffeescript/cson/register'


export var kawixDynamic= {
    time: 5000
}

export default {
    "name": "kowix",
    "version" : "3.3.0",
    "main": "main",
    "programType": "terminal",
    "desktop": {
        "desktopShortcut": false,
        "id": "org.kodhe.kowix",
        "name": "Kowix Web Server",
        "description": "Kowix Web server",
        "categories": "Development;",
        "icons": {
            "16": "icons/16.png",
            "32": "icons/32.png",
            "48": "icons/48.png",
            "64": "icons/64.png",
            "128": "icons/128.png",
            "256": "icons/256.png",
            "512": "icons/512.png"
        },
        "win32": {
            "folder": "Developer",
            "ico": "icons/kowix.ico",
            "desktopShortcut": false
        }
    }
}
