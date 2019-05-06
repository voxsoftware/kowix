(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
				/******/
};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
			/******/
}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
		/******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

			core.VW.Ecma2015.Regenerator || core.VW.Ecma2015.regeneratorRuntime;
			core.org = core.org || {};
			core.org.voxsoftware = core.org.voxsoftware || {};
			var o = __webpack_require__(1);
			for (var id in o) {
				core.org.voxsoftware[id] = o[id];
			}

			/***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

			var jmgxe2zf4 = function () {
				{
					var RoutesNamespace = function RoutesNamespace() {
						RoutesNamespace.$constructor ? RoutesNamespace.$constructor.apply(this, arguments) : RoutesNamespace.$superClass && RoutesNamespace.$superClass.apply(this, arguments);
					};
					RoutesNamespace.__defineGetter__('BoardRoutes', function () {
						var e;
						return (e = __webpack_require__(2)).default ? e.default : e;
					});
					RoutesNamespace.__defineGetter__('LoginRoutes', function () {
						var e;
						return (e = __webpack_require__(3)).default ? e.default : e;
					});
				}
				return RoutesNamespace;
			};
			var jmgxe2zf2 = function () {
				{
					var InovanexNamespace = function InovanexNamespace() {
						InovanexNamespace.$constructor ? InovanexNamespace.$constructor.apply(this, arguments) : InovanexNamespace.$superClass && InovanexNamespace.$superClass.apply(this, arguments);
					};
					InovanexNamespace.__defineGetter__('Account', function () {
						var e;
						return (e = __webpack_require__(4)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Application', function () {
						var e;
						return (e = __webpack_require__(5)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('BoardController', function () {
						var e;
						return (e = __webpack_require__(6)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('ClientComunication', function () {
						var e;
						return (e = __webpack_require__(7)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Comunication', function () {
						var e;
						return (e = __webpack_require__(8)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Configuracion', function () {
						var e;
						return (e = __webpack_require__(9)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('ConfiguracionController', function () {
						var e;
						return (e = __webpack_require__(10)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('DominioController', function () {
						var e;
						return (e = __webpack_require__(11)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('FormCreateController', function () {
						var e;
						return (e = __webpack_require__(12)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('GeneradorController', function () {
						var e;
						return (e = __webpack_require__(13)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Login', function () {
						var e;
						return (e = __webpack_require__(14)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('LoginController', function () {
						var e;
						return (e = __webpack_require__(15)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('MessageManager', function () {
						var e;
						return (e = __webpack_require__(16)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Messages', function () {
						var e;
						return (e = __webpack_require__(17)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('MiCuentaController', function () {
						var e;
						return (e = __webpack_require__(18)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Player1Controller', function () {
						var e;
						return (e = __webpack_require__(19)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('PlayerController', function () {
						var e;
						return (e = __webpack_require__(20)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('RouteManager', function () {
						var e;
						return (e = __webpack_require__(21)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('Routes', function () {
						return jmgxe2zf4._default || (jmgxe2zf4._default = jmgxe2zf4());
					});
					InovanexNamespace.__defineGetter__('SideNav', function () {
						var e;
						return (e = __webpack_require__(22)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('SquareViewController', function () {
						var e;
						return (e = __webpack_require__(23)).default ? e.default : e;
					});
					InovanexNamespace.__defineGetter__('TemaController', function () {
						var e;
						return (e = __webpack_require__(24)).default ? e.default : e;
					});
				}
				return InovanexNamespace;
			};
			var jmgxe2zg6 = function () {
				{
					var UtilNamespace = function UtilNamespace() {
						UtilNamespace.$constructor ? UtilNamespace.$constructor.apply(this, arguments) : UtilNamespace.$superClass && UtilNamespace.$superClass.apply(this, arguments);
					};
					UtilNamespace.__defineGetter__('Clipboard', function () {
						var e;
						return (e = __webpack_require__(25)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Datetime', function () {
						var e;
						return (e = __webpack_require__(34)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Device', function () {
						var e;
						return (e = __webpack_require__(35)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('JsChannel', function () {
						var e;
						return (e = __webpack_require__(36)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Module', function () {
						var e;
						return (e = __webpack_require__(38)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('ObjectId', function () {
						var e;
						return (e = __webpack_require__(40)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Remote', function () {
						var e;
						return (e = __webpack_require__(41)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Route', function () {
						var e;
						return (e = __webpack_require__(42)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Utilidades', function () {
						var e;
						return (e = __webpack_require__(43)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('Validation', function () {
						var e;
						return (e = __webpack_require__(44)).default ? e.default : e;
					});
					UtilNamespace.__defineGetter__('ValidationException', function () {
						var e;
						return (e = __webpack_require__(45)).default ? e.default : e;
					});
				}
				return UtilNamespace;
			};
			{
				var defaultNamespace = function defaultNamespace() {
					defaultNamespace.$constructor ? defaultNamespace.$constructor.apply(this, arguments) : defaultNamespace.$superClass && defaultNamespace.$superClass.apply(this, arguments);
				};
				defaultNamespace.__defineGetter__('Inovanex', function () {
					return jmgxe2zf2._default || (jmgxe2zf2._default = jmgxe2zf2());
				});
				defaultNamespace.__defineGetter__('Util', function () {
					return jmgxe2zg6._default || (jmgxe2zg6._default = jmgxe2zg6());
				});
			}
			module.exports = defaultNamespace;

			/***/
}),
/* 2 */
/***/ (function (module, exports) {

			function routes(router, app) {
				var routeManager = app.getModule('routemanager');
				router.route('', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.redirect('login'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/board', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/board'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/micuenta', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/micuenta'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/generador', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/generador'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/dominio', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'dominiocontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/square-view'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/player', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/player'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/player-1/:tema', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/player-1'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/player2', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/player2'));
								case 1:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/dominio/nuevo', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'dominiocontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/form-create'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/dominio/:_id', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'dominiocontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/form-create'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/tema', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'Temacontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/square-view'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/tema/nuevo', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'Temacontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/form-create'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/tema/:_id', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'Temacontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/form-create'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/configuracion', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'configuracioncontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/square-view'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/configuracion/nuevo', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'configuracioncontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/form-create'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
				router.route('/configuracion/:_id', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									window.dataModuleName = 'configuracioncontroller';
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/form-create'));
								case 2:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
			}
			exports.routes = routes;

			/***/
}),
/* 3 */
/***/ (function (module, exports) {

			function routes(router, app) {
				var routeManager = app.getModule('routemanager');
				router.route('/login', (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
					return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
						while (1)
							switch (context$1$0.prev = context$1$0.next) {
								case 0:
									context$1$0.next = 2;
									return regeneratorRuntime.awrap(app.getModule('LoginController').validLogin());
								case 2:
									if (!context$1$0.sent) {
										context$1$0.next = 4;
										break;
									}
									return context$1$0.abrupt('return', app.redirect('board'));
								case 4:
									return context$1$0.abrupt('return', routeManager.view(window.idIndex + '/login'));
								case 5:
								case 'end':
									return context$1$0.stop();
							}
					}, null, this);
				}));
			}
			exports.routes = routes;

			/***/
}),
/* 4 */
/***/ (function (module, exports) {

	/* WEBPACK VAR INJECTION */(function (global) {
				var G = core.org.voxsoftware.Inovanex;
				var U = core.org.voxsoftware.Util;
				var $ = global.$;
				{
					var Account = function Account() {
						Account.$constructor ? Account.$constructor.apply(this, arguments) : Account.$superClass && Account.$superClass.apply(this, arguments);
					};
					Account.prototype = Object.create(U.Module.prototype);
					Object.setPrototypeOf ? Object.setPrototypeOf(Account, U.Module) : Account.__proto__ = U.Module;
					Account.prototype.constructor = Account;
					Account.$super = U.Module.prototype;
					Account.$superClass = U.Module;
					Account.prototype.__defineGetter__('registerRules', function () {
						if (!this.$rules) {
							this.$rules = new U.Validation({
								'nombres': '!empty',
								'apellidos': '!empty',
								'correo': 'email'
							});
						}
						return this.$rules;
					});
					Account.prototype.__defineGetter__('register2Rules', function () {
						if (!this.$rules2) {
							this.$rules2 = new U.Validation({
								'id_persona': '!empty',
								'contraseña': '!empty'
							});
						}
						return this.$rules2;
					});
					Object.defineProperty(Account.prototype, 'usuarioActual', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var usuario;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											context$1$0.prev = 0;
											context$1$0.next = 3;
											return regeneratorRuntime.awrap(this.app.remote.get('usuario/actual', { 'fields': 'persona.*,perfil.*,persona.archivo' }));
										case 3:
											usuario = context$1$0.sent;
											this.app.scope.usuarioActual = usuario;
											context$1$0.next = 10;
											break;
										case 7:
											context$1$0.prev = 7;
											context$1$0.t0 = context$1$0['catch'](0);
											throw context$1$0.t0;
										case 10:
											return context$1$0.abrupt('return', usuario);
										case 11:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [[
								0,
								7
							]]);
						})
					});
					Object.defineProperty(Account.prototype, 'register', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (this.app.isForm(args))
												args = this.app.formArgs(args);
											args = this.registerRules.validate(args);
											console.info(args);
											context$1$0.next = 5;
											return regeneratorRuntime.awrap(this.app.remote.post('usuario/registrar', args));
										case 5:
											return context$1$0.abrupt('return', context$1$0.sent);
										case 6:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Account.prototype, 'registerClient', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (this.app.isForm(args))
												args = this.app.formArgs(args);
											args = this.registerRules.validate(args);
											console.info(args);
											context$1$0.next = 5;
											return regeneratorRuntime.awrap(this.app.remote.post('usuario/registrar/cliente', args));
										case 5:
											return context$1$0.abrupt('return', context$1$0.sent);
										case 6:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Account.prototype, 'registerFromPerson', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (this.app.isForm(args))
												args = this.app.formArgs(args);
											args = this.register2Rules.validate(args);
											context$1$0.next = 4;
											return regeneratorRuntime.awrap(this.app.remote.put('usuario', args));
										case 4:
											return context$1$0.abrupt('return', context$1$0.sent);
										case 5:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
				}
				exports.default = Account;
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 5 */
/***/ (function (module, exports) {

	/* WEBPACK VAR INJECTION */(function (global) {
				var $ = core.VW.Web.JQuery;
				var G = core.org.voxsoftware.Inovanex;
				var U = core.org.voxsoftware.Util;
				{
					var Application = function Application() {
						Application.$constructor ? Application.$constructor.apply(this, arguments) : Application.$superClass && Application.$superClass.apply(this, arguments);
					};
					Application.__defineGetter__('current', function () {
						if (!Application.$current)
							Application.$current = new Application();
						return Application.$current;
					});
					Application.prototype.__defineGetter__('configuration', function () {
						return this.getModule('configuracion');
					});
					Object.defineProperty(Application.prototype, 'getParameters', {
						enumerable: false,
						value: function () {
							return this.getModule('routemanager').getParameters();
						}
					});
					Object.defineProperty(Application.prototype, 'awaitPromise', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(promise) {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											context$1$0.next = 2;
											return regeneratorRuntime.awrap(promise);
										case 2:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Application.prototype, 'hashChanged', {
						enumerable: false,
						value: function (f) {
							if (!this.$eventCreated) {
								window.addEventListener('hashchange', function (self$0) {
									return function () {
										var promise;
										if (promise = window.loadingPromise)
											window.loadingPromise = self$0.awaitPromise(window.loadingPromise);
										var args = arguments, self = self$0;
										var g = function () {
											console.log(this.$changed);
											self.$changed.forEach(function (self$0) {
												return function (f) {
													f.apply(self$0, args);
												};
											}(this));
										};
										if (promise)
											promise.then(g);
										else
											g();
									};
								}(this));
								this.$changed = [];
								this.$eventCreated = true;
							}
							this.$changed.push(f);
						}
					});
					Object.defineProperty(Application.prototype, 'getModule', {
						enumerable: false,
						value: function (module) {
							var name = module.toUpperCase();
							if (!this.$cacheNames) {
								this.$cacheNames = {};
								for (var id in G) {
									this.$cacheNames[id.toUpperCase()] = G[id];
									this.$cacheNames[id.toUpperCase()]._name = id;
								}
							}
							if (this.$cacheNames[name])
								return this.create(this.$cacheNames[name]);
						}
					});
					Application.prototype.__defineGetter__('scope', function () {
						var scope = $('body').attr('voxs-scope');
						return core.dynvox.Scope.get(scope);
					});
					Application.prototype.__defineGetter__('currentModule', function () {
						return $('module').text();
					});
					Application.prototype.__defineGetter__('messageManager', function () {
						if (!this.$message)
							this.$message = this.create(G.MessageManager);
						return this.$message;
					});
					Application.prototype.__defineGetter__('apiUrl', function () {
						return global.app.apiUrl;
					});
					Application.prototype.__defineGetter__('uiUrl', function () {
						return global.app.uiUrl;
					});
					Application.prototype.__defineGetter__('assetUrl', function () {
						return global.app.assetUrl;
					});
					Application.prototype.__defineGetter__('routes', function () {
						return window.app.routes;
					});
					Object.defineProperty(Application.prototype, 'beginRequest', {
						enumerable: false,
						value: function (req) {
							if (!req.nowait)
								$('.await-action').attr('disabled', 'disabled');
							var progress = $('.loading-progress');
							progress.removeClass('transitioned');
							progress.css('width', 0);
							$('.loading-container').show();
							progress.addClass('transitioned');
							progress.css('transition-duration', '6s');
							progress.css('width', '80%');
						}
					});
					Object.defineProperty(Application.prototype, 'endRequest', {
						enumerable: false,
						value: function () {
							var progress = $('.loading-progress');
							progress.css('transition-duration', '0.7s');
							progress.css('width', '100%');
							setTimeout(function () {
								$('.loading-container').hide();
							}, 800);
							$('.await-action').removeAttr('disabled');
						}
					});
					Application.prototype.__defineGetter__('remote', function () {
						if (!this.$remote) {
							this.$remote = new U.Remote(this);
							this.$remote.on('request', this.beginRequest.bind(this));
							this.$remote.on('request:complete', this.endRequest.bind(this));
						}
						return this.$remote;
					});
					Application.prototype.__defineGetter__('messageManager', function () {
						if (!this.$message)
							this.$message = this.create(G.MessageManager);
						return this.$message;
					});
					Object.defineProperty(Application.prototype, 'reset', {
						enumerable: false,
						value: function () {
							this.$changed = [];
							if (this.currentModuleO)
								this.currentModuleO.abort();
							var idioma = this.scope.getObservable('idioma');
							var usuarioActual = this.scope.getObservable('usuarioActual');
							this.scope.reset();
							if (usuarioActual)
								this.scope.add(usuarioActual);
							if (idioma)
								this.scope.add(idioma);
						}
					});
					Object.defineProperty(Application.prototype, 'isForm', {
						enumerable: false,
						value: function (form) {
							return typeof form.serialize == 'function';
						}
					});
					Object.defineProperty(Application.prototype, 'formArgs', {
						enumerable: false,
						value: function (form) {
							var data = form.serializeArray();
							var obj = {};
							for (var i = 0; i < data.length; i++) {
								obj[data[i].name] = data[i].value;
							}
							return obj;
						}
					});
					Object.defineProperty(Application.prototype, 'getAssetUrl', {
						enumerable: false,
						value: function (url) {
							return this.assetUrl + url;
						}
					});
					Object.defineProperty(Application.prototype, 'redirect', {
						enumerable: false,
						value: function (route, parameters) {
							return this.getModule('routemanager').redirect(route, parameters);
						}
					});
					Object.defineProperty(Application.prototype, 'cargarConfigSiesNecesario', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var date, config;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											date = Date.now();
											config = global.applicationConfig;
											try {
												if (!config && localStorage)
													config = JSON.parse(localStorage.applicationConfig);
											} catch (e) {
												console.error('Error local storage: ', e);
											}
											if (!(!config || date - config.__date >= 20000)) {
												context$1$0.next = 9;
												break;
											}
											context$1$0.next = 6;
											return regeneratorRuntime.awrap(this.remote.get('config/json', {}));
										case 6:
											config = context$1$0.sent;
											config.__date = Date.now();
											console.info(config);
										case 9:
											global.applicationConfig = config;
											try {
												if (localStorage)
													localStorage.applicationConfig = JSON.stringify(config);
											} catch (e) {
												console.error('Error local storage: ', e);
											}
										case 11:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Application.prototype, 'start', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var module;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											module = this.currentModule;
											console.info('Módulo actual: ', module);
											$('.await-action').attr('disabled', 'disabled');
											if (module) {
												module = this.getModule(module);
												this.currentModuleO = module;
												if (module) {
													if (module.ui)
														module.ui();
												}
											}
											$('form a.button[type=submit]').click(function () {
												var a = $(this);
												a.parents('form').eq(0).submit();
											});
										case 5:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Application.prototype, 'uiRequired', {
						enumerable: false,
						value: function () {
							var inputs = $('.input-field');
							var self = this;
							inputs.each(function () {
								var span, inp = $(this), t;
								t = inp.find('input,select').eq(0);
								if (t.data('required') !== undefined) {
									span = $('<span>');
									span.text(' * ');
									span.addClass('text-color-warn');
									inp.find('label').append(span);
								}
							});
						}
					});
					Object.defineProperty(Application.prototype, 'create', {
						enumerable: false,
						value: function (clase) {
							if (!this.cached)
								this.cached = {};
							if (!this.cached[clase._name])
								this.cached[clase._name] = new clase(this);
							return this.cached[clase._name];
						}
					});
					Object.defineProperty(Application.prototype, 'deleteFromCache', {
						enumerable: false,
						value: function (module) {
							if (this.cached) {
								for (var id in this.cached) {
									if (this.cached[id] == module)
										delete this.cached[id];
								}
							}
						}
					});
					Object.defineProperty(Application.prototype, 'clearCache', {
						enumerable: false,
						value: function () {
							for (var id in this.cached) {
								if (id != 'routemanager')
									delete this.cached[id];
							}
							for (var id in this.$cacheNames) {
								if (id != 'routemanager')
									delete this.$cacheNames[id];
							}
						}
					});
				}
				exports.default = Application;
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 6 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var BoardController = function BoardController() {
					BoardController.$constructor ? BoardController.$constructor.apply(this, arguments) : BoardController.$superClass && BoardController.$superClass.apply(this, arguments);
				};
				BoardController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(BoardController, U.Module) : BoardController.__proto__ = U.Module;
				BoardController.prototype.constructor = BoardController;
				BoardController.$super = U.Module.prototype;
				BoardController.$superClass = U.Module;
				Object.defineProperty(BoardController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										context$1$0.next = 2;
										return regeneratorRuntime.awrap(this.commonUi());
									case 2:
										this.cargarDatosKPI();
									case 3:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(BoardController.prototype, 'cargarDatosKPI', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(BoardController.prototype, '_awaitPromise', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(promise) {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										context$1$0.next = 2;
										return regeneratorRuntime.awrap(promise);
									case 2:
										return context$1$0.abrupt('return', context$1$0.sent);
									case 3:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(BoardController.prototype, 'commonUi', {
					enumerable: false,
					value: function (options) {
						if (this.loading)
							return this.lastPromise = this._awaitPromise(this.lastPromise);
						this.lastPromise = this.__commonUi(options);
						return this.lastPromise;
					}
				});
				Object.defineProperty(BoardController.prototype, '__commonUi', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0($_ref0) {
						var noredirect, userScope, usuario;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										noredirect = $_ref0 ? $_ref0.noredirect : undefined;
										this.loading = true;
										context$1$0.prev = 2;
										userScope = core.dynvox.Scope.get('usuario');
										if (!userScope.getObservable('usuarioActual'))
											userScope.createVariable('usuarioActual', null);
										if (userScope.usuarioActual)
											this.app.scope.usuarioActual = userScope.usuarioActual;
										this.attachEvents();
										context$1$0.prev = 7;
										context$1$0.next = 10;
										return regeneratorRuntime.awrap(this.app.getModule('account').usuarioActual());
									case 10:
										usuario = context$1$0.sent;
										userScope.usuarioActual = usuario;
										if (usuario) {
										}
										context$1$0.next = 20;
										break;
									case 15:
										context$1$0.prev = 15;
										context$1$0.t0 = context$1$0['catch'](7);
										console.error(context$1$0.t0);
										this.loading = false;
										return context$1$0.abrupt('return');
									case 20:
										this.loading = false;
										console.info(noredirect);
										if (!(!usuario && !noredirect)) {
											context$1$0.next = 24;
											break;
										}
										return context$1$0.abrupt('return', this.app.redirect('login'));
									case 24:
										$('.await-action').removeAttr('disabled');
										context$1$0.next = 31;
										break;
									case 27:
										context$1$0.prev = 27;
										context$1$0.t1 = context$1$0['catch'](2);
										console.error(context$1$0.t1);
										this.loading = false;
									case 31:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [
								[
									2,
									27
								],
								[
									7,
									15
								]
							]);
					})
				});
				BoardController.prototype.__defineGetter__('uiPreLoadingImg', function () {
					return $('.pre-loading img');
				});
				BoardController.prototype.__defineGetter__('uiPreLoading', function () {
					return $('.pre-loading');
				});
				Object.defineProperty(BoardController.prototype, 'attachLoading', {
					enumerable: false,
					value: function () {
						var active = true;
					}
				});
				Object.defineProperty(BoardController.prototype, 'clearLoading', {
					enumerable: false,
					value: function () {
						if (this.$loading)
							clearInterval(this.$loading);
						this.uiPreLoading.voxanimate('fadeOut');
					}
				});
				Object.defineProperty(BoardController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
						this.app.getModule('sidenav').attachEvents();
						this.attachLoading();
					}
				});
			}
			exports.default = BoardController;

			/***/
}),
/* 7 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			{
				var ClientComunication = function ClientComunication() {
					ClientComunication.$constructor ? ClientComunication.$constructor.apply(this, arguments) : ClientComunication.$superClass && ClientComunication.$superClass.apply(this, arguments);
				};
				Object.defineProperty(ClientComunication, 'start', {
					enumerable: false,
					value: function () {
						this.comunications = [];
						var iframes = document.getElementsByClassName('radio-player-frame');
						for (var i = 0; i < iframes.length; i++) {
							if (iframes[i].ya)
								continue;
							var comunication = new G.Comunication(iframes[i].contentWindow, iframes[i].id, { top: true });
							iframes[i].ya = true;
							this.comunications.push(comunication);
						}
					}
				});
			}
			exports.default = ClientComunication;

			/***/
}),
/* 8 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			{
				var Comunication = function Comunication() {
					Comunication.$constructor ? Comunication.$constructor.apply(this, arguments) : Comunication.$superClass && Comunication.$superClass.apply(this, arguments);
				};
				Object.defineProperty(Comunication, '$constructor', {
					enumerable: false,
					value: function (window, id, $_ref1) {
						var top = $_ref1 ? $_ref1.top : undefined;
						this.window = window;
						this.id = id;
						this.top = false;
						if (top) {
							this.iframe = document.getElementById(this.id);
							this.div = this.iframe.parentNode;
							this.top = top;
							if (!window)
								window = this.iframe.window;
						}
						this.channel = U.JsChannel.build({
							window: window,
							origin: '*',
							scope: this.id
						});
						if (top) {
							this.bindMethod('changeSize', this._changeSize);
							this.bindMethod('location', this._location);
							this.bindMethod('changeHtml', this._changeHtml);
							this.bindMethod('getHtml', this._getHtml);
							this.bindMethod('attachEvent', this._attachEvent);
							this.bindMethod('forceSize', this._forceSize);
						} else {
							this.location = this.callMethod('location');
							this.locationAsync = this.callMethod('location', true);
							this.attachEvent = this.callMethod('attachEvent');
							this.attachEvent = this.callMethod('attachEvent', true);
							this.changeSize = this.callMethod('changeSize');
							this.changeSizeAsync = this.callMethod('changeSize', true);
							this.changeHtml = this.callMethod('changeHtml');
							this.changeHtmlAsync = this.callMethod('changeHtml', true);
							this.getHtml = this.callMethod('getHtml');
							this.getHtmlAsync = this.callMethod('getHtml', true);
							this.forceSize = this.callMethod('forceSize');
							this.forceSizeAsync = this.callMethod('forceSize', true);
						}
					}
				});
				Object.defineProperty(Comunication.prototype, 'bindMethod', {
					enumerable: false,
					value: function (name, method) {
						this.channel.bind(name, function (self$0) {
							return function () {
								self$0.transaction = arguments[0];
								return method.apply(self$0, Array.prototype.slice.call(arguments, 1));
							};
						}(this));
					}
				});
				Object.defineProperty(Comunication.prototype, 'callMethod', {
					enumerable: false,
					value: function (name, aSync) {
						if (aSync) {
							return function (self$0) {
								return function () {
									var task = new core.VW.Task();
									self$0.channel.call({
										method: name,
										params: arguments.length > 1 ? arguments : arguments[0],
										error: function (err) {
											task.exception = err;
											task.finish();
										},
										success: function (data) {
											task.result = data;
											task.finish();
										}
									});
									return task;
								};
							}(this);
						} else {
							return function (self$0) {
								return function () {
									var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
									var callback = arguments[arguments.length - 1];
									self$0.channel.call({
										method: name,
										params: args.length > 1 ? args : args[0],
										error: function (err) {
											callback(err);
										},
										success: function (data) {
											callback(null, data);
										}
									});
								};
							}(this);
						}
					}
				});
				Object.defineProperty(Comunication.prototype, '_attachEvent', {
					enumerable: false,
					value: function ($_ref2) {
						var event = $_ref2 ? $_ref2.event : undefined, callback = $_ref2 ? $_ref2.callback : undefined;
						if (document.addEventListener) {
							document.addEventListener('event', callback, false);
						} else if (document.attachEvent) {
							document.attachEvent('event', callback);
						}
					}
				});
				Object.defineProperty(Comunication.prototype, '_changeSize', {
					enumerable: false,
					value: function ($_ref3) {
						var width = $_ref3 ? $_ref3.width : undefined, height = $_ref3 ? $_ref3.height : undefined;
						if (height)
							this.div.style.height = height;
						if (width)
							this.div.style.width = width;
					}
				});
				Object.defineProperty(Comunication.prototype, '_forceSize', {
					enumerable: false,
					value: function ($_ref4) {
						var force = $_ref4 ? $_ref4.force : undefined, width = $_ref4 ? $_ref4.width : undefined, height = $_ref4 ? $_ref4.height : undefined;
						var c = this.div.classList;
						if (force || height) {
							force = true;
							!c.contains('force-size-height') && c.add('force-size');
						}
						if (force || width) {
							force = true;
							!c.contains('force-size-width') && c.add('force-size');
						} else if (!force) {
							c.remove('force-size-width');
							c.remove('force-size-height');
						}
					}
				});
				Object.defineProperty(Comunication.prototype, '_location', {
					enumerable: false,
					value: function () {
						return location;
					}
				});
				Object.defineProperty(Comunication.prototype, '_changeHtml', {
					enumerable: false,
					value: function (html) {
						this.div.innerHTML = html;
					}
				});
				Object.defineProperty(Comunication.prototype, '_getHtml', {
					enumerable: false,
					value: function () {
						return this.div.innerHTML;
					}
				});
			}
			exports.default = Comunication;

			/***/
}),
/* 9 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			var L = core.org.voxsoftware.Locale;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var Configuracion = function Configuracion() {
					Configuracion.$constructor ? Configuracion.$constructor.apply(this, arguments) : Configuracion.$superClass && Configuracion.$superClass.apply(this, arguments);
				};
				Configuracion.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(Configuracion, U.Module) : Configuracion.__proto__ = U.Module;
				Configuracion.prototype.constructor = Configuracion;
				Configuracion.$super = U.Module.prototype;
				Configuracion.$superClass = U.Module;
				Object.defineProperty(Configuracion, '$constructor', {
					enumerable: false,
					value: function () {
						this.idiomaActual = {
							formatException: function (e) {
								return e.message || e.toString();
							}
						};
					}
				});
			}
			exports.default = Configuracion;

			/***/
}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var ConfiguracionController = function ConfiguracionController() {
					ConfiguracionController.$constructor ? ConfiguracionController.$constructor.apply(this, arguments) : ConfiguracionController.$superClass && ConfiguracionController.$superClass.apply(this, arguments);
				};
				ConfiguracionController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(ConfiguracionController, U.Module) : ConfiguracionController.__proto__ = U.Module;
				ConfiguracionController.prototype.constructor = ConfiguracionController;
				ConfiguracionController.$super = U.Module.prototype;
				ConfiguracionController.$superClass = U.Module;
				Object.defineProperty(ConfiguracionController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(ConfiguracionController.prototype, 'getDataForm', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var scope, dataset;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										dataset = {
											'titulo': 'Nuevo',
											'boton': {
												submit: {
													titulo: 'Guardar',
													api: function (data) {
														if (data._id) {
															return 'db/edit';
														} else {
															return 'db';
														}
													},
													method: 'put',
													transform: function (data) {
														if (!data._id) {
															return {
																insert: data,
																options: { tablename: 'configuracion' }
															};
														} else {
															return {
																query: { _id: data._id },
																update: data,
																options: { tablename: 'configuracion' }
															};
														}
													}
												}
											},
											messages: { 'success': 'Se ha guardado la información correctamente' },
											action: { endUrl: 'configuracion' },
											inputs: [
												{
													'label': 'Id',
													'bind': '_id',
													'type': 'text',
													'size': 's12',
													'readonly': true
												},
												{
													'label': 'Clave de encriptación',
													'bind': 'clave',
													'type': 'text',
													'size': 's12'
												}
											]
										};
										if (!(args && args._id)) {
											context$1$0.next = 8;
											break;
										}
										args._id = new U.ObjectId(args._id.toString());
										context$1$0.next = 6;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'configuracion' },
											query: args || {}
										}));
									case 6:
										dataset.data = context$1$0.sent;
										dataset.data = dataset.data ? dataset.data[0] : null;
									case 8:
										return context$1$0.abrupt('return', dataset);
									case 9:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(ConfiguracionController.prototype, 'getData', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var scope, data, d, $_iterator0, $_normal0, $_err0, $_step0, dataset;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										if (!args) {
											args = {};
										}
										args.deleted = { $ne: true };
										context$1$0.next = 5;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'configuracion' },
											query: args || {}
										}));
									case 5:
										data = context$1$0.sent;
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator0 = regeneratorRuntime.values(data), $_normal0 = false;
										context$1$0.prev = 8;
									case 9:
										if (false) {
											context$1$0.next = 18;
											break;
										}
										$_step0 = $_iterator0.next();
										if (!$_step0.done) {
											context$1$0.next = 14;
											break;
										}
										$_normal0 = true;
										return context$1$0.abrupt('break', 18);
									case 14:
										d = $_step0.value;
										d.cid = d._id.toString();
										context$1$0.next = 9;
										break;
									case 18:
										context$1$0.next = 24;
										break;
									case 20:
										context$1$0.prev = 20;
										context$1$0.t0 = context$1$0['catch'](8);
										$_normal0 = false;
										$_err0 = context$1$0.t0;
									case 24:
										try {
											if (!$_normal0 && $_iterator0['return']) {
												$_iterator0['return']();
											}
										} catch (e) {
										}
										if (!$_err0) {
											context$1$0.next = 27;
											break;
										}
										throw $_err0;
									case 27:
										dataset = {
											titulo: 'Configuración',
											boton: {},
											cols: [
												{
													name: 'Clave de encriptación',
													value: 'clave'
												},
												{
													name: 'Fecha actualizado',
													value: 'updated',
													type: 'datetime'
												}
											],
											data: data,
											individualbuttons: [{
												icon: 'fa fa-edit',
												href: 'configuracion/#{d.cid}',
												color: 'color-default color-text'
											}]
										};
										if (data.length == 0) {
											dataset.boton.nuevo = {
												titulo: 'Nuevo',
												href: 'configuracion/nuevo'
											};
										}
										return context$1$0.abrupt('return', dataset);
									case 30:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							8,
							20
						]]);
					})
				});
				Object.defineProperty(ConfiguracionController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
					}
				});
			}
			exports.default = ConfiguracionController;

			/***/
}),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var DominioController = function DominioController() {
					DominioController.$constructor ? DominioController.$constructor.apply(this, arguments) : DominioController.$superClass && DominioController.$superClass.apply(this, arguments);
				};
				DominioController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(DominioController, U.Module) : DominioController.__proto__ = U.Module;
				DominioController.prototype.constructor = DominioController;
				DominioController.$super = U.Module.prototype;
				DominioController.$superClass = U.Module;
				Object.defineProperty(DominioController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(DominioController.prototype, 'getDataForm', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var scope, dataset;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										dataset = {
											'titulo': 'Nuevo dominio',
											'boton': {
												submit: {
													titulo: 'Guardar',
													api: function (data) {
														if (data._id) {
															return 'db/edit';
														} else {
															return 'db';
														}
													},
													method: 'put',
													transform: function (data) {
														if (!data._id) {
															return {
																insert: data,
																options: { tablename: 'dominios' }
															};
														} else {
															return {
																query: { _id: data._id },
																update: data,
																options: { tablename: 'dominios' }
															};
														}
													}
												}
											},
											messages: { 'success': 'Se ha guardado la información correctamente' },
											action: { endUrl: 'dominio' },
											inputs: [
												{
													'label': 'Id',
													'bind': '_id',
													'type': 'text',
													'size': 's12',
													'readonly': true
												},
												{
													'label': 'Nombre',
													'bind': 'nombre',
													'type': 'text',
													'size': 's12'
												},
												{
													'label': 'Dominio',
													'bind': 'dominio',
													'type': 'text',
													'size': 's12'
												}
											]
										};
										if (!(args && args._id)) {
											context$1$0.next = 8;
											break;
										}
										args._id = new U.ObjectId(args._id);
										context$1$0.next = 6;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'dominios' },
											query: args || {}
										}));
									case 6:
										dataset.data = context$1$0.sent;
										dataset.data = dataset.data ? dataset.data[0] : null;
									case 8:
										return context$1$0.abrupt('return', dataset);
									case 9:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(DominioController.prototype, 'getData', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var scope, data, d, $_iterator1, $_normal1, $_err1, $_step1, dataset;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										if (!args) {
											args = {};
										}
										args.deleted = { $ne: true };
										context$1$0.next = 5;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'dominios' },
											query: args || {}
										}));
									case 5:
										data = context$1$0.sent;
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator1 = regeneratorRuntime.values(data), $_normal1 = false;
										context$1$0.prev = 8;
									case 9:
										if (false) {
											context$1$0.next = 18;
											break;
										}
										$_step1 = $_iterator1.next();
										if (!$_step1.done) {
											context$1$0.next = 14;
											break;
										}
										$_normal1 = true;
										return context$1$0.abrupt('break', 18);
									case 14:
										d = $_step1.value;
										d.cid = d._id.toString();
										context$1$0.next = 9;
										break;
									case 18:
										context$1$0.next = 24;
										break;
									case 20:
										context$1$0.prev = 20;
										context$1$0.t0 = context$1$0['catch'](8);
										$_normal1 = false;
										$_err1 = context$1$0.t0;
									case 24:
										try {
											if (!$_normal1 && $_iterator1['return']) {
												$_iterator1['return']();
											}
										} catch (e) {
										}
										if (!$_err1) {
											context$1$0.next = 27;
											break;
										}
										throw $_err1;
									case 27:
										dataset = {
											titulo: 'Dominios',
											boton: {
												nuevo: {
													titulo: 'Nuevo',
													href: 'dominio/nuevo'
												}
											},
											cols: [
												{
													name: 'Nombre',
													value: 'nombre'
												},
												{
													name: 'Dominio',
													value: 'dominio'
												},
												{
													name: 'Fecha',
													value: 'created',
													type: 'datetime'
												}
											],
											data: data,
											individualbuttons: [
												{
													icon: 'fa fa-edit',
													href: 'dominio/#{d.cid}',
													color: 'color-default color-text'
												},
												{
													icon: 'fa fa-times',
													href: '',
													color: 'red text-white',
													type: 'delete',
													transform: function (data) {
														return {
															query: { _id: data._id },
															options: { tablename: 'dominios' }
														};
													},
													uri: 'db'
												}
											]
										};
										return context$1$0.abrupt('return', dataset);
									case 29:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							8,
							20
						]]);
					})
				});
				Object.defineProperty(DominioController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
					}
				});
			}
			exports.default = DominioController;

			/***/
}),
/* 12 */
/***/ (function (module, exports, __webpack_require__) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var FormCreateController = function FormCreateController() {
					FormCreateController.$constructor ? FormCreateController.$constructor.apply(this, arguments) : FormCreateController.$superClass && FormCreateController.$superClass.apply(this, arguments);
				};
				FormCreateController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(FormCreateController, U.Module) : FormCreateController.__proto__ = U.Module;
				FormCreateController.prototype.constructor = FormCreateController;
				FormCreateController.$super = U.Module.prototype;
				FormCreateController.$superClass = U.Module;
				Object.defineProperty(FormCreateController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var module, scope;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										module = window.dataModuleName;
										this.module = this.app.getModule(module);
										this.hashParameters();
										context$1$0.next = 5;
										return regeneratorRuntime.awrap(this.app.getModule('BoardController').commonUi());
									case 5:
										this.attachEvents();
										this.hashChangedPost();
										this.app.hashChanged(this.hashChanged.bind(this));
										scope = this.app.scope;
										if (scope.james) {
											scope.james.push({
												value: '1',
												html: 'Jamses asmdasdas'
											});
										}
									case 10:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(FormCreateController.prototype, 'hashParameters', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						var args = this.hashArgs = this.app.getParameters();
					}
				});
				Object.defineProperty(FormCreateController.prototype, 'hashChangedPost', {
					enumerable: false,
					value: function () {
						this.getData();
					}
				});
				Object.defineProperty(FormCreateController.prototype, 'hashChanged', {
					enumerable: false,
					value: function () {
						this.hashParameters();
						this.hashChangedPost();
					}
				});
				Object.defineProperty(FormCreateController.prototype, 'getData', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope, input, item, data, d, e, i, k, $_iterator2, $_normal2, $_err2, $_step2;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										context$1$0.next = 3;
										return regeneratorRuntime.awrap(this.module.getDataForm(this.hashArgs));
									case 3:
										data = context$1$0.sent;
										d = data.data;
										i = 0;
									case 6:
										if (!(i < data.inputs.length)) {
											context$1$0.next = 39;
											break;
										}
										input = data.inputs[i];
										input['_' + input.type] = true;
										input._readonly = input.readonly ? 'readonly' : undefined;
										input._disabled = input.disabled ? 'disabled' : undefined;
										if (!(input.data instanceof Array)) {
											context$1$0.next = 35;
											break;
										}
										e = new core.dynvox.ObservableList();
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator2 = regeneratorRuntime.values(input.data), $_normal2 = false;
										context$1$0.prev = 15;
									case 16:
										if (false) {
											context$1$0.next = 25;
											break;
										}
										$_step2 = $_iterator2.next();
										if (!$_step2.done) {
											context$1$0.next = 21;
											break;
										}
										$_normal2 = true;
										return context$1$0.abrupt('break', 25);
									case 21:
										k = $_step2.value;
										e.push(k);
										context$1$0.next = 16;
										break;
									case 25:
										context$1$0.next = 31;
										break;
									case 27:
										context$1$0.prev = 27;
										context$1$0.t0 = context$1$0['catch'](15);
										$_normal2 = false;
										$_err2 = context$1$0.t0;
									case 31:
										try {
											if (!$_normal2 && $_iterator2['return']) {
												$_iterator2['return']();
											}
										} catch (e) {
										}
										if (!$_err2) {
											context$1$0.next = 34;
											break;
										}
										throw $_err2;
									case 34:
										input.data = e;
									case 35:
										if (d) {
											input.value = d[input.bind];
										}
									case 36:
										i++;
										context$1$0.next = 6;
										break;
									case 39:
										scope.response = data;
									case 40:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							15,
							27
						]]);
					})
				});
				Object.defineProperty(FormCreateController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope, self = this;
						scope.formSubmit = this.event_formSubmit.bind(this);
						scope.arrayAñadir = function () {
							self.event_arrayAñadir($(this));
						};
					}
				});
				Object.defineProperty(FormCreateController.prototype, 'event_arrayAñadir', {
					enumerable: false,
					value: function (a, ev) {
						var newscope = a.voxscope();
					}
				});
				Object.defineProperty(FormCreateController.prototype, 'event_formSubmit', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(ev) {
						var scope, response, input, i, data, endpoint;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										ev && ev.preventDefault();
										scope = this.app.scope;
										response = scope.response;
										response.data = response.data || {};
										for (i = 0; i < response.inputs.length; i++) {
											input = response.inputs[i];
											response.data[input.bind] = input.value;
										}
										context$1$0.prev = 5;
										data = response.data;
										endpoint = response.boton.submit.api;
										if (typeof endpoint == 'function')
											endpoint = endpoint(data);
										if (response.boton.submit.transform)
											data = response.boton.submit.transform(data);
										context$1$0.next = 12;
										return regeneratorRuntime.awrap(this.app.remote[response.boton.submit.method](endpoint, data));
									case 12:
										this.app.messageManager.info(response.messages.success || 'Se actualizó la información correctamente');
										if (response.action && response.action.end)
											response.action.end();
										else if (response.action && response.action.endUrl)
											this.app.redirect(response.action.endUrl);
										context$1$0.next = 19;
										break;
									case 16:
										context$1$0.prev = 16;
										context$1$0.t0 = context$1$0['catch'](5);
										this.app.messageManager.error(context$1$0.t0.message || context$1$0.t0.toString());
									case 19:
										return context$1$0.abrupt('return', false);
									case 20:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							5,
							16
						]]);
					})
				});
			}
			exports.default = FormCreateController;

			/***/
}),
/* 13 */
/***/ (function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global) {
				var G = core.org.voxsoftware.Inovanex;
				var U = core.org.voxsoftware.Util;
				var $ = core.VW.Web.JQuery;
				{
					var GeneradorController = function GeneradorController() {
						GeneradorController.$constructor ? GeneradorController.$constructor.apply(this, arguments) : GeneradorController.$superClass && GeneradorController.$superClass.apply(this, arguments);
					};
					GeneradorController.prototype = Object.create(U.Module.prototype);
					Object.setPrototypeOf ? Object.setPrototypeOf(GeneradorController, U.Module) : GeneradorController.__proto__ = U.Module;
					GeneradorController.prototype.constructor = GeneradorController;
					GeneradorController.$super = U.Module.prototype;
					GeneradorController.$superClass = U.Module;
					Object.defineProperty(GeneradorController.prototype, 'ui', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											this.attachEvents();
											this.getInfo();
											scope = this.app.scope;
											scope.uiParameters = window.app.uiParameters;
										case 4:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(GeneradorController.prototype, 'getInfo', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope, dominios, temas, domSelect, temSelect, dominio, $_iterator3, $_normal3, $_err3, $_step3, tema, $_iterator4, $_normal4, $_err4, $_step4, padre, $_iterator5, $_normal5, $_err5, $_step5;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											scope.tipoServidor = 'icecast';
											context$1$0.next = 4;
											return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
												options: { tablename: 'dominios' },
												query: { deleted: { $ne: true } }
											}));
										case 4:
											dominios = context$1$0.sent;
											context$1$0.next = 7;
											return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
												options: { tablename: 'temas' },
												query: { deleted: { $ne: true } },
												sort: { _id: 1 }
											}));
										case 7:
											temas = context$1$0.sent;
											domSelect = [{
												selected: true,
												disabled: true,
												value: '',
												text: 'Seleccione una opción'
											}];
											temSelect = [{
												selected: true,
												disabled: true,
												value: '',
												text: 'Seleccione una opción'
											}];
											typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
											$_iterator3 = regeneratorRuntime.values(dominios), $_normal3 = false;
											context$1$0.prev = 12;
										case 13:
											if (false) {
												context$1$0.next = 22;
												break;
											}
											$_step3 = $_iterator3.next();
											if (!$_step3.done) {
												context$1$0.next = 18;
												break;
											}
											$_normal3 = true;
											return context$1$0.abrupt('break', 22);
										case 18:
											dominio = $_step3.value;
											domSelect.push({
												value: dominio._id.toString(),
												text: dominio.dominio
											});
											context$1$0.next = 13;
											break;
										case 22:
											context$1$0.next = 28;
											break;
										case 24:
											context$1$0.prev = 24;
											context$1$0.t0 = context$1$0['catch'](12);
											$_normal3 = false;
											$_err3 = context$1$0.t0;
										case 28:
											try {
												if (!$_normal3 && $_iterator3['return']) {
													$_iterator3['return']();
												}
											} catch (e) {
											}
											if (!$_err3) {
												context$1$0.next = 31;
												break;
											}
											throw $_err3;
										case 31:
											this.temasById = {};
											typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
											$_iterator4 = regeneratorRuntime.values(temas), $_normal4 = false;
											context$1$0.prev = 34;
										case 35:
											if (false) {
												context$1$0.next = 45;
												break;
											}
											$_step4 = $_iterator4.next();
											if (!$_step4.done) {
												context$1$0.next = 40;
												break;
											}
											$_normal4 = true;
											return context$1$0.abrupt('break', 45);
										case 40:
											tema = $_step4.value;
											if (!tema.padre) {
												temSelect.push({
													value: tema._id.toString(),
													text: tema.nombre
												});
											}
											this.temasById[tema._id] = tema;
											context$1$0.next = 35;
											break;
										case 45:
											context$1$0.next = 51;
											break;
										case 47:
											context$1$0.prev = 47;
											context$1$0.t1 = context$1$0['catch'](34);
											$_normal4 = false;
											$_err4 = context$1$0.t1;
										case 51:
											try {
												if (!$_normal4 && $_iterator4['return']) {
													$_iterator4['return']();
												}
											} catch (e) {
											}
											if (!$_err4) {
												context$1$0.next = 54;
												break;
											}
											throw $_err4;
										case 54:
											typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
											$_iterator5 = regeneratorRuntime.values(temas), $_normal5 = false;
											context$1$0.prev = 56;
										case 57:
											if (false) {
												context$1$0.next = 66;
												break;
											}
											$_step5 = $_iterator5.next();
											if (!$_step5.done) {
												context$1$0.next = 62;
												break;
											}
											$_normal5 = true;
											return context$1$0.abrupt('break', 66);
										case 62:
											tema = $_step5.value;
											if (tema.padre) {
												padre = this.temasById[tema.padre];
												padre.hijos = padre.hijos || [];
												padre.hijos.push(tema);
											}
											context$1$0.next = 57;
											break;
										case 66:
											context$1$0.next = 72;
											break;
										case 68:
											context$1$0.prev = 68;
											context$1$0.t2 = context$1$0['catch'](56);
											$_normal5 = false;
											$_err5 = context$1$0.t2;
										case 72:
											try {
												if (!$_normal5 && $_iterator5['return']) {
													$_iterator5['return']();
												}
											} catch (e) {
											}
											if (!$_err5) {
												context$1$0.next = 75;
												break;
											}
											throw $_err5;
										case 75:
											scope.dominios = domSelect;
											scope.temas = temSelect;
										case 77:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [
									[
										12,
										24
									],
									[
										34,
										47
									],
									[
										56,
										68
									]
								]);
						})
					});
					Object.defineProperty(GeneradorController.prototype, 'obtenerColores', {
						enumerable: false,
						value: function () {
							if (!this.colores) {
								var cs = this.app.getModule('Temacontroller').colors;
								var e = new core.dynvox.ObservableList();
								{
									typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
									var k;
									var $_iterator8 = regeneratorRuntime.values(cs), $_normal8 = false, $_err8;
									try {
										while (true) {
											var $_step8 = $_iterator8.next();
											if ($_step8.done) {
												$_normal8 = true;
												break;
											}
											{
												k = $_step8.value;
												e.push(k);
											}
										}
									} catch (e) {
										$_normal8 = false;
										$_err8 = e;
									}
									try {
										if (!$_normal8 && $_iterator8['return']) {
											$_iterator8['return']();
										}
									} catch (e) {
									}
									if ($_err8) {
										throw $_err8;
									}
								}
								this.colores = e;
							}
							var scope = this.app.scope;
							scope.width = scope.tema.width;
							scope.height = scope.tema.height;
							scope.parametros.removeAll();
							var pars = scope.tema.parametros, array, options;
							pars = pars.split(',').map(function (a) {
								var parts = a.split('>');
								var value = parts[1];
								if (value && value.indexOf('@') >= 0)
									value = value.split('@');
								if (value instanceof Array) {
									value = value.map(function (a) {
										var i = a.indexOf('!'), b = a, c = a;
										if (i >= 0) {
											b = a.substring(0, i);
											c = a.substring(i + 1);
										}
										var v = {
											name: b,
											value: c
										};
										return v;
									});
									array = true;
								}
								if (array) {
									options = new core.dynvox.ObservableList();
									options.push({
										selected: true,
										disabled: true,
										value: '',
										text: 'Seleccione una opción'
									});
									for (var i = 0; i < value.length; i++) {
										options.push({
											value: value[i].value,
											text: value[i].name
										});
									}
									value = '';
								}
								return {
									value: value,
									array: array,
									options: options,
									text: parts[0]
								};
							});
							scope.parametros = pars;
							scope.colores.removeAll();
							var tema = scope.tema, color;
							var ncolores = [];
							var posibleIds = [
								'color_0',
								'color_1',
								'color_2',
								'text_color_0',
								'text_color_1',
								'text_color_2'
							];
							var i = 0;
							{
								typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
								var id;
								var $_iterator7 = regeneratorRuntime.values(posibleIds), $_normal7 = false, $_err7;
								try {
									while (true) {
										var $_step7 = $_iterator7.next();
										if ($_step7.done) {
											$_normal7 = true;
											break;
										}
										{
											id = $_step7.value;
											if (tema[id]) {
												i++;
												color = {
													select: this.colores,
													bind: id,
													value: tema[id],
													text: 'Color ' + (id.startsWith('text') ? 'texto' : 'fondo') + ' ' + i.toString()
												};
												scope.colores.push(color);
											}
										}
									}
								} catch (e) {
									$_normal7 = false;
									$_err7 = e;
								}
								try {
									if (!$_normal7 && $_iterator7['return']) {
										$_iterator7['return']();
									}
								} catch (e) {
								}
								if ($_err7) {
									throw $_err7;
								}
							}
						}
					});
					Object.defineProperty(GeneradorController.prototype, 'attachEvents', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							scope.staticBackground = 0;
							this.clipboard = new U.Clipboard($('#clipboard')[0]);
							this.clipboard.on('success', function (self$0) {
								return function () {
									self$0.app.messageManager.info('El texto fue copiado');
								};
							}(this));
							scope.observer.onValueChanged('temaSId', function (self$0) {
								return function (ev) {
									var t = self$0.temasById ? self$0.temasById[ev.value] : null;
									if (!t) {
										scope.tema = null;
										return;
									}
									scope.temaRId = scope.temaSId;
									var change = scope.tema != t;
									scope.tema = t;
									if (change) {
										self$0.obtenerColores();
									}
								};
							}(this));
							scope.observer.onValueChanged('temaId', function (self$0) {
								return function (ev) {
									var t = self$0.temasById ? self$0.temasById[ev.value] : null;
									if (!t) {
										scope.tieneHijos = false;
										scope.tema = null;
										return;
									}
									scope.tieneHijos = !!t.hijos;
									if (t) {
										if (!t.hijos) {
											scope.temaRId = scope.temaId;
											var change = scope.tema != t;
											scope.tema = t;
											if (change) {
												self$0.obtenerColores();
											}
										} else {
											scope.temaRId = 0;
											scope.temas2.removeAll();
											var estilos = [{
												selected: true,
												disabled: true,
												text: 'Seleccione un estilo',
												value: ''
											}];
											{
												typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
												var estilo;
												var $_iterator9 = regeneratorRuntime.values(t.hijos), $_normal9 = false, $_err9;
												try {
													while (true) {
														var $_step9 = $_iterator9.next();
														if ($_step9.done) {
															$_normal9 = true;
															break;
														}
														{
															estilo = $_step9.value;
															estilos.push({
																value: estilo._id.toString(),
																text: estilo.nombre
															});
														}
													}
												} catch (e) {
													$_normal9 = false;
													$_err9 = e;
												}
												try {
													if (!$_normal9 && $_iterator9['return']) {
														$_iterator9['return']();
													}
												} catch (e) {
												}
												if ($_err9) {
													throw $_err9;
												}
											}
											console.info(estilos);
											scope.temas2 = estilos;
											scope.temaSId = t.hijos[0]._id;
										}
									}
								};
							}(this));
							scope.urlGenerated.on('push', function () {
								core.org.voxsoftware.Inovanex.ClientComunication.start();
							});
							scope.generar = this.event_generarClick.bind(this);
						}
					});
					Object.defineProperty(GeneradorController.prototype, 'event_generarClick', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope, pars, args, color, $_iterator6, $_normal6, $_err6, $_step6, encrypted, uid, src, i;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											context$1$0.prev = 1;
											if (scope.tema) {
												context$1$0.next = 4;
												break;
											}
											return context$1$0.abrupt('return', this.app.messageManager.error('Debe seleccionar un tema'));
										case 4:
											if (scope.serverPort) {
												context$1$0.next = 6;
												break;
											}
											return context$1$0.abrupt('return', this.app.messageManager.error('Debo escribir el puerto del servidor'));
										case 6:
											if (scope.dominioId) {
												context$1$0.next = 8;
												break;
											}
											return context$1$0.abrupt('return', this.app.messageManager.error('Debo seleccionar un servidor'));
										case 8:
											pars = scope.parametros.toArray();
											args = {};
											typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
											$_iterator6 = regeneratorRuntime.values(scope.colores), $_normal6 = false;
											context$1$0.prev = 12;
										case 13:
											if (false) {
												context$1$0.next = 22;
												break;
											}
											$_step6 = $_iterator6.next();
											if (!$_step6.done) {
												context$1$0.next = 18;
												break;
											}
											$_normal6 = true;
											return context$1$0.abrupt('break', 22);
										case 18:
											color = $_step6.value;
											args[color.bind] = color.value;
											context$1$0.next = 13;
											break;
										case 22:
											context$1$0.next = 28;
											break;
										case 24:
											context$1$0.prev = 24;
											context$1$0.t0 = context$1$0['catch'](12);
											$_normal6 = false;
											$_err6 = context$1$0.t0;
										case 28:
											try {
												if (!$_normal6 && $_iterator6['return']) {
													$_iterator6['return']();
												}
											} catch (e) {
											}
											if (!$_err6) {
												context$1$0.next = 31;
												break;
											}
											throw $_err6;
										case 31:
											args.args = pars;
											args.port = scope.serverPort;
											args.tipo = scope.tipoServidor;
											args.dominioId = scope.dominioId;
											args.staticBackground = scope.staticBackground;
											context$1$0.next = 38;
											return regeneratorRuntime.awrap(this.app.remote.post('dominio/encriptar', { data: args }));
										case 38:
											encrypted = context$1$0.sent;
											uid = Date.now().toString(24);
											scope.urlGenerated.removeAll();
											src = global.location.href;
											i = src.indexOf('#');
											if (i > 0)
												src = src.substring(0, i);
											src += 's#/player-1#tema=' + scope.tema._id + '&id=' + uid + '&c=' + encodeURIComponent(encrypted.c1) + '&d=' + encodeURIComponent(encrypted.c2);
											scope.urlGenerated = [{
												url: src,
												uid: uid,
												width: scope.width ? scope.width + 'px' : '100%',
												height: scope.height ? scope.height + 'px' : '100%',
												script: global.location.protocol + '//' + global.location.host + '/site/inovanex-player/static/e/0/js/radio.client.js?d=' + parseInt(Date.now() / 3600000),
												otherStyle: (scope.tema.maxwidth ? ';max-width:' + scope.tema.maxwidth + 'px' : '') + (scope.tema.maxheight ? ';max-height:' + scope.tema.maxheight + 'px' : '') + (scope.tema.minwidth ? ';min-width:' + scope.tema.minwidth + 'px' : '') + (scope.tema.minheight ? ';min-height:' + scope.tema.minheight + 'px' : '')
											}];
											scope.htmlGenerado = $('.resultado').html();
											$(window).resize();
											context$1$0.next = 53;
											break;
										case 50:
											context$1$0.prev = 50;
											context$1$0.t1 = context$1$0['catch'](1);
											this.app.messageManager.error(context$1$0.t1.message || context$1$0.t1.toString());
										case 53:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [
									[
										1,
										50
									],
									[
										12,
										24
									]
								]);
						})
					});
				}
				exports.default = GeneradorController;
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 14 */
/***/ (function (module, exports) {

	/* WEBPACK VAR INJECTION */(function (global) {
				var G = core.org.voxsoftware.Inovanex;
				var U = core.org.voxsoftware.Util;
				var $ = global.$;
				{
					var Login = function Login() {
						Login.$constructor ? Login.$constructor.apply(this, arguments) : Login.$superClass && Login.$superClass.apply(this, arguments);
					};
					Login.prototype = Object.create(U.Module.prototype);
					Object.setPrototypeOf ? Object.setPrototypeOf(Login, U.Module) : Login.__proto__ = U.Module;
					Login.prototype.constructor = Login;
					Login.$super = U.Module.prototype;
					Login.$superClass = U.Module;
					Object.defineProperty(Login.prototype, 'exit', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											context$1$0.next = 2;
											return regeneratorRuntime.awrap(this.app.remote.post('token/cerrar', {}));
										case 2:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Login.prototype, 'validLogin', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var data;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											context$1$0.next = 2;
											return regeneratorRuntime.awrap(this.app.remote.post('token/actual', {}));
										case 2:
											data = context$1$0.sent;
											if (!data.token) {
												context$1$0.next = 6;
												break;
											}
											this.app.remote.token = data.token;
											return context$1$0.abrupt('return', true);
										case 6:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(Login.prototype, 'login', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
							var result;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (this.app.isForm(args))
												args = this.app.formArgs(args);
											context$1$0.next = 3;
											return regeneratorRuntime.awrap(this.app.remote.post('token/obtener', args));
										case 3:
											result = context$1$0.sent;
											if (!result.token) {
												context$1$0.next = 9;
												break;
											}
											this.app.remote.token = result.token;
											context$1$0.next = 8;
											return regeneratorRuntime.awrap(this.app.remote.post('token/guardarasesion', result));
										case 8:
											return context$1$0.abrupt('return');
										case 9:
											throw new v.Exception(this.app.configuration.idiomaActual.param('sesion.incorrecto'));
										case 10:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
				}
				exports.default = Login;
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 15 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var LoginController = function LoginController() {
					LoginController.$constructor ? LoginController.$constructor.apply(this, arguments) : LoginController.$superClass && LoginController.$superClass.apply(this, arguments);
				};
				LoginController.prototype = Object.create(G.Login.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(LoginController, G.Login) : LoginController.__proto__ = G.Login;
				LoginController.prototype.constructor = LoginController;
				LoginController.$super = G.Login.prototype;
				LoginController.$superClass = G.Login;
				LoginController.prototype.__defineGetter__('uiForm', function () {
					return $('.login form');
				});
				Object.defineProperty(LoginController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										this.attachEvents();
										$('.await-action').removeAttr('disabled');
									case 2:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(LoginController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						scope.login_submit = this.event_loginSubmit.bind(this);
					}
				});
				Object.defineProperty(LoginController.prototype, 'event_loginSubmit', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(ev) {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										ev.preventDefault();
										context$1$0.prev = 1;
										context$1$0.next = 4;
										return regeneratorRuntime.awrap(this.login(this.uiForm));
									case 4:
										context$1$0.next = 10;
										break;
									case 6:
										context$1$0.prev = 6;
										context$1$0.t0 = context$1$0['catch'](1);
										this.app.messageManager.error(this.app.configuration.idiomaActual.formatException(context$1$0.t0));
										return context$1$0.abrupt('return', false);
									case 10:
										this.app.redirect('board');
										return context$1$0.abrupt('return', false);
									case 12:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							1,
							6
						]]);
					})
				});
			}
			exports.default = LoginController;

			/***/
}),
/* 16 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var MessageManager = function MessageManager() {
					MessageManager.$constructor ? MessageManager.$constructor.apply(this, arguments) : MessageManager.$superClass && MessageManager.$superClass.apply(this, arguments);
				};
				MessageManager.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(MessageManager, U.Module) : MessageManager.__proto__ = U.Module;
				MessageManager.prototype.constructor = MessageManager;
				MessageManager.$super = U.Module.prototype;
				MessageManager.$superClass = U.Module;
				Object.defineProperty(MessageManager.prototype, 'info', {
					enumerable: false,
					value: function () {
						return G.Messages.info.apply(G.Messages, arguments);
					}
				});
				Object.defineProperty(MessageManager.prototype, 'warning', {
					enumerable: false,
					value: function () {
						return G.Messages.warning.apply(G.Messages, arguments);
					}
				});
				Object.defineProperty(MessageManager.prototype, 'error', {
					enumerable: false,
					value: function () {
						var v = G.Messages.error.apply(G.Messages, arguments);
						return v;
					}
				});
				Object.defineProperty(MessageManager.prototype, 'confirmClose', {
					enumerable: false,
					value: function () {
						var m = $('.modal-confirm');
						m.voxmodal()[0].close();
					}
				});
				Object.defineProperty(MessageManager.prototype, 'getDefaults', {
					enumerable: false,
					value: function () {
						var idioma = this.app.configuration.idiomaActual;
						return {
							'confirmText': 'Aceptar',
							'cancelText': 'Cancelar'
						};
					}
				});
				Object.defineProperty(MessageManager.prototype, 'confirm', {
					enumerable: false,
					value: function () {
						arguments[0] = arguments[0] || {};
						arguments[0].defaults = this.getDefaults();
						return G.Messages.confirm.apply(G.Messages, arguments);
					}
				});
			}
			exports.default = MessageManager;

			/***/
}),
/* 17 */
/***/ (function (module, exports) {

			{
				var Message = function Message() {
					Message.$constructor ? Message.$constructor.apply(this, arguments) : Message.$superClass && Message.$superClass.apply(this, arguments);
				};
				Object.defineProperty(Message, '$constructor', {
					enumerable: false,
					value: function (options) {
						this.type = options.type;
						this.msg = options.message;
						this.options = options;
					}
				});
				Object.defineProperty(Message.prototype, 'show', {
					enumerable: false,
					value: function () {
						var type = this.type;
						if (type == 'confirm') {
							return Message.confirm(this.options);
						} else if (type == 'info' || type == 'msg') {
							return Message.info(this.msg);
						} else if (type == 'warning') {
							return Message.warning(this.msg);
						} else if (type == 'error') {
							return Message.error(this.msg);
						}
						throw new core.System.Exception('El tipo no es válido');
					}
				});
				Object.defineProperty(Message, 'createToast', {
					enumerable: false,
					value: function (jtoast, msg) {
						var nj = jtoast.clone();
						nj.text(msg);
						nj.removeClass('template');
						var toast = nj.voxtoast()[0];
						toast.on('close', function () {
							nj.remove();
						});
						toast.open();
					}
				});
				Object.defineProperty(Message, 'info', {
					enumerable: false,
					value: function (msg) {
						var jtoast = $('.info.template');
						console.info('Platform: ', msg);
						return Message.createToast(jtoast, msg);
					}
				});
				Object.defineProperty(Message, 'warning', {
					enumerable: false,
					value: function (msg) {
						var jtoast = $('.warning.template');
						console.warn('Platform: ', msg);
						return Message.createToast(jtoast, msg);
					}
				});
				Object.defineProperty(Message, 'error', {
					enumerable: false,
					value: function (msg) {
						var jtoast = $('.error.template');
						console.error('Platform: ', msg);
						return Message.createToast(jtoast, msg);
					}
				});
				Object.defineProperty(Message, 'confirm', {
					enumerable: false,
					value: function (options) {
						var m = $('.modal-confirm');
						var scope = core.dynvox.Scope.get('default');
						var modalScope = core.dynvox.Scope.get('modal');
						options.text = options.text || options.msg;
						if (!options.confirmText)
							options.confirmText = options.defaults.confirmText;
						if (!options.cancelText)
							options.cancelText = options.defaults.cancelText;
						if (!options.cancel) {
							options.cancel = function () {
								m.voxmodal()[0].close();
							};
						}
						modalScope.modalConfirm = options;
						m.voxmodal()[0].open();
					}
				});
			}
			exports.default = Message;

			/***/
}),
/* 18 */
/***/ (function (module, exports) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var MicuentaController = function MicuentaController() {
					MicuentaController.$constructor ? MicuentaController.$constructor.apply(this, arguments) : MicuentaController.$superClass && MicuentaController.$superClass.apply(this, arguments);
				};
				MicuentaController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(MicuentaController, U.Module) : MicuentaController.__proto__ = U.Module;
				MicuentaController.prototype.constructor = MicuentaController;
				MicuentaController.$super = U.Module.prototype;
				MicuentaController.$superClass = U.Module;
				Object.defineProperty(MicuentaController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										console.info('Module: ' + MicuentaController.name);
										this.attachEvents();
										scope.usuario = {};
										context$1$0.next = 6;
										return regeneratorRuntime.awrap(this.app.getModule('boardcontroller').commonUi());
									case 6:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(MicuentaController.prototype, 'urlOnCreateEnd', {
					enumerable: false,
					value: function () {
						var url = $('redirect[create-end]').text();
						if (url)
							return this.app.redirect(url);
					}
				});
				MicuentaController.prototype.__defineGetter__('uiForm', function () {
					return $('form');
				});
				Object.defineProperty(MicuentaController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						console.info(scope);
						scope.usuario_form_submit = this.event_crearUsuario.bind(this);
					}
				});
				Object.defineProperty(MicuentaController.prototype, 'event_crearUsuario', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(ev) {
						var scope, args;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										ev.preventDefault();
										scope = this.app.scope;
										context$1$0.prev = 2;
										args = this.app.formArgs(this.uiForm);
										if (!(args.contraseña != args.contraseña2)) {
											context$1$0.next = 6;
											break;
										}
										throw new core.System.Exception(this.app.configuration.idiomaActual.param('micuenta.mensajes.contraseñasnocoinciden'));
									case 6:
										context$1$0.next = 8;
										return regeneratorRuntime.awrap(this.editar(args));
									case 8:
										context$1$0.next = 15;
										break;
									case 10:
										context$1$0.prev = 10;
										context$1$0.t0 = context$1$0['catch'](2);
										console.error(context$1$0.t0);
										this.app.messageManager.error(this.app.configuration.idiomaActual.formatException(context$1$0.t0));
										return context$1$0.abrupt('return', false);
									case 15:
										this.app.messageManager.info(this.app.configuration.idiomaActual.comun.mensajes.exito);
										this.urlOnCreateEnd();
										this.uiForm[0].reset();
										return context$1$0.abrupt('return', false);
									case 19:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							2,
							10
						]]);
					})
				});
				Object.defineProperty(MicuentaController.prototype, 'editar', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var d;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										if (this.app.isForm(args))
											args = this.app.formArgs(args);
										context$1$0.next = 3;
										return regeneratorRuntime.awrap(this.app.remote.put('usuario/password', args));
									case 3:
										d = context$1$0.sent;
										return context$1$0.abrupt('return', d);
									case 5:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
			}
			exports.default = MicuentaController;

			/***/
}),
/* 19 */
/***/ (function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global) {
				var G = core.org.voxsoftware.Inovanex;
				var U = core.org.voxsoftware.Util;
				var $ = core.VW.Web.JQuery;
				{
					var PlayerController = function PlayerController() {
						PlayerController.$constructor ? PlayerController.$constructor.apply(this, arguments) : PlayerController.$superClass && PlayerController.$superClass.apply(this, arguments);
					};
					PlayerController.prototype = Object.create(U.Module.prototype);
					Object.setPrototypeOf ? Object.setPrototypeOf(PlayerController, U.Module) : PlayerController.__proto__ = U.Module;
					PlayerController.prototype.constructor = PlayerController;
					PlayerController.$super = U.Module.prototype;
					PlayerController.$superClass = U.Module;
					Object.defineProperty(PlayerController.prototype, 'ui', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											this.proxyUri1 = 'https://proxyserver.inovanex.com/';
											this.proxyUri2 = 'https://proxyserver.inovanex.com/audio';
											this.proxyUri3 = 'https://cdn.instream.audio/';
											this.musicApi = {
												track: 'https://inovanex-music.kodhe.work/api/function/c/track.search',
												artist: 'https://inovanex-music.kodhe.work/api/function/c/artist.search'
											};
											this.attachEvents();
											this.hashParameters();
											this.hashChangedPost();
											this.app.hashChanged(this.hashChanged.bind(this));
										case 6:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'hashParameters', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							var args = this.hashArgs = this.app.getParameters();
						}
					});
					Object.defineProperty(PlayerController.prototype, 'hashChangedPost', {
						enumerable: false,
						value: function () {
							if (this.hashArgs.tema || this.hashArgs.d)
								this.initAudio();
						}
					});
					Object.defineProperty(PlayerController.prototype, 'hashChanged', {
						enumerable: false,
						value: function () {
							this.hashParameters();
							this.hashChangedPost();
						}
					});
					Object.defineProperty(PlayerController.prototype, 'initTheme', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope, c, d, content, temaId, tema, k, palette, p;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											c = decodeURIComponent(this.hashArgs.c);
											d = decodeURIComponent(this.hashArgs.d);
											if (!(c && d)) {
												context$1$0.next = 13;
												break;
											}
											context$1$0.prev = 4;
											context$1$0.next = 7;
											return regeneratorRuntime.awrap(this.app.remote.post('decrypt', {
												c1: c,
												c2: d
											}));
										case 7:
											content = context$1$0.sent;
											context$1$0.next = 13;
											break;
										case 10:
											context$1$0.prev = 10;
											context$1$0.t0 = context$1$0['catch'](4);
											console.error('Error al hallar contenido: ', context$1$0.t0);
										case 13:
											content = content || {};
											this.content = content;
											temaId = this.hashArgs.tema;
											if (!(/d/.test(temaId) && temaId.length == 24)) {
												context$1$0.next = 22;
												break;
											}
											context$1$0.next = 19;
											return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
												query: { _id: new U.ObjectId(temaId) },
												options: { tablename: 'temas' }
											}));
										case 19:
											tema = context$1$0.sent;
											context$1$0.next = 25;
											break;
										case 22:
											context$1$0.next = 24;
											return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
												query: { cid: temaId },
												options: { tablename: 'temas' }
											}));
										case 24:
											tema = context$1$0.sent;
										case 25:
											k = $('#all-content');
											k.html(tema[0].contenido);
											palette = global.palette;
											tema = tema[0];
											if (tema.color_0) {
												palette.primary['hue-1'] = content.color_0 || tema.color_0;
											}
											if (tema.color_1) {
												palette.primary['hue-2'] = content.color_1 || tema.color_1;
											}
											if (tema.color_2) {
												palette.primary['hue-3'] = content.color_2 || tema.color_2;
											}
											if (tema.text_color_0) {
												palette.primary['text-1'] = content.text_color_0 || tema.text_color_0;
											}
											if (tema.text_color_1) {
												palette.primary['text-2'] = content.text_color_1 || tema.text_color_1;
											}
											if (tema.text_color_2) {
												palette.primary['text-3'] = content.text_color_2 || tema.text_color_2;
											}
											scope.info = this.content = content;
											core.VW.Web.Elements.Theme.clear().create().primaryPalette(palette.primary).accentPalette(palette.accent).warnPalette(palette.warn).backgroundPalette(palette.background);
											$('.c-audio').remove();
											p = new core.dynvox.DomParser();
											p.init();
											scope.args = content ? content.args : [];
											if (!this.atached) {
												this.attachEvents();
												this.atached = true;
											}
										case 42:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [[
								4,
								10
							]]);
						})
					});
					PlayerController.prototype.__defineGetter__('scope', function () {
						return this.app.scope;
					});
					PlayerController.prototype.__defineGetter__('channel', function () {
						if (!this.$channel)
							this.$channel = new core.org.voxsoftware.Inovanex.Comunication(window.parent, this.hashArgs.id);
						return this.$channel;
					});
					Object.defineProperty(PlayerController.prototype, 'initAudio', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope, col, item, self, audio, domain, state;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope, self = this;
											global.playerObject = this;
											scope.volume = scope.volumeMaster = 90;
											context$1$0.next = 5;
											return regeneratorRuntime.awrap(this.initTheme());
										case 5:
											//this.event_cover();
											//this.event_metadata();

											setTimeout(function () {
												self.event_cover();
												self.event_metadata();
											}, 10);

											scope.serverUri = 'http://' + this.content.dominio + ':' + this.content.port + '';
											audio = {};
											if (global.location.search && global.location.search.indexOf('&proxy=2') >= 0 || global.location.hash && global.location.hash.indexOf('#proxy=2') >= 0) {
												domain = this.content.dominio;
												domain = domain.split('.');
												if (domain.length == 3 && domain[1] == 'instream' && domain[2] == 'audio') {
													domain = domain[0];
												} else {
													domain = domain.join('.');
												}
												domain += '.' + this.content.port;
												audio.src = 'https://proxyradio.kodrive.xyz/' + domain + '/stream';
											} else {
												//audio.src = '' + this.proxyUri2 + '?url=' + scope.serverUri + '/' + (this.content.tipo == 'icecast' ? 'stream' : ';') + '?_=' + Date.now().toString(16) + '';
												var proxyUri3 = "https://" + this.content.dominio + "/"
												audio.src = '' + proxyUri3 + ":" + this.content.port + "/" + (this.content.tipo == 'icecast' ? 'stream' : ';') + '?_=' + Date.now().toString(16) + '';
											}
											this.realAudio = { src: audio.src };
											state = {
												play: false,
												stop: true,
												pause: false,
												noplaying: true,
												waiting: true
											};
											scope.audio = audio;
											scope.state = state;
											if (this.onload)
												this.onload();
										case 15:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'renewAudio', {
						enumerable: false,
						value: function () {

							this._audio = $("audio")
							if (!this._audio.length) {
								this._audio = null
							}

							/*
							var audio = $('<audio>');
							audio.attr('autoplay', 'autoplay')
							audio.attr('playsinline', 'playsinline')
							audio.attr('preload', 'auto')
							audio.attr('webkit-playsinline', 'webkit-playsinline')
							this._audio = audio;
							*/
						}
					});
					PlayerController.prototype.__defineGetter__('audio', function () {
						if (!this._audio)
							this.renewAudio();
						return this._audio[0];
					});
					PlayerController.prototype.__defineGetter__('audioDOM', function () {
						if (!this._audio)
							this.renewAudio();
						return this._audio;
					});
					Object.defineProperty(PlayerController.prototype, 'attachEvents', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							var self = this;
							var actions = {};
							this.audioDOM.on('loadstart', this.event_loadstart.bind(this));
							this.audioDOM.on('play', this.event_play.bind(this));
							this.audioDOM.on('waiting', this.event_waiting.bind(this));
							this.audioDOM.on('error', this.event_error.bind(this));
							this.audioDOM.on('playing', this.event_play.bind(this));
							this.audioDOM.on('pause', this.event_pause.bind(this));
							this.audioDOM.on('stop', this.event_stop.bind(this));
							scope.observer.onValueChanged('volume', this.event_volumechange.bind(this));
							actions.play = this.event_playClick.bind(this);
							actions.pause = this.event_pauseClick.bind(this);
							actions.stop = this.event_stopClick.bind(this);
							actions.togglemute = this.event_toggleMute.bind(this);
							scope.actions = actions;
							if (!window.clickAttach) {
								$(document).click(function () {
									if (!self.audio_checker)
										self.audio.play();
								});
							}
							scope.observer.onValueChanged('audio', function (self$0) {
								return function (ev) {
									if (!self$0.audio)
										return
									if (!scope.audio || scope.audio.src == undefined) {
										self$0.audio.pause();
										self$0.audio.src = '';
										self$0.audioDOM.removeAttr('src');
										self$0.audio.load();
										return;
									}
									self$0.audio.src = scope.audio.src;
									setTimeout(function () { self$0.audio.play(); }, 10);
									/*setTimeout(function () {
										if (!self.audio_checker)
											$('.audio-checker').show();
									}, 4000);*/
								};
							}(this));
						}
					});
					Object.defineProperty(PlayerController.prototype, 'verificarDominio', {
						enumerable: false,
						value: function (dominio) {
							var p = dominio.split('.'), d, p2, c1;
							for (var i = 0; i < this.dsDomains.length; i++) {
								p2 = this.dsDomains[i];
								if (p2[0] == '#')
									continue;
								p2 = p2 ? p2.split('.') : [];
								if (p2.length != p.length)
									continue;
								c1 = true;
								for (var y = 0; y < p2.length; y++) {
									if (!(p2[y] == '*' || p2[y] == p[y])) {
										c1 = false;
										break;
									}
								}
								if (c1)
									return true;
							}
							return false;
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_cover', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope, retries, ok, req, response, text, url, body, source, fail, old, parts;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											retries = 6, ok = true;
										case 2:
											if (!(retries > 0)) {
												context$1$0.next = 21;
												break;
											}
											context$1$0.prev = 3;
											req = new core.VW.Http.Request('' + this.proxyUri1 + 'dsenabled.php');
											context$1$0.next = 7;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 7:
											response = context$1$0.sent;
											text = response.body.split('\n');
											this.dsDomains = text;
											if (this.verificarDominio(location.hostname.toLowerCase())) {
												console.error('Su dominio no tiene permitido el reconocimiento de metadatos');
												ok = false;
											}
											retries = 0;
											context$1$0.next = 19;
											break;
										case 14:
											context$1$0.prev = 14;
											context$1$0.t0 = context$1$0['catch'](3);
											retries--;
											context$1$0.next = 19;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(2000));
										case 19:
											context$1$0.next = 2;
											break;
										case 21:
											old = 0;
										case 22:
											if (false) {
												context$1$0.next = 73;
												break;
											}
											context$1$0.prev = 23;
											url = '' + this.proxyUri1 + 'proxy_validator.php?url=' + scope.serverUri + '/status-json.xsl';
											fail = false;
											context$1$0.prev = 26;
											if (!(old < 2 && this.content.tipo == 'icecast')) {
												context$1$0.next = 36;
												break;
											}
											req = new core.VW.Http.Request(url);
											context$1$0.next = 31;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 31:
											response = context$1$0.sent;
											body = response.body;
											if (typeof body == 'string')
												body = JSON.parse(body);
											context$1$0.next = 37;
											break;
										case 36:
											fail = true;
										case 37:
											context$1$0.next = 43;
											break;
										case 39:
											context$1$0.prev = 39;
											context$1$0.t1 = context$1$0['catch'](26);
											fail = true;
											old++;
										case 43:
											if (!fail) {
												context$1$0.next = 51;
												break;
											}
											url = '' + this.proxyUri1 + 'proxy_validator.php?url=' + scope.serverUri + '/' + (this.content.tipo == 'icecast' ? 'status.xsl' : 'stats?sid=1') + '';
											req = new core.VW.Http.Request(url);
											context$1$0.next = 48;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 48:
											response = context$1$0.sent;
											body = response.body;
											body = this.getStatusJSON(body);
										case 51:
											source = this.getCorrectSource(body);
											if (this.metadata && source.yp_currently_playing == this.metadata[this.metadata.length - 1].metadata.yp_currently_playing) {
											} else {
												parts = source.yp_currently_playing ? source.yp_currently_playing.split('-') : null;
												if (!parts) {
													source.noImage = true;
													if (source.server_description || source.server_name) {
														parts = [
															source.server_name || 'Radio Streaming HD',
															source.server_description || 'ON AIR'
														];
													} else {
														parts = [
															'Radio Streaming HD',
															'ON AIR'
														];
													}
												}
												source.playingParts = [];
												source.playingParts.push(parts[0].trim());
												source.playingParts.push(parts.slice(1).join('').trim());
												source.date = Date.now();
												this.addMetadata(source);
											}
											if (!(this.content.tipo == 'shoutcast')) {
												context$1$0.next = 64;
												break;
											}
											url = '' + this.proxyUri1 + 'proxy_validator.php?url=' + scope.serverUri + '/played?sid=1';
											req = new core.VW.Http.Request(url);
											context$1$0.next = 58;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 58:
											response = context$1$0.sent;
											body = response.body;
											context$1$0.next = 62;
											return regeneratorRuntime.awrap(this.getPlayedAsJSON(body));
										case 62:
											source = context$1$0.sent;
											if (source && source.length) {
												scope.played = this.played = source;
											}
										case 64:
											context$1$0.next = 69;
											break;
										case 66:
											context$1$0.prev = 66;
											context$1$0.t2 = context$1$0['catch'](23);
											console.error('Error al traer metadatos:', context$1$0.t2);
										case 69:
											context$1$0.next = 71;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(10000));
										case 71:
											context$1$0.next = 22;
											break;
										case 73:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [
									[
										3,
										14
									],
									[
										23,
										66
									],
									[
										26,
										39
									]
								]);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'addMetadata', {
						enumerable: false,
						value: function (metadata) {
							this.metadata = this.metadata || [];
							this.metadata.push({
								time: Date.now(),
								metadata: metadata
							});
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_metadata', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (false) {
												context$1$0.next = 6;
												break;
											}
											context$1$0.next = 3;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(1000));
										case 3:
											this.getCorrectMetadata();
											context$1$0.next = 0;
											break;
										case 6:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'getCorrectMetadata', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope, metadata, now, noPlayingTime, i;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											if (this.metadata) {
												context$1$0.next = 3;
												break;
											}
											return context$1$0.abrupt('return');
										case 3:
											now = Date.now();
											if (scope.metadata)
												now -= 5 * 1000;
											noPlayingTime = this.getTimeNoPlaying();
											now -= noPlayingTime;
											i = this.metadata.length - 1;
										case 8:
											if (!(i >= 0)) {
												context$1$0.next = 26;
												break;
											}
											metadata = this.metadata[i];
											if (!(metadata.time <= now)) {
												context$1$0.next = 23;
												break;
											}
											if (!(!scope.metadata || scope.metadata.date != metadata.metadata.date)) {
												context$1$0.next = 22;
												break;
											}
											if (metadata.img) {
												context$1$0.next = 21;
												break;
											}
											context$1$0.prev = 13;
											context$1$0.next = 16;
											return regeneratorRuntime.awrap(this.getPicture(metadata.metadata));
										case 16:
											context$1$0.next = 21;
											break;
										case 18:
											context$1$0.prev = 18;
											context$1$0.t0 = context$1$0['catch'](13);
											console.error('Error al obtener la url de la imagen', context$1$0.t0);
										case 21:
											scope.metadata = metadata.metadata;
										case 22:
											return context$1$0.abrupt('return');
										case 23:
											i--;
											context$1$0.next = 8;
											break;
										case 26:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [[
								13,
								18
							]]);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'getPicture', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(metadata) {
							var m, title, id;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (!(this.content.staticBackground == 1)) {
												context$1$0.next = 2;
												break;
											}
											return context$1$0.abrupt('return');
										case 2:
											title = metadata.yp_currently_playing;
											if (!title) {
												title = [
													metadata.artist || '',
													metadata.title | ''
												].join('$');
											}
											this.cachedMeta = this.cachedMeta || {};
											if (!this.cachedMeta[title]) {
												context$1$0.next = 9;
												break;
											}
											m = this.cachedMeta[title];
											for (id in m) {
												metadata[id] = m[id];
											}
											return context$1$0.abrupt('return');
										case 9:
											context$1$0.prev = 9;
											context$1$0.next = 12;
											return regeneratorRuntime.awrap(this.getPictureModo2(metadata));
										case 12:
											this.cachedMeta[title] = metadata;
											context$1$0.next = 18;
											break;
										case 15:
											context$1$0.prev = 15;
											context$1$0.t0 = context$1$0['catch'](9);
											console.error('Spotify: ', context$1$0.t0);
										case 18:
											if (metadata.img) {
												context$1$0.next = 29;
												break;
											}
											context$1$0.prev = 19;
											if (metadata.noImage) {
												context$1$0.next = 23;
												break;
											}
											context$1$0.next = 23;
											return regeneratorRuntime.awrap(this.getPictureModo1(metadata));
										case 23:
											this.cachedMeta[title] = metadata;
											context$1$0.next = 29;
											break;
										case 26:
											context$1$0.prev = 26;
											context$1$0.t1 = context$1$0['catch'](19);
											console.error('Lastfm: ', context$1$0.t1);
										case 29:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this, [
									[
										9,
										15
									],
									[
										19,
										26
									]
								]);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'getPictureModo1', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(metadata) {
							var song, onlysong, url, req, image;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											song = [];
											if (metadata.artist)
												song.push(metadata.artist);
											if (metadata.title)
												song.push(metadata.title);
											if (!song.length)
												song = metadata.playingParts.join('-');
											else
												song = song.join(' - ');
											onlysong = metadata.title;
											if (metadata.playingParts) {
												onlysong = metadata.playingParts[1];
											}
											if (!metadata.noImage) {
												context$1$0.next = 8;
												break;
											}
											return context$1$0.abrupt('return');
										case 8:
											url = this.musicApi.track + '?limit=1&text=' + encodeURIComponent(song);
											req = new core.VW.Http.Request(url);
											context$1$0.next = 12;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 12:
											body = context$1$0.sent;
											body = body.body;
											if (typeof body == 'string')
												body = JSON.parse(body);
											if (!(body && body[0] && body[0].album[0])) {
												context$1$0.next = 19;
												break;
											}
											image = body[0].album[0].images && body[0].album[0].images[0] && body[0].album[0].images[0].url;
											context$1$0.next = 28;
											break;
										case 19:
											if (!metadata.artist) {
												context$1$0.next = 28;
												break;
											}
											url = this.musicApi.artist + '?limit=1&artist=' + encodeURIComponent(metadata.artist);
											req = new core.VW.Http.Request(url);
											context$1$0.next = 24;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 24:
											body = context$1$0.sent;
											body = body.body;
											if (typeof body == 'string')
												body = JSON.parse(body);
											if (body && body[0]) {
												image = body[0].images && body[0].images[0] && body[0].images[0].url;
											}
										case 28:
											if (image) {
												context$1$0.next = 37;
												break;
											}
											url = this.musicApi.track + '?limit=1&song=' + encodeURIComponent(onlysong);
											req = new core.VW.Http.Request(url);
											context$1$0.next = 33;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 33:
											body = context$1$0.sent;
											body = body.body;
											if (typeof body == 'string')
												body = JSON.parse(body);
											if (body && body[0] && body[0].album[0]) {
												image = body[0].album[0].images && body[0].album[0].images[0] && body[0].album[0].images[0].url;
											}
										case 37:
											if (!(!image && onlysong.length > 3)) {
												context$1$0.next = 46;
												break;
											}
											url = this.musicApi.artist + '?limit=1&artist=' + encodeURIComponent(onlysong);
											req = new core.VW.Http.Request(url);
											context$1$0.next = 42;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 42:
											body = context$1$0.sent;
											body = body.body;
											if (typeof body == 'string')
												body = JSON.parse(body);
											if (body && body[0]) {
												image = body[0].images && body[0].images[0] && body[0].images[0].url;
											}
										case 46:
											metadata.img = image;
										case 47:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'normalize', {
						enumerable: false,
						value: function (str) {
							return str.replace(/(\%|\&|\.|\#|\@)/g, ' ').replace(/(\sfeat|\sft)/g, ' ').replace(/\s+/g, ' ');
						}
					});
					Object.defineProperty(PlayerController.prototype, 'getPictureModo2', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(metadata) {
							var url, req, body, match, images, image;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (!metadata.artist)
												metadata.artist = metadata.playingParts[0];
											if (!metadata.title)
												metadata.title = metadata.playingParts[1];
											if (!metadata.noImage) {
												context$1$0.next = 4;
												break;
											}
											return context$1$0.abrupt('return');
										case 4:
											throw new core.System.Exception('Error provocado para evitar que se ejecute el código que sigue');
										case 9:
											body = context$1$0.sent;
											body = body.body;
											if (typeof body == 'string')
												body = JSON.parse(body);
											console.info('body', body);
											match = body.tracks.items;
											if (match.length > 0) {
												match = match[0];
												images = match.album.images;
												if (images) {
													images.sort(function (a, b) {
														return a.height > b.height ? -1 : a.height < b.height ? 1 : 0;
													});
													image = images[0];
												}
											}
											metadata.img = image ? image.url : '';
										case 16:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'getTimeNoPlaying', {
						enumerable: false,
						value: function () {
							var timeno = this.timeNoPlaying || 0;
							if (this.timeNoPlaying_current)
								timeno += Date.now() - this.timeNoPlaying_current;
							return timeno;
						}
					});
					Object.defineProperty(PlayerController.prototype, 'getPlayedAsJSON', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(xml) {
							var jd, mount, trs, tr, id, src, source, td, tables, table, p, parts, i, y;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											this.played = this.played || [];
											jd = $(xml), source = [];
											tables = jd.filter('table');
											i = 0;
										case 4:
											if (!(i < tables.length)) {
												context$1$0.next = 30;
												break;
											}
											table = tables.eq(i);
											p = table.find('tr td:eq(0)').text();
											if (!(p == 'Played @')) {
												context$1$0.next = 26;
												break;
											}
											trs = table.find('tr');
											y = 1;
										case 10:
											if (!(y < trs.length)) {
												context$1$0.next = 24;
												break;
											}
											tr = trs.eq(y);
											td = tr.find('td');
											parts = td.eq(1).text().split('-');
											src = {
												'duration': td.eq(0).text(),
												'artist': parts.length > 0 ? parts[0].trim() : undefined,
												'title': parts.slice(1).join('-')
											};
											if (!(y == 1 && src.title == this.played.length ? this.played[this.played.length - 1].title : undefined)) {
												context$1$0.next = 17;
												break;
											}
											return context$1$0.abrupt('break', 24);
										case 17:
											if (!(y < 3 && !src.img)) {
												context$1$0.next = 20;
												break;
											}
											context$1$0.next = 20;
											return regeneratorRuntime.awrap(this.getPicture(src));
										case 20:
											source.push(src);
										case 21:
											y++;
											context$1$0.next = 10;
											break;
										case 24:
											context$1$0.next = 27;
											break;
										case 26:
											return context$1$0.abrupt('continue', 27);
										case 27:
											i++;
											context$1$0.next = 4;
											break;
										case 30:
											return context$1$0.abrupt('return', source.reverse());
										case 31:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'getStatusJSONShoutCast', {
						enumerable: false,
						value: function (xml) {
							var jd = $(xml), mount, trs, tr, id, src, source = [], td;
							var items = jd.eq(1).find('>*'), item;
							src = {};
							source.push(src);
							for (var i = 0; i < items.length; i++) {
								item = items.eq(i);
								id = item.prop('tagName').toUpperCase();
								if (id == 'SERVERTITLE')
									src.server_name = item.text();
								else if (id == 'CONTENT')
									src.server_type = item.text();
								else if (id == 'BITRATE')
									src['ice-bitrate'] = item.text() | 0;
								else if (id == 'CURRENTLISTENERS')
									src.listeners = item.text() | 0;
								else if (id == 'PEAKLISTENERS')
									src.listeners_peak = item.text() | 0;
								else if (id == 'SERVERGENRE')
									src.genre = item.text();
								else if (id == 'SERVERURL')
									src.server_url = item.text();
								else if (id == 'SONGTITLE')
									src.yp_currently_playing = item.text();
							}
							return { source: source };
						}
					});
					Object.defineProperty(PlayerController.prototype, 'getStatusJSON', {
						enumerable: false,
						value: function (xml) {
							if (this.content.tipo == 'icecast')
								return this.getStatusJSONIcecast(xml);
							else if (this.content.tipo == 'shoutcast')
								return this.getStatusJSONShoutCast(xml);
						}
					});
					Object.defineProperty(PlayerController.prototype, 'getStatusJSONIcecast', {
						enumerable: false,
						value: function (xml) {
							var y = xml.indexOf('<html');
							xml = xml.substring(y);
							var jd = $(xml), mount, trs, tr, id, src, source = [], td;
							var mounts = jd.find('.mountcont');
							for (var i = 0; i < mounts.length; i++) {
								src = {};
								mount = mounts.eq(i);
								trs = mount.find('table tr');
								for (var y = 0; y < trs.length; y++) {
									tr = trs.eq(y);
									td = tr.find('td');
									id = td.eq(0).text().toUpperCase();
									if (id == 'STREAM NAME:')
										src.server_name = td.eq(1).text();
									else if (id == 'STREAM DESCRIPTION:')
										src.server_description = td.eq(1).text();
									else if (id == 'CONTENT TYPE:')
										src.server_type = td.eq(1).text();
									else if (id == 'STREAM STARTED:')
										src.stream_start = td.eq(1).text();
									else if (id == 'BITRATE:')
										src['ice-bitrate'] = td.eq(1).text() | 0;
									else if (id == 'LISTENERS (CURRENT):')
										src.listeners = td.eq(1).text() | 0;
									else if (id == 'LISTENERS (PEAK):')
										src.listeners_peak = td.eq(1).text() | 0;
									else if (id == 'GENRE:')
										src.genre = td.eq(1).text();
									else if (id == 'STREAM URL:')
										src.server_url = td.eq(1).text();
									else if (id == 'CURRENTLY PLAYING:')
										src.yp_currently_playing = td.eq(1).text();
								}
								source.push(src);
							}
							return { source: source };
						}
					});
					Object.defineProperty(PlayerController.prototype, 'getCorrectSource', {
						enumerable: false,
						value: function (data) {
							var source = data.source;
							if (!source) {
								source = data.icestats ? data.icestats.source : [{}];
								if (!(source instanceof Array))
									source = [source];
								source = source || [{}];
							}
							source.sort(function (a, b) {
								var time = a.stream_start;
								var time2 = b.stream_start;
								if (time && !time2)
									return 1;
								if (time2 && !time)
									return -1;
								if (time) {
									try {
										time = new Date(time.substring(0, 11) + time.substring(12));
										time2 = new Date(time2.substring(0, 11) + time2.substring(12));
										return time > time2 ? 1 : time2 > time ? -1 : 0;
									} catch (e) {
									}
								}
								var l1 = a.listeners || 0;
								var l2 = b.listeners || 0;
								return l1 > l2 ? 1 : l2 > l1 ? -1 : 0;
							});
							source.reverse();
							{
								typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
								var src;
								var $_iterator11 = regeneratorRuntime.values(source), $_normal11 = false, $_err11;
								try {
									while (true) {
										var $_step11 = $_iterator11.next();
										if ($_step11.done) {
											$_normal11 = true;
											break;
										}
										{
											src = $_step11.value;
											if (src.listeners > 0)
												return src;
										}
									}
								} catch (e) {
									$_normal11 = false;
									$_err11 = e;
								}
								try {
									if (!$_normal11 && $_iterator11['return']) {
										$_iterator11['return']();
									}
								} catch (e) {
								}
								if ($_err11) {
									throw $_err11;
								}
							}
							{
								typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
								var src;
								var $_iterator12 = regeneratorRuntime.values(source), $_normal12 = false, $_err12;
								try {
									while (true) {
										var $_step12 = $_iterator12.next();
										if ($_step12.done) {
											$_normal12 = true;
											break;
										}
										{
											src = $_step12.value;
											if (src.connected > 0)
												return src;
										}
									}
								} catch (e) {
									$_normal12 = false;
									$_err12 = e;
								}
								try {
									if (!$_normal12 && $_iterator12['return']) {
										$_iterator12['return']();
									}
								} catch (e) {
								}
								if ($_err12) {
									throw $_err12;
								}
							}
							return source[0];
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_error', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											scope.state = {
												stop: true,
												noplaying: true
											};
											context$1$0.next = 4;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(2000));
										case 4:
											if (scope.state.noplaying) {
												this.event_stopClick();
												this.event_playClick();
											}
										case 5:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(PlayerController.prototype, 'event_loadstart', {
						enumerable: false,
						value: function () {
							this.timeNoPlaying = 0;
							this.timeNoPlaying_current = 0;
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_play', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							scope.state = { play: true };
							if (!this.audio_checker) {
								this.audio_checker = true;
								$('.audio-checker').hide();
							}
							if (this.timeNoPlaying_current !== undefined && this.timeNoPlaying_current > 0) {
								this.timeNoPlaying = this.timeNoPlaying || 0;
								this.timeNoPlaying += Date.now() - this.timeNoPlaying_current;
								this.timeNoPlaying_current = 0;
							}
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_waiting', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							scope.state = { waiting: true };
							if (!this.timeNoPlaying_current) {
								this.timeNoPlaying_current = Date.now();
							}
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_volumechange', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							scope.volumeMaster = scope.volume;
							if (!this.audio)
								return;
							if (scope.volume)
								this.audio.volume = scope.volume / 100;
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_toggleMute', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							if (scope.volumeMaster > 0) {
								this.volume = scope.volume;
								this.audio.volume = 0;
								scope.volumeMaster = 0;
							} else {
								scope.volume = Math.max(scope.volume, 1);
							}
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_pause', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							scope.state = {
								pause: true,
								noplaying: true
							};
							this.timeNoPlaying_current = Date.now();
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_stop', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							scope.state = {
								stop: true,
								noplaying: true
							};
							this.stoped = true;
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_playClick', {
						enumerable: false,
						value: function () {
							var scope = this.app.scope;
							if (this.stoped) {
								scope.audio.src = this.realAudio.src;
								scope.audio = scope.audio;
								this.stoped = false;
							}
							this.audio.play();
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_pauseClick', {
						enumerable: false,
						value: function () {
							this.audio.pause();
						}
					});
					Object.defineProperty(PlayerController.prototype, 'event_stopClick', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
							var scope;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											scope = this.app.scope;
											this.savedSrc = scope.audio.src;
											scope.audio.src = undefined;
											scope.audio = scope.audio;
											this.event_stop();
											this.stoped = true;
										case 6:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
				}
				exports.default = PlayerController;
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 20 */
/***/ (function (module, exports, __webpack_require__) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var PlayerController = function PlayerController() {
					PlayerController.$constructor ? PlayerController.$constructor.apply(this, arguments) : PlayerController.$superClass && PlayerController.$superClass.apply(this, arguments);
				};
				PlayerController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(PlayerController, U.Module) : PlayerController.__proto__ = U.Module;
				PlayerController.prototype.constructor = PlayerController;
				PlayerController.$super = U.Module.prototype;
				PlayerController.$superClass = U.Module;
				Object.defineProperty(PlayerController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										this.proxyUri1 = 'https://proxyserver.inovanex.com/';
										this.proxyUri2 = 'https://proxyserver.inovanex.com/audio';
										this.attachEvents();
										this.initAudio();
									case 4:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'initAudio', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope, col, item, self, audio, state;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope, self = this;
										scope.serverUri = 'http://cdn.instream.audio:8012';
										audio = { src: '' + this.proxyUri2 + '?url=' + scope.serverUri + '/stream' };
										state = {
											play: false,
											stop: true,
											pause: false,
											noplaying: true
										};
										scope.audio = audio;
										scope.state = state;
									case 6:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				PlayerController.prototype.__defineGetter__('audio', function () {
					return $('.c-audio').get(0);
				});
				PlayerController.prototype.__defineGetter__('audioDOM', function () {
					return $('.c-audio');
				});
				Object.defineProperty(PlayerController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						var actions = {};
						var self = this
						this.audioDOM.on('loadstart', this.event_loadstart.bind(this));
						this.audioDOM.on('play', this.event_play.bind(this));
						this.audioDOM.on('waiting', this.event_waiting.bind(this));
						this.audioDOM.on('error', this.event_error.bind(this));
						this.audioDOM.on('playing', this.event_play.bind(this));
						this.audioDOM.on('pause', this.event_pause.bind(this));
						this.audioDOM.on('stop', this.event_stop.bind(this));
						actions.play = this.event_playClick.bind(this);
						actions.pause = this.event_pauseClick.bind(this);
						actions.stop = this.event_stopClick.bind(this);
						scope.actions = actions;
						setTimeout(function () {
							self.event_cover();
							self.event_metadata();
						}, 2000);

					}
				});
				Object.defineProperty(PlayerController.prototype, 'verificarDominio', {
					enumerable: false,
					value: function (dominio) {
						var p = dominio.split('.'), d, p2, c1;
						for (var i = 0; i < this.dsDomains.length; i++) {
							p2 = this.dsDomains[i];
							if (p2[0] == '#')
								continue;
							p2 = p2 ? p2.split('.') : [];
							if (p2.length != p.length)
								continue;
							c1 = true;
							for (var y = 0; y < p2.length; y++) {
								if (!(p2[y] == '*' || p2[y] == p[y])) {
									c1 = false;
									break;
								}
							}
							if (c1)
								return true;
						}
						return false;
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_cover', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope, retries, ok, req, response, text, url, body, source, fail, old, parts;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										retries = 6, ok = true;
									case 2:
										if (!(retries > 0)) {
											context$1$0.next = 21;
											break;
										}
										context$1$0.prev = 3;
										req = new core.VW.Http.Request('' + this.proxyUri1 + 'dsenabled.php');
										context$1$0.next = 7;
										return regeneratorRuntime.awrap(req.getResponseAsync());
									case 7:
										response = context$1$0.sent;
										text = response.body.split('\n');
										this.dsDomains = text;
										if (this.verificarDominio(location.hostname.toLowerCase())) {
											console.error('Su dominio no tiene permitido el reconocimiento de metadatos');
											ok = false;
										}
										retries = 0;
										context$1$0.next = 19;
										break;
									case 14:
										context$1$0.prev = 14;
										context$1$0.t0 = context$1$0['catch'](3);
										retries--;
										context$1$0.next = 19;
										return regeneratorRuntime.awrap(core.VW.Task.sleep(2000));
									case 19:
										context$1$0.next = 2;
										break;
									case 21:
										old = 0;
									case 22:
										if (false) {
											context$1$0.next = 62;
											break;
										}
										context$1$0.prev = 23;
										url = '' + this.proxyUri1 + 'proxy_validator.php?url=' + scope.serverUri + '/status-json.xsl';
										fail = false;
										context$1$0.prev = 26;
										if (!(old < 2)) {
											context$1$0.next = 36;
											break;
										}
										req = new core.VW.Http.Request(url);
										context$1$0.next = 31;
										return regeneratorRuntime.awrap(req.getResponseAsync());
									case 31:
										response = context$1$0.sent;
										body = response.body;
										if (typeof body == 'string')
											body = JSON.parse(body);
										context$1$0.next = 37;
										break;
									case 36:
										fail = true;
									case 37:
										context$1$0.next = 43;
										break;
									case 39:
										context$1$0.prev = 39;
										context$1$0.t1 = context$1$0['catch'](26);
										fail = true;
										old++;
									case 43:
										if (!fail) {
											context$1$0.next = 51;
											break;
										}
										url = '' + this.proxyUri1 + 'proxy_validator.php?url=' + scope.serverUri + '/status.xsl';
										req = new core.VW.Http.Request(url);
										context$1$0.next = 48;
										return regeneratorRuntime.awrap(req.getResponseAsync());
									case 48:
										response = context$1$0.sent;
										body = response.body;
										body = this.getStatusJSON(body);
									case 51:
										source = this.getCorrectSource(body);
										if (this.metadata && source.yp_currently_playing == this.metadata[this.metadata.length - 1].metadata.yp_currently_playing) {
										} else {
											parts = source.yp_currently_playing.split('-');
											source.playingParts = [];
											source.playingParts.push(parts[0].trim());
											source.playingParts.push(parts.slice(1).join('').trim());
											source.date = Date.now();
											this.addMetadata(source);
										}
										context$1$0.next = 58;
										break;
									case 55:
										context$1$0.prev = 55;
										context$1$0.t2 = context$1$0['catch'](23);
										console.error('Error al traer metadatos:', context$1$0.t2);
									case 58:
										context$1$0.next = 60;
										return regeneratorRuntime.awrap(core.VW.Task.sleep(10000));
									case 60:
										context$1$0.next = 22;
										break;
									case 62:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [
								[
									3,
									14
								],
								[
									23,
									55
								],
								[
									26,
									39
								]
							]);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'addMetadata', {
					enumerable: false,
					value: function (metadata) {
						this.metadata = this.metadata || [];
						this.metadata.push({
							time: Date.now(),
							metadata: metadata
						});
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_metadata', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										if (false) {
											context$1$0.next = 6;
											break;
										}
										context$1$0.next = 3;
										return regeneratorRuntime.awrap(core.VW.Task.sleep(1000));
									case 3:
										this.getCorrectMetadata();
										context$1$0.next = 0;
										break;
									case 6:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'getCorrectMetadata', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope, metadata, now, noPlayingTime, i;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										if (this.metadata) {
											context$1$0.next = 3;
											break;
										}
										return context$1$0.abrupt('return');
									case 3:
										now = Date.now();
										if (scope.metadata)
											now -= 5 * 1000;
										noPlayingTime = this.getTimeNoPlaying();
										now -= noPlayingTime;
										i = this.metadata.length - 1;
									case 8:
										if (!(i >= 0)) {
											context$1$0.next = 26;
											break;
										}
										metadata = this.metadata[i];
										if (!(metadata.time <= now)) {
											context$1$0.next = 23;
											break;
										}
										if (!(!scope.metadata || scope.metadata.date != metadata.metadata.date)) {
											context$1$0.next = 22;
											break;
										}
										if (metadata.img) {
											context$1$0.next = 21;
											break;
										}
										context$1$0.prev = 13;
										context$1$0.next = 16;
										return regeneratorRuntime.awrap(this.getPicture(metadata.metadata));
									case 16:
										context$1$0.next = 21;
										break;
									case 18:
										context$1$0.prev = 18;
										context$1$0.t0 = context$1$0['catch'](13);
										console.error('Error al obtener la url de la imagen', context$1$0.t0);
									case 21:
										scope.metadata = metadata.metadata;
									case 22:
										return context$1$0.abrupt('return');
									case 23:
										i--;
										context$1$0.next = 8;
										break;
									case 26:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							13,
							18
						]]);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'getPicture', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(metadata) {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										context$1$0.prev = 0;
										context$1$0.next = 3;
										return regeneratorRuntime.awrap(this.getPictureModo2(metadata));
									case 3:
										context$1$0.next = 8;
										break;
									case 5:
										context$1$0.prev = 5;
										context$1$0.t0 = context$1$0['catch'](0);
										console.error('Spotify: ', context$1$0.t0);
									case 8:
										if (metadata.img) {
											context$1$0.next = 17;
											break;
										}
										context$1$0.prev = 9;
										context$1$0.next = 12;
										return regeneratorRuntime.awrap(this.getPictureModo1(metadata));
									case 12:
										context$1$0.next = 17;
										break;
									case 14:
										context$1$0.prev = 14;
										context$1$0.t1 = context$1$0['catch'](9);
										console.error('Lastfm: ', context$1$0.t1);
									case 17:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [
								[
									0,
									5
								],
								[
									9,
									14
								]
							]);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'getPictureModo1', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(metadata) {
						var song, fail, url, req, body, match, images, image, i, $_iterator13, $_normal13, $_err13, $_step13;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										if (metadata.artist)
											song = metadata.artist;
										else if (metadata.title)
											song = metadata.title;
										else
											song = metadata.playingParts.join('-');
										fail = false;
										i = 2;
									case 3:
										if (!(i > 0)) {
											context$1$0.next = 45;
											break;
										}
										i--;
										fail = false;
										url = 'https://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d027a499d2503b865195a129bfa059b3&track=' + encodeURIComponent(song) + '&format=json';
										req = new core.VW.Http.Request(url);
										context$1$0.next = 10;
										return regeneratorRuntime.awrap(req.getResponseAsync());
									case 10:
										body = context$1$0.sent;
										body = body.body;
										if (typeof body == 'string')
											body = JSON.parse(body);
										match = body.results.trackmatches.track;
										if (!(match.length > 0)) {
											context$1$0.next = 43;
											break;
										}
										match = match[0];
										images = match.image;
										match.imageN = {};
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator13 = regeneratorRuntime.values(images), $_normal13 = false;
										context$1$0.prev = 20;
									case 21:
										if (false) {
											context$1$0.next = 30;
											break;
										}
										$_step13 = $_iterator13.next();
										if (!$_step13.done) {
											context$1$0.next = 26;
											break;
										}
										$_normal13 = true;
										return context$1$0.abrupt('break', 30);
									case 26:
										image = $_step13.value;
										match.imageN[image.size] = {
											url: image['#text'],
											size: image.size
										};
										context$1$0.next = 21;
										break;
									case 30:
										context$1$0.next = 36;
										break;
									case 32:
										context$1$0.prev = 32;
										context$1$0.t0 = context$1$0['catch'](20);
										$_normal13 = false;
										$_err13 = context$1$0.t0;
									case 36:
										try {
											if (!$_normal13 && $_iterator13['return']) {
												$_iterator13['return']();
											}
										} catch (e) {
										}
										if (!$_err13) {
											context$1$0.next = 39;
											break;
										}
										throw $_err13;
									case 39:
										image = match.imageN['extralarge'] || match.imageN['large'];
										if (!image || !image.url) {
											if (metadata.playingParts[1] != song) {
												song = metadata.playingParts[1];
												fail = true;
											}
										}
										if (fail) {
											context$1$0.next = 43;
											break;
										}
										return context$1$0.abrupt('break', 45);
									case 43:
										context$1$0.next = 3;
										break;
									case 45:
										metadata.img = image ? image.url : '';
									case 46:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							20,
							32
						]]);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'getPictureModo2', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(metadata) {
						var url, req, body, match, images, image;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										if (!metadata.artist)
											metadata.artist = metadata.playingParts[0];
										if (!metadata.title)
											metadata.title = metadata.playingParts[1];
										url = 'https://api.spotify.com/v1/search?q=artist:' + metadata.artist + ' track:' + metadata.title + '&limit=1&type=track';
										req = new core.VW.Http.Request(url);
										context$1$0.next = 6;
										return regeneratorRuntime.awrap(req.getResponseAsync());
									case 6:
										body = context$1$0.sent;
										body = body.body;
										if (typeof body == 'string')
											body = JSON.parse(body);
										console.info('body', body);
										match = body.tracks.items;
										if (match.length > 0) {
											match = match[0];
											images = match.album.images;
											if (images) {
												images.sort(function (a, b) {
													return a.height > b.height ? -1 : a.height < b.height ? 1 : 0;
												});
												image = images[0];
											}
										}
										metadata.img = image ? image.url : '';
									case 13:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'getTimeNoPlaying', {
					enumerable: false,
					value: function () {
						var timeno = this.timeNoPlaying || 0;
						if (this.timeNoPlaying_current)
							timeno += Date.now() - this.timeNoPlaying_current;
						return timeno;
					}
				});
				Object.defineProperty(PlayerController.prototype, 'getStatusJSON', {
					enumerable: false,
					value: function (xml) {
						var y = xml.indexOf('<html');
						xml = xml.substring(y);
						var jd = $(xml), mount, trs, tr, id, src, source = [], td;
						var mounts = jd.find('.mountcont');
						for (var i = 0; i < mounts.length; i++) {
							src = {};
							mount = mounts.eq(i);
							trs = mount.find('table tr');
							for (var y = 0; y < trs.length; y++) {
								tr = trs.eq(y);
								td = tr.find('td');
								id = td.eq(0).text().toUpperCase();
								if (id == 'STREAM NAME:')
									src.server_name = td.eq(1).text();
								else if (id == 'STREAM DESCRIPTION:')
									src.server_description = td.eq(1).text();
								else if (id == 'CONTENT TYPE:')
									src.server_type = td.eq(1).text();
								else if (id == 'STREAM STARTED:')
									src.stream_start = td.eq(1).text();
								else if (id == 'BITRATE:')
									src['ice-bitrate'] = td.eq(1).text() | 0;
								else if (id == 'LISTENERS (CURRENT):')
									src.listeners = td.eq(1).text() | 0;
								else if (id == 'LISTENERS (PEAK):')
									src.listeners_peak = td.eq(1).text() | 0;
								else if (id == 'GENRE:')
									src.genre = td.eq(1).text();
								else if (id == 'STREAM URL:')
									src.server_url = td.eq(1).text();
								else if (id == 'CURRENTLY PLAYING:')
									src.yp_currently_playing = td.eq(1).text();
							}
							source.push(src);
						}
						return { source: source };
					}
				});
				Object.defineProperty(PlayerController.prototype, 'getCorrectSource', {
					enumerable: false,
					value: function (data) {
						var source = data.source;
						{
							typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
							var src;
							var $_iterator14 = regeneratorRuntime.values(source), $_normal14 = false, $_err14;
							try {
								while (true) {
									var $_step14 = $_iterator14.next();
									if ($_step14.done) {
										$_normal14 = true;
										break;
									}
									{
										src = $_step14.value;
										if (src.listeners > 0)
											return src;
									}
								}
							} catch (e) {
								$_normal14 = false;
								$_err14 = e;
							}
							try {
								if (!$_normal14 && $_iterator14['return']) {
									$_iterator14['return']();
								}
							} catch (e) {
							}
							if ($_err14) {
								throw $_err14;
							}
						}
						{
							typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
							var src;
							var $_iterator15 = regeneratorRuntime.values(source), $_normal15 = false, $_err15;
							try {
								while (true) {
									var $_step15 = $_iterator15.next();
									if ($_step15.done) {
										$_normal15 = true;
										break;
									}
									{
										src = $_step15.value;
										if (src.connected > 0)
											return src;
									}
								}
							} catch (e) {
								$_normal15 = false;
								$_err15 = e;
							}
							try {
								if (!$_normal15 && $_iterator15['return']) {
									$_iterator15['return']();
								}
							} catch (e) {
							}
							if ($_err15) {
								throw $_err15;
							}
						}
						return source[0];
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_error', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										scope.state = {
											stop: true,
											noplaying: true
										};
										context$1$0.next = 4;
										return regeneratorRuntime.awrap(core.VW.Task.sleep(1000));
									case 4:
										this.audio.play();
									case 5:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(PlayerController.prototype, 'event_loadstart', {
					enumerable: false,
					value: function () {
						this.timeNoPlaying = 0;
						this.timeNoPlaying_current = 0;
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_play', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						scope.state = { play: true };
						if (this.timeNoPlaying_current !== undefined && this.timeNoPlaying_current > 0) {
							this.timeNoPlaying = this.timeNoPlaying || 0;
							this.timeNoPlaying += Date.now() - this.timeNoPlaying_current;
							this.timeNoPlaying_current = 0;
						}
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_waiting', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						scope.state = { waiting: true };
						if (!this.timeNoPlaying_current) {
							this.timeNoPlaying_current = Date.now();
						}
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_pause', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						scope.state = {
							pause: true,
							noplaying: true
						};
						this.timeNoPlaying_current = Date.now();
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_stop', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						scope.state = {
							stop: true,
							noplaying: true
						};
						this.stoped = true;
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_playClick', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope;
						if (this.stoped) {
							scope.audio = scope.audio;
							this.stoped = false;
						}
						this.audio.play();
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_pauseClick', {
					enumerable: false,
					value: function () {
						this.audio.pause();
					}
				});
				Object.defineProperty(PlayerController.prototype, 'event_stopClick', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope, src;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										this.audio.pause();
										scope = this.app.scope;
										src = scope.audio.src;
										scope.audio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';
										scope.audio = scope.audio;
										this.event_stop();
										context$1$0.next = 8;
										return regeneratorRuntime.awrap(core.VW.Task.sleep(200));
									case 8:
										scope.audio.src = src;
									case 9:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
			}
			exports.default = PlayerController;

			/***/
}),
/* 21 */
/***/ (function (module, exports) {

	/* WEBPACK VAR INJECTION */(function (global) {
				var exe = function (code) {
					eval(code);
				};
				var G = core.org.voxsoftware.Inovanex;
				var U = core.org.voxsoftware.Util;
				var $ = global.$;
				{
					var RouteManager = function RouteManager() {
						RouteManager.$constructor ? RouteManager.$constructor.apply(this, arguments) : RouteManager.$superClass && RouteManager.$superClass.apply(this, arguments);
					};
					RouteManager.prototype = Object.create(U.Module.prototype);
					Object.setPrototypeOf ? Object.setPrototypeOf(RouteManager, U.Module) : RouteManager.__proto__ = U.Module;
					RouteManager.prototype.constructor = RouteManager;
					RouteManager.$super = U.Module.prototype;
					RouteManager.$superClass = U.Module;
					Object.defineProperty(RouteManager.prototype, 'view', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(view) {
							var req, res;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											if (!view.endsWith('.html'))
												view += '.html';
											req = new core.VW.Http.Request(view);
											req.async = true;
											context$1$0.next = 5;
											return regeneratorRuntime.awrap(req.getResponseAsync());
										case 5:
											res = context$1$0.sent;
											context$1$0.next = 8;
											return regeneratorRuntime.awrap(this.processHtml(res.body));
										case 8:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(RouteManager.prototype, 'enableLoading', {
						enumerable: false,
						value: function () {
							$('.loading-container,.loading-cover').show();
							var progress = $('.loading-progress');
							if (!this.loading) {
								progress.css('transition-duration', '6s');
								progress.css('width', '80%');
								this.loading = true;
								this.task = new core.VW.Task();
								this.task.oncomplete = function () {
									progress.css('transition-duration', '0.7s');
									progress.css('width', '100%');
									setTimeout(function () {
										$('.loading-container,.loading-cover').hide();
									}, 800);
								};
							}
						}
					});
					Object.defineProperty(RouteManager.prototype, 'deleteAttributes', {
						enumerable: false,
						value: function (element) {
							var attributes = element.get(0).attributes;
							for (var i = 0; i < attributes.length; i++) {
								element.removeAttr(attributes[i].name);
							}
						}
					});
					Object.defineProperty(RouteManager.prototype, 'copyAttributes', {
						enumerable: false,
						value: function (element, element2) {
							var attributes = element.get(0).attributes;
							for (var i = 0; i < attributes.length; i++) {
								element2.attr(attributes[i].name, attributes[i].value);
							}
						}
					});
					Object.defineProperty(RouteManager.prototype, 'replaceAttributes', {
						enumerable: false,
						value: function (element, element2, ignore) {
							if (ignore === undefined) {
								ignore = [];
							}
							var attributes = element.get(0).attributes, attributes2 = element2.get(0).attributes, e1byname = {}, n;
							for (var i = 0; i < attributes.length; i++) {
								e1byname[attributes[i].name] = attributes[i].value;
							}
							var e1keys = Object.keys(e1byname);
							for (var i = 0; i < attributes2.length; i++) {
								n = attributes2[i].name;
								v = attributes2[i].value;
								if (e1keys.indexOf(n) < 0) {
									element2.removeAttr(n);
								} else if (e1byname[n] != v && ignore.indexOf(n) < 0) {
									element2.attr(n, e1byname[n]);
								}
							}
						}
					});
					Object.defineProperty(RouteManager.prototype, 'processHtml', {
						enumerable: false,
						value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(html) {
							var contenido, jq, body, main0, main02, main1, main12, toAnimate, toremove, i, html1, meta, scripts;
							return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
								while (1)
									switch (context$1$0.prev = context$1$0.next) {
										case 0:
											contenido = html.replace(/(\<html\s+|\<\/html\>|\<head\s+|\<\/head\>|\<body\s+|\<\/body\>)/ig, function (v) {
												v = v.toLowerCase();
												if (v.indexOf('html') >= 0)
													return v.replace('html', 'vhtml');
												if (v.indexOf('head') >= 0)
													return v.replace('head', 'vhead');
												if (v.indexOf('body') >= 0)
													return v.replace('body', 'vbody');
											});
											jq = $(contenido);
											body = jq.find('vbody>*');
											main0 = jq.find('.main-0');
											main02 = $('.main-0');
											main1 = jq.find('.main-1');
											main12 = $('.main-1');
											window.pe = body;
											this.app.reset();
											if (!(main1.length + main12.length >= 2)) {
												context$1$0.next = 17;
												break;
											}
											main12.voxanimate('fadeOut', 300);
											context$1$0.next = 13;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(300));
										case 13:
											main12.html(main1.html());
											toAnimate = main12;
											context$1$0.next = 28;
											break;
										case 17:
											if (!(main0.length + main02.length >= 2)) {
												context$1$0.next = 25;
												break;
											}
											main02.voxanimate('fadeOut', 300);
											context$1$0.next = 21;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(300));
										case 21:
											main02.html(main0.html());
											toAnimate = main02;
											context$1$0.next = 28;
											break;
										case 25:
											toremove = $('body>*').not('.inmovible');
											toremove.remove();
											for (i = 0; i < body.length; i++) {
												$('body').append(body.eq(i));
											}
										case 28:
											html1 = jq.find('vhead').html();
											if (true) {
												meta = jq.find('vhead meta,vhead title');
												$('head meta,head title').remove();
												for (i = 0; i < meta.length; i++) {
													$('head').append(meta);
												}
												this.replaceAttributes(jq, $('html'));
												scripts = jq.find('vhead script');
												scripts.each(function () {
													var s = $(this);
													var code = s.html();
													if (code)
														exe(code);
												});
											}
											if (!toAnimate) {
												context$1$0.next = 34;
												break;
											}
											context$1$0.next = 33;
											return regeneratorRuntime.awrap(core.VW.Task.sleep(500));
										case 33:
											toAnimate.voxanimate('fadeIn', 300);
										case 34:
											if (this.task)
												this.task.finish();
										case 35:
										case 'end':
											return context$1$0.stop();
									}
							}, null, this);
						})
					});
					Object.defineProperty(RouteManager.prototype, 'init', {
						enumerable: false,
						value: function () {
							this.router = new core.dynvox.Router();
							var r;
							for (var id in G.Routes) {
								r = G.Routes[id];
								console.info('Route: ', r);
								if (r && r.routes)
									r.routes(this.router, this.app);
							}
							this.router.use(function (self$0) {
								return function () {
									return self$0.view('404');
								};
							}(this));
							return this.router.start();
						}
					});
					Object.defineProperty(RouteManager.prototype, 'getParameters', {
						enumerable: false,
						value: function () {
							var hashStr = this.router.location.hash;
							if (hashStr)
								hashStr = hashStr.substring(1);
							var hash = {};
							if (hashStr) {
								var p, parts = hashStr.split('&'), part;
								for (var i = 0; i < parts.length; i++) {
									part = parts[i];
									p = part.split('=');
									hash[p[0]] = p[1];
								}
							}
							var params = this.router.params;
							var o = {};
							for (var id in params) {
								o[id] = params[id];
							}
							for (var id in hash) {
								if (!o[id])
									o[id] = hash[id];
							}
							return o;
						}
					});
					Object.defineProperty(RouteManager.prototype, 'redirect', {
						enumerable: false,
						value: function (route, parameters) {
							var url = '#/' + route;
							if (parameters) {
								str = [];
								for (var id in parameters) {
									str.push(id + '=' + parameters[id]);
								}
								url += '#' + str.join('&');
							}
							var base = this.app.uiUrl;
							return this.router.start(undefined, base + url);
						}
					});
				}
				exports.default = RouteManager;
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 22 */
/***/ (function (module, exports) {

			var U = core.org.voxsoftware.Util;
			var G = core.org.voxsoftware.Inovanex;
			var $ = core.VW.Web.JQuery;
			{
				var SideNav = function SideNav() {
					SideNav.$constructor ? SideNav.$constructor.apply(this, arguments) : SideNav.$superClass && SideNav.$superClass.apply(this, arguments);
				};
				SideNav.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(SideNav, U.Module) : SideNav.__proto__ = U.Module;
				SideNav.prototype.constructor = SideNav;
				SideNav.$super = U.Module.prototype;
				SideNav.$superClass = U.Module;
				SideNav.prototype.__defineGetter__('uiSideNavDom', function () {
					return $('.side-nav');
				});
				SideNav.prototype.__defineGetter__('uiSideNav', function () {
					return this.uiSideNavDom.voxsidenav()[0];
				});
				Object.defineProperty(SideNav.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
						var scope = this.app.scope, self = this;
						scope['menu-click'] = function (self$0) {
							return function () {
								self$0.uiSideNav.open();
							};
						}(this);
						scope['menu-back'] = function () {
							window.history.back();
						};
						scope['salir-click'] = this.eventSalir.bind(this);
						scope['userCard'] = this.event_userCard.bind(this);
						$(document).click(this.event_documentClick.bind(this));
					}
				});
				Object.defineProperty(SideNav.prototype, 'event_documentClick', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(ev) {
						var target, card, card2;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										if (!this.hiding) {
											context$1$0.next = 2;
											break;
										}
										return context$1$0.abrupt('return');
									case 2:
										target = $(ev.target);
										card = $('.user-info.card');
										if (!(card.get(0) == target.get(0))) {
											context$1$0.next = 6;
											break;
										}
										return context$1$0.abrupt('return');
									case 6:
										if (!(card.find(ev.target).length > 0)) {
											context$1$0.next = 8;
											break;
										}
										return context$1$0.abrupt('return');
									case 8:
										card2 = $('.user-clic');
										if (!(card2.get(0) == target.get(0))) {
											context$1$0.next = 11;
											break;
										}
										return context$1$0.abrupt('return');
									case 11:
										if (!(card2.find(ev.target).length > 0)) {
											context$1$0.next = 13;
											break;
										}
										return context$1$0.abrupt('return');
									case 13:
										this.hiding = true;
										if (card.is(':visible'))
											card.voxanimate('zoomOutRight', 500);
										context$1$0.next = 17;
										return regeneratorRuntime.awrap(core.VW.Task.sleep(500));
									case 17:
										this.hiding = false;
									case 18:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(SideNav.prototype, 'event_userCard', {
					enumerable: false,
					value: function () {
						var card = $('.user-info.card');
						if (!card.is(':visible'))
							card.voxanimate('zoomInRight', 500);
						else
							card.voxanimate('zoomOutRight', 500);
					}
				});
				Object.defineProperty(SideNav.prototype, 'eventSalir', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var messageManager;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										messageManager = this.app.messageManager;
										context$1$0.prev = 1;
										this.uiSideNav.close();
										context$1$0.next = 5;
										return regeneratorRuntime.awrap(this.app.getModule('login').exit());
									case 5:
										this.app.redirect('login');
										context$1$0.next = 11;
										break;
									case 8:
										context$1$0.prev = 8;
										context$1$0.t0 = context$1$0['catch'](1);
										messageManager.error('Hubo un problema al cerrar la sesión. ' + context$1$0.t0.message);
									case 11:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							1,
							8
						]]);
					})
				});
			}
			exports.default = SideNav;

			/***/
}),
/* 23 */
/***/ (function (module, exports, __webpack_require__) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var SquareViewController = function SquareViewController() {
					SquareViewController.$constructor ? SquareViewController.$constructor.apply(this, arguments) : SquareViewController.$superClass && SquareViewController.$superClass.apply(this, arguments);
				};
				SquareViewController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(SquareViewController, U.Module) : SquareViewController.__proto__ = U.Module;
				SquareViewController.prototype.constructor = SquareViewController;
				SquareViewController.$super = U.Module.prototype;
				SquareViewController.$superClass = U.Module;
				Object.defineProperty(SquareViewController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var module;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										module = window.dataModuleName;
										this.module = this.app.getModule(module);
										context$1$0.next = 4;
										return regeneratorRuntime.awrap(this.app.getModule('BoardController').commonUi());
									case 4:
										this.getData();
									case 5:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(SquareViewController.prototype, 'getData', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						var scope, col, item, self, data, i, y, p, nb, button, $_iterator16, $_normal16, $_err16, $_step16, d, $_iterator17, $_normal17, $_err17, $_step17, id;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope, self = this;
										context$1$0.next = 3;
										return regeneratorRuntime.awrap(this.module.getData());
									case 3:
										data = context$1$0.sent;
										data.size = data.size || 'm6 s12';
										for (i = 0; i < data.data.length; i++) {
											data.data[i].items = [];
											for (y = 0; y < data.cols.length; y++) {
												col = data.cols[y];
												item = {
													'titulo': col.name,
													'texto': data.data[i][col.value]
												};
												if (col.type == 'datetime') {
													if (item.texto)
														item.texto = new U.Datetime(core.VW.Moment(new Date(item.texto)));
												} else if (col.type == 'int')
													item.texto = parseInt(item.texto);
												else if (col.type == 'number')
													item.texto = parseFloat(item.texto);
												else {
													if (col.crop > 0 && item.texto) {
														if (item.texto.toString().length > col.crop)
															item.texto = item.texto.toString().substring(0, col.crop - 4) + ' ...';
													}
												}
												data.data[i].items.push(item);
											}
										}
										if (!data.individualbuttons) {
											context$1$0.next = 57;
											break;
										}
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator16 = regeneratorRuntime.values(data.individualbuttons), $_normal16 = false;
										context$1$0.prev = 9;
									case 10:
										if (false) {
											context$1$0.next = 48;
											break;
										}
										$_step16 = $_iterator16.next();
										if (!$_step16.done) {
											context$1$0.next = 15;
											break;
										}
										$_normal16 = true;
										return context$1$0.abrupt('break', 48);
									case 15:
										button = $_step16.value;
										p = new core.dynvox.Scope();
										p.createVariable('button', null);
										p.button = button;
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator17 = regeneratorRuntime.values(data.data), $_normal17 = false;
										context$1$0.prev = 21;
									case 22:
										if (false) {
											context$1$0.next = 37;
											break;
										}
										$_step17 = $_iterator17.next();
										if (!$_step17.done) {
											context$1$0.next = 27;
											break;
										}
										$_normal17 = true;
										return context$1$0.abrupt('break', 37);
									case 27:
										d = $_step17.value;
										nb = {};
										p.createVariable('d', null);
										p.d = d;
										for (id in button) {
											if (typeof button[id] == 'string') {
												nb[id] = p.observer.format(button[id], true);
												if (id == 'href' && !nb[id]) {
													nb[id] = 'javascript:void(0)';
													if (button.type == 'delete') {
														this.createEvent(nb, d, button);
													}
												} else if (id == 'href') {
													nb[id] = '#/' + nb[id];
												}
											}
										}
										d.buttons = d.buttons || [];
										d.buttons.push(nb);
										p.remove('d');
										context$1$0.next = 22;
										break;
									case 37:
										context$1$0.next = 43;
										break;
									case 39:
										context$1$0.prev = 39;
										context$1$0.t0 = context$1$0['catch'](21);
										$_normal17 = false;
										$_err17 = context$1$0.t0;
									case 43:
										try {
											if (!$_normal17 && $_iterator17['return']) {
												$_iterator17['return']();
											}
										} catch (e) {
										}
										if (!$_err17) {
											context$1$0.next = 46;
											break;
										}
										throw $_err17;
									case 46:
										context$1$0.next = 10;
										break;
									case 48:
										context$1$0.next = 54;
										break;
									case 50:
										context$1$0.prev = 50;
										context$1$0.t1 = context$1$0['catch'](9);
										$_normal16 = false;
										$_err16 = context$1$0.t1;
									case 54:
										try {
											if (!$_normal16 && $_iterator16['return']) {
												$_iterator16['return']();
											}
										} catch (e) {
										}
										if (!$_err16) {
											context$1$0.next = 57;
											break;
										}
										throw $_err16;
									case 57:
										scope.response = data;
									case 58:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [
								[
									9,
									50
								],
								[
									21,
									39
								]
							]);
					})
				});
				Object.defineProperty(SquareViewController.prototype, 'createEvent', {
					enumerable: false,
					value: function (nb, data, button) {
						var self = this;
						nb.click = function (ev) {
							return self.buttonClick($(this), {
								data: data,
								button: button
							});
						};
					}
				});
				Object.defineProperty(SquareViewController.prototype, 'buttonClick', {
					enumerable: false,
					value: function (a, ev) {
						var privateScope = a.voxscope();
						var button = privateScope.button;
						var d = privateScope.d;
						if (button.type == 'delete') {
							this.currentObject = d;
							this.currentButton = button;
							this.app.messageManager.confirm({
								'title': 'Confirmar eliminación',
								'text': '\xBFEstá seguro que desea eliminar este registro?',
								'confirm': this.event_eliminarConfirmar.bind(this, ev)
							});
						}
					}
				});
				Object.defineProperty(SquareViewController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
					}
				});
				Object.defineProperty(SquareViewController.prototype, 'event_eliminarConfirmar', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(ev) {
						var data;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										if (ev && ev.preventDefault)
											ev.preventDefault();
										if (!this.currentObject) {
											context$1$0.next = 14;
											break;
										}
										context$1$0.prev = 2;
										data = ev.data;
										if (ev.button.transform) {
											data = ev.button.transform(data);
										}
										context$1$0.next = 7;
										return regeneratorRuntime.awrap(this.app.remote.delete(this.currentButton.uri, data));
									case 7:
										this.app.messageManager.confirmClose();
										this.getData();
										context$1$0.next = 14;
										break;
									case 11:
										context$1$0.prev = 11;
										context$1$0.t0 = context$1$0['catch'](2);
										this.app.messageManager.error(context$1$0.t0.message || context$1$0.t0.toString());
									case 14:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							2,
							11
						]]);
					})
				});
			}
			exports.default = SquareViewController;

			/***/
}),
/* 24 */
/***/ (function (module, exports, __webpack_require__) {

			var G = core.org.voxsoftware.Inovanex;
			var U = core.org.voxsoftware.Util;
			var $ = core.VW.Web.JQuery;
			{
				var TemaController = function TemaController() {
					TemaController.$constructor ? TemaController.$constructor.apply(this, arguments) : TemaController.$superClass && TemaController.$superClass.apply(this, arguments);
				};
				TemaController.prototype = Object.create(U.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(TemaController, U.Module) : TemaController.__proto__ = U.Module;
				TemaController.prototype.constructor = TemaController;
				TemaController.$super = U.Module.prototype;
				TemaController.$superClass = U.Module;
				Object.defineProperty(TemaController.prototype, 'ui', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0() {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				TemaController.prototype.__defineGetter__('colors', function () {
					var colors = [
						'blue',
						'cyan',
						'teal',
						'red',
						'purple',
						'deeppurple',
						'pink',
						'bluegray',
						'yellow',
						'orange',
						'deeporange',
						'green',
						'lightgreen',
						'gray'
					];
					var colorClasses = [
						'blue',
						'cyan',
						'teal',
						'red',
						'purple',
						'deep-purple',
						'pink',
						'blue-gray',
						'yellow',
						'orange',
						'deep-orange',
						'green',
						'light-green',
						'gray'
					];
					var colorNames = [
						'Azul',
						'Cyan',
						'Agua marina',
						'Rojo',
						'Violeta',
						'Violeta oscuro',
						'Rosado',
						'Gris azulado',
						'Amarillo',
						'Naranja',
						'Naranja oscuro',
						'Verde',
						'Verde claro',
						'Gris'
					];
					var variations = {
						'default': '',
						'darken1': 'darken-1',
						'darken2': 'darken-2',
						'darken3': 'darken-3',
						'lighten1': 'lighten-1',
						'lighten2': 'lighten-2',
						'lighten3': 'lighten-3'
					};
					var ColorSelect = [], color;
					ColorSelect.push({
						'value': '',
						'text': 'No usar'
					});
					ColorSelect.push({
						'value': 'black:default',
						'html': '<div class=\'color-preview inline-block black\'></div> Negro'
					});
					ColorSelect.push({
						'value': 'white:default',
						'html': '<div class=\'color-preview inline-block white\'></div> Blanco'
					});
					var z;
					for (var i = 0; i < colors.length; i++) {
						color = colors[i];
						z = 0;
						for (var id in variations) {
							ColorSelect.push({
								'value': color + ':' + id,
								'html': '<div class=\'color-preview inline-block ' + colorClasses[i] + ' ' + variations[id] + '\'></div> ' + colorNames[i] + ' - Variación ' + ++z + ''
							});
						}
					}
					return ColorSelect;
				});
				Object.defineProperty(TemaController.prototype, 'getDataForm', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var scope, colors, temas, temaSelect, tema, i, dataset;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										colors = this.colors;
										context$1$0.next = 4;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'temas' },
											query: {}
										}));
									case 4:
										temas = context$1$0.sent;
										temaSelect = [];
										temaSelect.push({
											selected: true,
											disabled: true,
											value: '',
											text: 'Seleccione un tema'
										});
										for (i = 0; i < temas.length; i++) {
											tema = temas[i];
											temaSelect.push({
												'value': tema._id.toString(),
												'text': tema.nombre
											});
										}
										dataset = {
											'titulo': 'Nuevo tema',
											'boton': {
												submit: {
													titulo: 'Guardar',
													api: function (data) {
														if (data._id) {
															return 'db/edit';
														} else {
															return 'db';
														}
													},
													method: 'put',
													transform: function (data) {
														if (!data._id) {
															return {
																insert: data,
																options: { tablename: 'temas' }
															};
														} else {
															return {
																query: { _id: data._id },
																update: data,
																options: { tablename: 'temas' }
															};
														}
													}
												}
											},
											messages: { 'success': 'Se ha guardado la información correctamente' },
											action: { endUrl: 'tema' },
											inputs: [
												{
													'label': 'Id',
													'bind': '_id',
													'type': 'text',
													'size': 's12',
													'readonly': true
												},
												{
													'label': 'Nombre',
													'bind': 'nombre',
													'type': 'text',
													'size': 's12'
												},
												{
													'label': 'Tema padre',
													'bind': 'padre',
													'type': 'select',
													'size': 's12',
													'data': temaSelect
												},
												{
													'label': 'Contenido',
													'bind': 'contenido',
													'type': 'largetext',
													'size': 's12'
												},
												{
													'label': 'Ancho predeterminado (vacío es 100%)',
													'bind': 'width',
													'type': 'text',
													'mask': '000',
													'size': 's6'
												},
												{
													'label': 'Alto predeterminado (vacío es 100%)',
													'bind': 'height',
													'type': 'text',
													'mask': '000',
													'size': 's6'
												},
												{
													'label': 'Ancho mínimo (vacío es sin restricción)',
													'bind': 'minwidth',
													'type': 'text',
													'mask': '000',
													'size': 's6'
												},
												{
													'label': 'Alto mínimo (vacío es sin restricción)',
													'bind': 'minheight',
													'type': 'text',
													'mask': '000',
													'size': 's6'
												},
												{
													'label': 'Ancho máximo (vacío es sin restricción)',
													'bind': 'maxwidth',
													'type': 'text',
													'mask': '0000',
													'size': 's6'
												},
												{
													'label': 'Alto máximo (vacío es sin restricción)',
													'bind': 'maxheight',
													'type': 'text',
													'mask': '0000',
													'size': 's6'
												},
												{
													'label': 'Parámetros del tema (ej: par1>value1@value2,par2>default, ...)',
													'bind': 'parametros',
													'type': 'largetext',
													'size': 's12'
												},
												{
													'label': 'Color fondo 1',
													'bind': 'color_0',
													'type': 'select',
													'size': 's12 sl6 m4',
													'data': colors
												},
												{
													'label': 'Color fondo 2',
													'bind': 'color_1',
													'type': 'select',
													'size': 's12 sl6 m4',
													'data': colors
												},
												{
													'label': 'Color fondo 3',
													'bind': 'color_2',
													'type': 'select',
													'size': 's12 sl6 m4',
													'data': colors
												},
												{
													'label': 'Color texto 1',
													'bind': 'text_color_0',
													'type': 'select',
													'size': 's12 sl6 m4',
													'data': colors
												},
												{
													'label': 'Color texto 2',
													'bind': 'text_color_1',
													'type': 'select',
													'size': 's12 sl6 m4',
													'data': colors
												},
												{
													'label': 'Color texto 3',
													'bind': 'text_color_2',
													'type': 'select',
													'size': 's12 sl6 m4',
													'data': colors
												}
											]
										};
										if (!(args && args._id)) {
											context$1$0.next = 15;
											break;
										}
										args._id = new U.ObjectId(args._id);
										context$1$0.next = 13;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'temas' },
											query: args || {}
										}));
									case 13:
										dataset.data = context$1$0.sent;
										dataset.data = dataset.data ? dataset.data[0] : null;
									case 15:
										return context$1$0.abrupt('return', dataset);
									case 16:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(TemaController.prototype, 'getData', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(args) {
						var scope, data, d, $_iterator18, $_normal18, $_err18, $_step18, dataset;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										scope = this.app.scope;
										if (!args) {
											args = {};
										}
										args.deleted = { $ne: true };
										context$1$0.next = 5;
										return regeneratorRuntime.awrap(this.app.remote.post('db/query', {
											options: { tablename: 'temas' },
											query: args || {}
										}));
									case 5:
										data = context$1$0.sent;
										typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined;
										$_iterator18 = regeneratorRuntime.values(data), $_normal18 = false;
										context$1$0.prev = 8;
									case 9:
										if (false) {
											context$1$0.next = 18;
											break;
										}
										$_step18 = $_iterator18.next();
										if (!$_step18.done) {
											context$1$0.next = 14;
											break;
										}
										$_normal18 = true;
										return context$1$0.abrupt('break', 18);
									case 14:
										d = $_step18.value;
										d.cid = d._id.toString();
										context$1$0.next = 9;
										break;
									case 18:
										context$1$0.next = 24;
										break;
									case 20:
										context$1$0.prev = 20;
										context$1$0.t0 = context$1$0['catch'](8);
										$_normal18 = false;
										$_err18 = context$1$0.t0;
									case 24:
										try {
											if (!$_normal18 && $_iterator18['return']) {
												$_iterator18['return']();
											}
										} catch (e) {
										}
										if (!$_err18) {
											context$1$0.next = 27;
											break;
										}
										throw $_err18;
									case 27:
										dataset = {
											titulo: 'Temas',
											boton: {
												nuevo: {
													titulo: 'Nuevo',
													href: 'tema/nuevo'
												}
											},
											cols: [
												{
													name: 'Nombre',
													value: 'nombre'
												},
												{
													name: 'Contenido',
													crop: 300,
													value: 'contenido'
												},
												{
													name: 'Parámetros',
													crop: 300,
													value: 'parametros'
												},
												{
													name: 'Fecha',
													value: 'created',
													type: 'datetime'
												}
											],
											data: data,
											size: 's12',
											individualbuttons: [
												{
													icon: 'fa fa-edit',
													href: 'tema/#{d.cid}',
													color: 'color-default color-text'
												},
												{
													icon: 'fa fa-times',
													href: '',
													color: 'red text-white',
													type: 'delete',
													transform: function (data) {
														return {
															query: { _id: data._id },
															options: { tablename: 'temas' }
														};
													},
													uri: 'db'
												}
											]
										};
										return context$1$0.abrupt('return', dataset);
									case 29:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							8,
							20
						]]);
					})
				});
				Object.defineProperty(TemaController.prototype, 'attachEvents', {
					enumerable: false,
					value: function () {
					}
				});
			}
			exports.default = TemaController;

			/***/
}),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

			exports.default = __webpack_require__(26);

			/***/
}),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; (function (global, factory) {
				if (true) {
					!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(27), __webpack_require__(29), __webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else if (typeof exports !== "undefined") {
					factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
				} else {
					var mod = {
						exports: {}
					};
					factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
					global.clipboard = mod.exports;
				}
			})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
				'use strict';

				var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

				var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

				var _goodListener2 = _interopRequireDefault(_goodListener);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
					return typeof obj;
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
				};

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}

					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}

					return call && (typeof call === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
					}

					subClass.prototype = Object.create(superClass && superClass.prototype, {
						constructor: {
							value: subClass,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var Clipboard = function (_Emitter) {
					_inherits(Clipboard, _Emitter);

					/**
					 * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
					 * @param {Object} options
					 */
					function Clipboard(trigger, options) {
						_classCallCheck(this, Clipboard);

						var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

						_this.resolveOptions(options);
						_this.listenClick(trigger);
						return _this;
					}

					/**
					 * Defines if attributes would be resolved using internal setter functions
					 * or custom functions that were passed in the constructor.
					 * @param {Object} options
					 */


					_createClass(Clipboard, [{
						key: 'resolveOptions',
						value: function resolveOptions() {
							var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
							this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
							this.text = typeof options.text === 'function' ? options.text : this.defaultText;
							this.container = _typeof(options.container) === 'object' ? options.container : document.body;
						}
					}, {
						key: 'listenClick',
						value: function listenClick(trigger) {
							var _this2 = this;

							this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
								return _this2.onClick(e);
							});
						}
					}, {
						key: 'onClick',
						value: function onClick(e) {
							var trigger = e.delegateTarget || e.currentTarget;

							if (this.clipboardAction) {
								this.clipboardAction = null;
							}

							this.clipboardAction = new _clipboardAction2.default({
								action: this.action(trigger),
								target: this.target(trigger),
								text: this.text(trigger),
								container: this.container,
								trigger: trigger,
								emitter: this
							});
						}
					}, {
						key: 'defaultAction',
						value: function defaultAction(trigger) {
							return getAttributeValue('action', trigger);
						}
					}, {
						key: 'defaultTarget',
						value: function defaultTarget(trigger) {
							var selector = getAttributeValue('target', trigger);

							if (selector) {
								return document.querySelector(selector);
							}
						}
					}, {
						key: 'defaultText',
						value: function defaultText(trigger) {
							return getAttributeValue('text', trigger);
						}
					}, {
						key: 'destroy',
						value: function destroy() {
							this.listener.destroy();

							if (this.clipboardAction) {
								this.clipboardAction.destroy();
								this.clipboardAction = null;
							}
						}
					}], [{
						key: 'isSupported',
						value: function isSupported() {
							var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

							var actions = typeof action === 'string' ? [action] : action;
							var support = !!document.queryCommandSupported;

							actions.forEach(function (action) {
								support = support && !!document.queryCommandSupported(action);
							});

							return support;
						}
					}]);

					return Clipboard;
				}(_tinyEmitter2.default);

				/**
				 * Helper function to retrieve attribute value.
				 * @param {String} suffix
				 * @param {Element} element
				 */
				function getAttributeValue(suffix, element) {
					var attribute = 'data-clipboard-' + suffix;

					if (!element.hasAttribute(attribute)) {
						return;
					}

					return element.getAttribute(attribute);
				}

				module.exports = Clipboard;
			});

			/***/
}),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; (function (global, factory) {
				if (true) {
					!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(28)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else if (typeof exports !== "undefined") {
					factory(module, require('select'));
				} else {
					var mod = {
						exports: {}
					};
					factory(mod, global.select);
					global.clipboardAction = mod.exports;
				}
			})(this, function (module, _select) {
				'use strict';

				var _select2 = _interopRequireDefault(_select);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : {
						default: obj
					};
				}

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
					return typeof obj;
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
				};

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}

					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				}();

				var ClipboardAction = function () {
					/**
					 * @param {Object} options
					 */
					function ClipboardAction(options) {
						_classCallCheck(this, ClipboardAction);

						this.resolveOptions(options);
						this.initSelection();
					}

					/**
					 * Defines base properties passed from constructor.
					 * @param {Object} options
					 */


					_createClass(ClipboardAction, [{
						key: 'resolveOptions',
						value: function resolveOptions() {
							var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							this.action = options.action;
							this.container = options.container;
							this.emitter = options.emitter;
							this.target = options.target;
							this.text = options.text;
							this.trigger = options.trigger;

							this.selectedText = '';
						}
					}, {
						key: 'initSelection',
						value: function initSelection() {
							if (this.text) {
								this.selectFake();
							} else if (this.target) {
								this.selectTarget();
							}
						}
					}, {
						key: 'selectFake',
						value: function selectFake() {
							var _this = this;

							var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

							this.removeFake();

							this.fakeHandlerCallback = function () {
								return _this.removeFake();
							};
							this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

							this.fakeElem = document.createElement('textarea');
							// Prevent zooming on iOS
							this.fakeElem.style.fontSize = '12pt';
							// Reset box model
							this.fakeElem.style.border = '0';
							this.fakeElem.style.padding = '0';
							this.fakeElem.style.margin = '0';
							// Move element out of screen horizontally
							this.fakeElem.style.position = 'absolute';
							this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
							// Move element to the same position vertically
							var yPosition = window.pageYOffset || document.documentElement.scrollTop;
							this.fakeElem.style.top = yPosition + 'px';

							this.fakeElem.setAttribute('readonly', '');
							this.fakeElem.value = this.text;

							this.container.appendChild(this.fakeElem);

							this.selectedText = (0, _select2.default)(this.fakeElem);
							this.copyText();
						}
					}, {
						key: 'removeFake',
						value: function removeFake() {
							if (this.fakeHandler) {
								this.container.removeEventListener('click', this.fakeHandlerCallback);
								this.fakeHandler = null;
								this.fakeHandlerCallback = null;
							}

							if (this.fakeElem) {
								this.container.removeChild(this.fakeElem);
								this.fakeElem = null;
							}
						}
					}, {
						key: 'selectTarget',
						value: function selectTarget() {
							this.selectedText = (0, _select2.default)(this.target);
							this.copyText();
						}
					}, {
						key: 'copyText',
						value: function copyText() {
							var succeeded = void 0;

							try {
								succeeded = document.execCommand(this.action);
							} catch (err) {
								succeeded = false;
							}

							this.handleResult(succeeded);
						}
					}, {
						key: 'handleResult',
						value: function handleResult(succeeded) {
							this.emitter.emit(succeeded ? 'success' : 'error', {
								action: this.action,
								text: this.selectedText,
								trigger: this.trigger,
								clearSelection: this.clearSelection.bind(this)
							});
						}
					}, {
						key: 'clearSelection',
						value: function clearSelection() {
							if (this.trigger) {
								this.trigger.focus();
							}

							window.getSelection().removeAllRanges();
						}
					}, {
						key: 'destroy',
						value: function destroy() {
							this.removeFake();
						}
					}, {
						key: 'action',
						set: function set() {
							var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

							this._action = action;

							if (this._action !== 'copy' && this._action !== 'cut') {
								throw new Error('Invalid "action" value, use either "copy" or "cut"');
							}
						},
						get: function get() {
							return this._action;
						}
					}, {
						key: 'target',
						set: function set(target) {
							if (target !== undefined) {
								if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
									if (this.action === 'copy' && target.hasAttribute('disabled')) {
										throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
									}

									if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
										throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
									}

									this._target = target;
								} else {
									throw new Error('Invalid "target" value, use a valid Element');
								}
							}
						},
						get: function get() {
							return this._target;
						}
					}]);

					return ClipboardAction;
				}();

				module.exports = ClipboardAction;
			});

			/***/
}),
/* 28 */
/***/ (function (module, exports) {

			function select(element) {
				var selectedText;

				if (element.nodeName === 'SELECT') {
					element.focus();

					selectedText = element.value;
				}
				else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
					var isReadOnly = element.hasAttribute('readonly');

					if (!isReadOnly) {
						element.setAttribute('readonly', '');
					}

					element.select();
					element.setSelectionRange(0, element.value.length);

					if (!isReadOnly) {
						element.removeAttribute('readonly');
					}

					selectedText = element.value;
				}
				else {
					if (element.hasAttribute('contenteditable')) {
						element.focus();
					}

					var selection = window.getSelection();
					var range = document.createRange();

					range.selectNodeContents(element);
					selection.removeAllRanges();
					selection.addRange(range);

					selectedText = selection.toString();
				}

				return selectedText;
			}

			module.exports = select;


			/***/
}),
/* 29 */
/***/ (function (module, exports) {

			function E() {
				// Keep this empty so it's easier to inherit from
				// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
			}

			E.prototype = {
				on: function (name, callback, ctx) {
					var e = this.e || (this.e = {});

					(e[name] || (e[name] = [])).push({
						fn: callback,
						ctx: ctx
					});

					return this;
				},

				once: function (name, callback, ctx) {
					var self = this;
					function listener() {
						self.off(name, listener);
						callback.apply(ctx, arguments);
					};

					listener._ = callback
					return this.on(name, listener, ctx);
				},

				emit: function (name) {
					var data = [].slice.call(arguments, 1);
					var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
					var i = 0;
					var len = evtArr.length;

					for (i; i < len; i++) {
						evtArr[i].fn.apply(evtArr[i].ctx, data);
					}

					return this;
				},

				off: function (name, callback) {
					var e = this.e || (this.e = {});
					var evts = e[name];
					var liveEvents = [];

					if (evts && callback) {
						for (var i = 0, len = evts.length; i < len; i++) {
							if (evts[i].fn !== callback && evts[i].fn._ !== callback)
								liveEvents.push(evts[i]);
						}
					}

					// Remove event from queue to prevent memory leak
					// Suggested by https://github.com/lazd
					// Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

					(liveEvents.length)
						? e[name] = liveEvents
						: delete e[name];

					return this;
				}
			};

			module.exports = E;


			/***/
}),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

			var is = __webpack_require__(31);
			var delegate = __webpack_require__(32);

			/**
			 * Validates all params and calls the right
			 * listener function based on its target type.
			 *
			 * @param {String|HTMLElement|HTMLCollection|NodeList} target
			 * @param {String} type
			 * @param {Function} callback
			 * @return {Object}
			 */
			function listen(target, type, callback) {
				if (!target && !type && !callback) {
					throw new Error('Missing required arguments');
				}

				if (!is.string(type)) {
					throw new TypeError('Second argument must be a String');
				}

				if (!is.fn(callback)) {
					throw new TypeError('Third argument must be a Function');
				}

				if (is.node(target)) {
					return listenNode(target, type, callback);
				}
				else if (is.nodeList(target)) {
					return listenNodeList(target, type, callback);
				}
				else if (is.string(target)) {
					return listenSelector(target, type, callback);
				}
				else {
					throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
				}
			}

			/**
			 * Adds an event listener to a HTML element
			 * and returns a remove listener function.
			 *
			 * @param {HTMLElement} node
			 * @param {String} type
			 * @param {Function} callback
			 * @return {Object}
			 */
			function listenNode(node, type, callback) {
				node.addEventListener(type, callback);

				return {
					destroy: function () {
						node.removeEventListener(type, callback);
					}
				}
			}

			/**
			 * Add an event listener to a list of HTML elements
			 * and returns a remove listener function.
			 *
			 * @param {NodeList|HTMLCollection} nodeList
			 * @param {String} type
			 * @param {Function} callback
			 * @return {Object}
			 */
			function listenNodeList(nodeList, type, callback) {
				Array.prototype.forEach.call(nodeList, function (node) {
					node.addEventListener(type, callback);
				});

				return {
					destroy: function () {
						Array.prototype.forEach.call(nodeList, function (node) {
							node.removeEventListener(type, callback);
						});
					}
				}
			}

			/**
			 * Add an event listener to a selector
			 * and returns a remove listener function.
			 *
			 * @param {String} selector
			 * @param {String} type
			 * @param {Function} callback
			 * @return {Object}
			 */
			function listenSelector(selector, type, callback) {
				return delegate(document.body, selector, type, callback);
			}

			module.exports = listen;


			/***/
}),
/* 31 */
/***/ (function (module, exports) {

			/**
			 * Check if argument is a HTML element.
			 *
			 * @param {Object} value
			 * @return {Boolean}
			 */
			exports.node = function (value) {
				return value !== undefined
					&& value instanceof HTMLElement
					&& value.nodeType === 1;
			};

			/**
			 * Check if argument is a list of HTML elements.
			 *
			 * @param {Object} value
			 * @return {Boolean}
			 */
			exports.nodeList = function (value) {
				var type = Object.prototype.toString.call(value);

				return value !== undefined
					&& (type === '[object NodeList]' || type === '[object HTMLCollection]')
					&& ('length' in value)
					&& (value.length === 0 || exports.node(value[0]));
			};

			/**
			 * Check if argument is a string.
			 *
			 * @param {Object} value
			 * @return {Boolean}
			 */
			exports.string = function (value) {
				return typeof value === 'string'
					|| value instanceof String;
			};

			/**
			 * Check if argument is a function.
			 *
			 * @param {Object} value
			 * @return {Boolean}
			 */
			exports.fn = function (value) {
				var type = Object.prototype.toString.call(value);

				return type === '[object Function]';
			};


			/***/
}),
/* 32 */
/***/ (function (module, exports, __webpack_require__) {

			var closest = __webpack_require__(33);

			/**
			 * Delegates event to a selector.
			 *
			 * @param {Element} element
			 * @param {String} selector
			 * @param {String} type
			 * @param {Function} callback
			 * @param {Boolean} useCapture
			 * @return {Object}
			 */
			function _delegate(element, selector, type, callback, useCapture) {
				var listenerFn = listener.apply(this, arguments);

				element.addEventListener(type, listenerFn, useCapture);

				return {
					destroy: function () {
						element.removeEventListener(type, listenerFn, useCapture);
					}
				}
			}

			/**
			 * Delegates event to a selector.
			 *
			 * @param {Element|String|Array} [elements]
			 * @param {String} selector
			 * @param {String} type
			 * @param {Function} callback
			 * @param {Boolean} useCapture
			 * @return {Object}
			 */
			function delegate(elements, selector, type, callback, useCapture) {
				// Handle the regular Element usage
				if (typeof elements.addEventListener === 'function') {
					return _delegate.apply(null, arguments);
				}

				// Handle Element-less usage, it defaults to global delegation
				if (typeof type === 'function') {
					// Use `document` as the first parameter, then apply arguments
					// This is a short way to .unshift `arguments` without running into deoptimizations
					return _delegate.bind(null, document).apply(null, arguments);
				}

				// Handle Selector-based usage
				if (typeof elements === 'string') {
					elements = document.querySelectorAll(elements);
				}

				// Handle Array-like based usage
				return Array.prototype.map.call(elements, function (element) {
					return _delegate(element, selector, type, callback, useCapture);
				});
			}

			/**
			 * Finds closest match and invokes callback.
			 *
			 * @param {Element} element
			 * @param {String} selector
			 * @param {String} type
			 * @param {Function} callback
			 * @return {Function}
			 */
			function listener(element, selector, type, callback) {
				return function (e) {
					e.delegateTarget = closest(e.target, selector);

					if (e.delegateTarget) {
						callback.call(element, e);
					}
				}
			}

			module.exports = delegate;


			/***/
}),
/* 33 */
/***/ (function (module, exports) {

			var DOCUMENT_NODE_TYPE = 9;

			/**
			 * A polyfill for Element.matches()
			 */
			if (typeof Element !== 'undefined' && !Element.prototype.matches) {
				var proto = Element.prototype;

				proto.matches = proto.matchesSelector ||
					proto.mozMatchesSelector ||
					proto.msMatchesSelector ||
					proto.oMatchesSelector ||
					proto.webkitMatchesSelector;
			}

			/**
			 * Finds the closest parent that matches a selector.
			 *
			 * @param {Element} element
			 * @param {String} selector
			 * @return {Function}
			 */
			function closest(element, selector) {
				while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
					if (typeof element.matches === 'function' &&
						element.matches(selector)) {
						return element;
					}
					element = element.parentNode;
				}
			}

			module.exports = closest;


			/***/
}),
/* 34 */
/***/ (function (module, exports) {

			{
				var Datetime = function Datetime() {
					Datetime.$constructor ? Datetime.$constructor.apply(this, arguments) : Datetime.$superClass && Datetime.$superClass.apply(this, arguments);
				};
				Object.defineProperty(Datetime, '$constructor', {
					enumerable: false,
					value: function (moment) {
						this.moment = moment;
					}
				});
				Object.defineProperty(Datetime.prototype, 'toString', {
					enumerable: false,
					value: function () {
						return this.moment.format(this.format || 'DD/MM/YYYY HH:mm:ss');
					}
				});
				Object.defineProperty(Datetime.prototype, 'toJSON', {
					enumerable: false,
					value: function () {
						return this.moment.toDate().toJSON();
					}
				});
				Object.defineProperty(Datetime.prototype, 'isValid', {
					enumerable: false,
					value: function () {
						return this.moment.isValid();
					}
				});
			}
			exports.default = Datetime;

			/***/
}),
/* 35 */
/***/ (function (module, exports) {



			/***/
}),
/* 36 */
/***/ (function (module, exports, __webpack_require__) {

			exports.default = __webpack_require__(37);

			/***/
}),
/* 37 */
/***/ (function (module, exports, __webpack_require__) {

			/*
			 * js_channel is a very lightweight abstraction on top of
			 * postMessage which defines message formats and semantics
			 * to support interactions more rich than just message passing
			 * js_channel supports:
			 *  + query/response - traditional rpc
			 *  + query/update/response - incremental async return of results
			 *    to a query
			 *  + notifications - fire and forget
			 *  + error handling
			 *
			 * js_channel is based heavily on json-rpc, but is focused at the
			 * problem of inter-iframe RPC.
			 *
			 * Message types:
			 *  There are 5 types of messages that can flow over this channel,
			 *  and you may determine what type of message an object is by
			 *  examining its parameters:
			 *  1. Requests
			 *    + integer id
			 *    + string method
			 *    + (optional) any params
			 *  2. Callback Invocations (or just "Callbacks")
			 *    + integer id
			 *    + string callback
			 *    + (optional) params
			 *  3. Error Responses (or just "Errors)
			 *    + integer id
			 *    + string error
			 *    + (optional) string message
			 *  4. Responses
			 *    + integer id
			 *    + (optional) any result
			 *  5. Notifications
			 *    + string method
			 *    + (optional) any params
			 */

			// Universal module definition //
			(function (root, factory) {
				if (true) {
					// CommonJS
					module.exports = factory();
				} else if (typeof define === 'function' && define.amd) {
					// AMD
					define([], function () {
						return (root.Channel = factory());
					});
				} else {
					// Global Variables
					root.Channel = factory();
				}
			}(this, function () {
				"use strict";
				var Channel = (function () {

					// current transaction id, start out at a random *odd* number between 1 and a million
					// There is one current transaction counter id per page, and it's shared between
					// channel instances.  That means of all messages posted from a single javascript
					// evaluation context, we'll never have two with the same id.
					var s_curTranId = Math.floor(Math.random() * 1000001);

					// no two bound channels in the same javascript evaluation context may have the same origin, scope, and window.
					// further if two bound channels have the same window and scope, they may not have *overlapping* origins
					// (either one or both support '*').  This restriction allows a single onMessage handler to efficiently
					// route messages based on origin and scope.  The s_boundChans maps origins to scopes, to message
					// handlers.  Request and Notification messages are routed using this table.
					// Finally, channels are inserted into this table when built, and removed when destroyed.
					var s_boundChans = {};

					// add a channel to s_boundChans, throwing if a dup exists
					function s_addBoundChan(win, origin, scope, handler) {
						function hasWin(arr) {
							for (var i = 0; i < arr.length; i++) if (arr[i].win === win) return true;
							return false;
						}

						// does she exist?
						var exists = false;

						if (origin === '*') {
							// we must check all other origins, sadly.
							for (var k in s_boundChans) {
								if (!s_boundChans.hasOwnProperty(k)) continue;
								if (k === '*') continue;
								if (typeof s_boundChans[k][scope] === 'object') {
									exists = hasWin(s_boundChans[k][scope]);
									if (exists) break;
								}
							}
						} else {
							// we must check only '*'
							if ((s_boundChans['*'] && s_boundChans['*'][scope])) {
								exists = hasWin(s_boundChans['*'][scope]);
							}
							if (!exists && s_boundChans[origin] && s_boundChans[origin][scope]) {
								exists = hasWin(s_boundChans[origin][scope]);
							}
						}
						if (exists) throw "A channel is already bound to the same window which overlaps with origin '" + origin + "' and has scope '" + scope + "'";

						if (typeof s_boundChans[origin] != 'object') s_boundChans[origin] = {};
						if (typeof s_boundChans[origin][scope] != 'object') s_boundChans[origin][scope] = [];
						s_boundChans[origin][scope].push({ win: win, handler: handler });
					}

					function s_removeBoundChan(win, origin, scope) {
						var arr = s_boundChans[origin][scope];
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].win === win) {
								arr.splice(i, 1);
							}
						}
						if (s_boundChans[origin][scope].length === 0) {
							delete s_boundChans[origin][scope];
						}
					}

					function s_isArray(obj) {
						if (Array.isArray) return Array.isArray(obj);
						else {
							return (obj.constructor.toString().indexOf("Array") != -1);
						}
					}

					// No two outstanding outbound messages may have the same id, period.  Given that, a single table
					// mapping "transaction ids" to message handlers, allows efficient routing of Callback, Error, and
					// Response messages.  Entries are added to this table when requests are sent, and removed when
					// responses are received.
					var s_transIds = {};

					// class singleton onMessage handler
					// this function is registered once and all incoming messages route through here.  This
					// arrangement allows certain efficiencies, message data is only parsed once and dispatch
					// is more efficient, especially for large numbers of simultaneous channels.
					var s_onMessage = function (e) {
						try {
							var m = JSON.parse(e.data);
							if (typeof m !== 'object' || m === null) throw "malformed";
						} catch (e) {
							// just ignore any posted messages that do not consist of valid JSON
							return;
						}

						var w = e.source;
						var o = e.origin;
						var s, i, meth;

						if (typeof m.method === 'string') {
							var ar = m.method.split('::');
							if (ar.length == 2) {
								s = ar[0];
								meth = ar[1];
							} else {
								meth = m.method;
							}
						}

						if (typeof m.id !== 'undefined') i = m.id;

						// w is message source window
						// o is message origin
						// m is parsed message
						// s is message scope
						// i is message id (or undefined)
						// meth is unscoped method name
						// ^^ based on these factors we can route the message

						// if it has a method it's either a notification or a request,
						// route using s_boundChans
						if (typeof meth === 'string') {
							var delivered = false;
							if (s_boundChans[o] && s_boundChans[o][s]) {
								for (var j = 0; j < s_boundChans[o][s].length; j++) {
									if (s_boundChans[o][s][j].win === w) {
										s_boundChans[o][s][j].handler(o, meth, m);
										delivered = true;
										break;
									}
								}
							}

							if (!delivered && s_boundChans['*'] && s_boundChans['*'][s]) {
								for (var j = 0; j < s_boundChans['*'][s].length; j++) {
									if (s_boundChans['*'][s][j].win === w) {
										s_boundChans['*'][s][j].handler(o, meth, m);
										break;
									}
								}
							}
						}
						// otherwise it must have an id (or be poorly formed
						else if (typeof i != 'undefined') {
							if (s_transIds[i]) s_transIds[i](o, meth, m);
						}
					};

					// Setup postMessage event listeners
					if (window.addEventListener) window.addEventListener('message', s_onMessage, false);
					else if (window.attachEvent) window.attachEvent('onmessage', s_onMessage);

					/* a messaging channel is constructed from a window and an origin.
					 * the channel will assert that all messages received over the
					 * channel match the origin
					 *
					 * Arguments to Channel.build(cfg):
					 *
					 *   cfg.window - the remote window with which we'll communicate
					 *   cfg.origin - the expected origin of the remote window, may be '*'
					 *                which matches any origin
					 *   cfg.scope  - the 'scope' of messages.  a scope string that is
					 *                prepended to message names.  local and remote endpoints
					 *                of a single channel must agree upon scope. Scope may
					 *                not contain double colons ('::').
					 *   cfg.debugOutput - A boolean value.  If true and window.console.log is
					 *                a function, then debug strings will be emitted to that
					 *                function.
					 *   cfg.postMessageObserver - A function that will be passed two arguments,
					 *                an origin and a message.  It will be passed these immediately
					 *                before messages are posted.
					 *   cfg.gotMessageObserver - A function that will be passed two arguments,
					 *                an origin and a message.  It will be passed these arguments
					 *                immediately after they pass scope and origin checks, but before
					 *                they are processed.
					 *   cfg.onReady - A function that will be invoked when a channel becomes "ready",
					 *                this occurs once both sides of the channel have been
					 *                instantiated and an application level handshake is exchanged.
					 *                the onReady function will be passed a single argument which is
					 *                the channel object that was returned from build().
					 *   cfg.reconnect - A boolean value - if true, the channel allows reconnection
					 *                useful when the page in a child frame is reloaded and wants
					 *                to re-establish connection with parent window using the same
					 *                origin, scope and bindings.
					 *   cfg.publish - A boolean value. If true, bind will automatically publish
					 *                the method on the remote side. The method will be published under
					 *                channelObject.remote, but it will not be available before the onReady
					 *                callback is called on the other side.
					 *   cfg.remote - An array of method names for which stubs should be generated without
					 *                waiting for remote end to publish them. A string (for a single method name)
					 *                is also accepted. This allows methods under channelObject.remote to be called
					 *                also before onReady callback is called; the invocations will be queued until
					 *                the channel is ready. If the methods do not exist on remote side, the
					 *                error callback will be called.
					 */
					return {
						build: function (cfg) {
							var debug = function (m) {
								if (cfg.debugOutput && window.console && window.console.log) {
									// try to stringify, if it doesn't work we'll let javascript's built in toString do its magic
									try {
										if (typeof m !== 'string') {
											m = JSON.stringify(m);
										}
									}
									catch (e) {
									}
									window.console.log("[" + chanId + "] " + m);
								}
							};

							/* browser capabilities check */
							if (!window.postMessage) throw ("jschannel cannot run this browser, no postMessage");
							if (!window.JSON || !window.JSON.stringify || !window.JSON.parse) {
								throw ("jschannel cannot run this browser, no JSON parsing/serialization");
							}

							/* basic argument validation */
							if (typeof cfg != 'object') throw ("Channel build invoked without a proper object argument");

							if (!cfg.window || !cfg.window.postMessage) throw ("Channel.build() called without a valid window argument");

							/* we'd have to do a little more work to be able to run multiple channels that intercommunicate the same
							 * window...  Not sure if we care to support that */
							if (window === cfg.window) debug("target window is same as present window -- use at your own risk");

							// let's require that the client specify an origin.  if we just assume '*' we'll be
							// propagating unsafe practices.  that would be lame.
							var validOrigin = false;
							if (typeof cfg.origin === 'string') {
								var oMatch;
								if (cfg.origin === "*") validOrigin = true;
								// allow valid domains under http and https.  Also, trim paths off otherwise valid origins.
								else if (null !== (oMatch = cfg.origin.match(/^https?:\/\/(?:[-a-zA-Z0-9_\.])+(?::\d+)?/))) {
									cfg.origin = oMatch[0].toLowerCase();
									validOrigin = true;
								}
							}

							if (!validOrigin) throw ("Channel.build() called with an invalid origin");

							if (typeof cfg.scope !== 'undefined') {
								if (typeof cfg.scope !== 'string') throw 'scope, when specified, must be a string';
								if (cfg.scope.split('::').length > 1) throw "scope may not contain double colons: '::'";
							} else {
								cfg.scope = "__default";
							}

							/* private variables */
							// generate a random and psuedo unique id for this channel
							var chanId = (function () {
								var text = "";
								var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
								for (var i = 0; i < 5; i++) text += alpha.charAt(Math.floor(Math.random() * alpha.length));
								return text;
							})();

							// registrations: mapping method names to call objects
							var regTbl = {};
							// current oustanding sent requests
							var outTbl = {};
							// current oustanding received requests
							var inTbl = {};
							// are we ready yet?  when false we will block outbound messages.
							var ready = false;
							var pendingQueue = [];
							var publishQueue = [];

							var createTransaction = function (id, origin, callbacks) {
								var shouldDelayReturn = false;
								var completed = false;

								return {
									origin: origin,
									invoke: function (cbName, v) {
										// verify in table
										if (!inTbl[id]) throw "attempting to invoke a callback of a nonexistent transaction: " + id;
										// verify that the callback name is valid
										var valid = false;
										for (var i = 0; i < callbacks.length; i++) if (cbName === callbacks[i]) { valid = true; break; }
										if (!valid) throw "request supports no such callback '" + cbName + "'";

										// send callback invocation
										postMessage({ id: id, callback: cbName, params: v });
									},
									error: function (error, message) {
										completed = true;
										// verify in table
										if (!inTbl[id]) throw "error called for nonexistent message: " + id;

										// remove transaction from table
										delete inTbl[id];

										// send error
										postMessage({ id: id, error: error, message: message });
									},
									complete: function (v) {
										completed = true;
										// verify in table
										if (!inTbl[id]) throw "complete called for nonexistent message: " + id;
										// remove transaction from table
										delete inTbl[id];
										// send complete
										postMessage({ id: id, result: v });
									},
									delayReturn: function (delay) {
										if (typeof delay === 'boolean') {
											shouldDelayReturn = (delay === true);
										}
										return shouldDelayReturn;
									},
									completed: function () {
										return completed;
									}
								};
							};

							var setTransactionTimeout = function (transId, timeout, method) {
								return window.setTimeout(function () {
									if (outTbl[transId]) {
										// XXX: what if client code raises an exception here?
										var msg = "timeout (" + timeout + "ms) exceeded on method '" + method + "'";
										if (outTbl[transId].error) {
											outTbl[transId].error("timeout_error", msg);
										}
										delete outTbl[transId];
										delete s_transIds[transId];
									}
								}, timeout);
							};

							var onMessage = function (origin, method, m) {
								// if an observer was specified at allocation time, invoke it
								if (typeof cfg.gotMessageObserver === 'function') {
									// pass observer a clone of the object so that our
									// manipulations are not visible (i.e. method unscoping).
									// This is not particularly efficient, but then we expect
									// that message observers are primarily for debugging anyway.
									try {
										cfg.gotMessageObserver(origin, m);
									} catch (e) {
										debug("gotMessageObserver() raised an exception: " + e.toString());
									}
								}

								// now, what type of message is this?
								if (m.id && method) {
									inTbl[m.id] = {};
									var trans = createTransaction(m.id, origin, m.callbacks ? m.callbacks : []);
									// a request!  do we have a registered handler for this request?
									if (regTbl[method]) {
										try {
											// callback handling.  we'll magically create functions inside the parameter list for each
											// callback
											if (m.callbacks && s_isArray(m.callbacks) && m.callbacks.length > 0) {
												for (var i = 0; i < m.callbacks.length; i++) {
													var path = m.callbacks[i];
													var obj = m.params;
													var pathItems = path.split('/');
													for (var j = 0; j < pathItems.length - 1; j++) {
														var cp = pathItems[j];
														if (typeof obj[cp] !== 'object') obj[cp] = {};
														obj = obj[cp];
													}
													obj[pathItems[pathItems.length - 1]] = (function () {
														var cbName = path;
														return function (params) {
															return trans.invoke(cbName, params);
														};
													})();
												}
											}
											var resp = regTbl[method](trans, m.params);
											if (!trans.delayReturn() && !trans.completed()) trans.complete(resp);
										} catch (e) {
											// automagic handling of exceptions:
											var error = "runtime_error";
											var message = null;
											// * if it's a string then it gets an error code of 'runtime_error' and string is the message
											if (typeof e === 'string') {
												message = e;
											} else if (typeof e === 'object') {
												// if it's an Error instance we use the constructor name to set the error property
												// and we just copy the error message
												if (e instanceof Error) {
													error = e.constructor.name;
													message = e.message;
												}
												// Otherwise, it's either an array or an object
												// * if it's an array of length two, then  array[0] is the code, array[1] is the error message
												else if (e && s_isArray(e) && e.length == 2) {
													error = e[0];
													message = e[1];
												}
												// * if it's an object then we'll look form error and message parameters
												else if (typeof e.error === 'string') {
													error = e.error;
													if (!e.message) message = "";
													else if (typeof e.message === 'string') message = e.message;
													else e = e.message; // let the stringify/toString message give us a reasonable verbose error string
												}
											}

											// message is *still* null, let's try harder
											if (message === null) {
												try {
													message = JSON.stringify(e);
													/* On MSIE8, this can result in 'out of memory', which
													 * leaves message undefined. */
													if (typeof (message) == 'undefined')
														message = e.toString();
												} catch (e2) {
													message = e.toString();
												}
											}

											trans.error(error, message);
										}
									} else { // if no method found, send error
										trans.error("method_not_found", "No method '" + method + "' was (yet) bound by the provider");
									}
								} else if (m.id && m.callback) {
									if (!outTbl[m.id] || !outTbl[m.id].callbacks || !outTbl[m.id].callbacks[m.callback]) {
										debug("ignoring invalid callback, id:" + m.id + " (" + m.callback + ")");
									} else {
										// XXX: what if client code raises an exception here?
										outTbl[m.id].callbacks[m.callback](m.params);
									}
								} else if (m.id) {
									if (!outTbl[m.id]) {
										debug("ignoring invalid response: " + m.id);
									} else {
										// XXX: what if client code raises an exception here?
										if (m.error) {
											// We might not have an error callback
											if (outTbl[m.id].error) {
												outTbl[m.id].error(m.error, m.message);
											}
										} else {
											// But we always have a success callback
											if (m.result !== undefined) {
												outTbl[m.id].success(m.result);
											} else {
												outTbl[m.id].success();
											}
										}
										delete outTbl[m.id];
										delete s_transIds[m.id];
									}
								} else if (method) {
									// tis a notification.
									if (regTbl[method]) {
										// yep, there's a handler for that.
										// transaction has only origin for notifications.
										regTbl[method]({ origin: origin }, m.params);
										// if the client throws, we'll just let it bubble out
										// what can we do?  Also, here we'll ignore return values
									}
								}
							};

							// now register our bound channel for msg routing
							s_addBoundChan(cfg.window, cfg.origin, cfg.scope, onMessage);

							// scope method names based on cfg.scope specified when the Channel was instantiated
							var scopeMethod = function (m) {
								return [cfg.scope, m].join("::");
							};

							// a small wrapper around postmessage whose primary function is to handle the
							// case that clients start sending messages before the other end is "ready"
							var postMessage = function (msg, force) {
								if (!msg) throw "postMessage called with null message";

								// delay posting if we're not ready yet.
								if (!force && !ready) {
									debug("queue message: " + JSON.stringify(msg));
									pendingQueue.push(msg);
								} else {
									if (typeof cfg.postMessageObserver === 'function') {
										try {
											cfg.postMessageObserver(cfg.origin, msg);
										} catch (e) {
											debug("postMessageObserver() raised an exception: " + e.toString());
										}
									}
									debug("post message: " + JSON.stringify(msg) + " with origin " + cfg.origin);
									cfg.window.postMessage(JSON.stringify(msg), cfg.origin);
								}
							};

							var onReady = function (trans, params) {
								debug('ready msg received');
								if (ready && !cfg.reconnect) {
									throw "received ready message while in ready state.";
								}
								ready = true;

								// only append suffix to chanId once:
								if (chanId.length < 6) {
									if (params.type === 'publish-request') {
										chanId += '-R';
									} else {
										chanId += '-L';
									}
								}
								debug('ready msg accepted.');

								if (params.type === 'publish-request') {
									obj.notify({
										method: '__ready', params: {
											type: 'publish-reply',
											publish: publishQueue
										}
									});
								}

								for (var i = 0; i < params.publish.length; i++) {
									if (params.publish[i].action === "bind") {
										createStubs([params.publish[i].method], obj.remote);
									} else { // unbind
										delete obj.remote[params.publish[i].method];
									}
								}

								//unbind ready handler unless we allow reconnecting:
								if (!cfg.reconnect) {
									obj.unbind('__ready', true); // now this handler isn't needed any more.
								}

								// flush queue
								while (pendingQueue.length) {
									postMessage(pendingQueue.splice(0, 1)[0]);
								}
								publishQueue = [];
								// invoke onReady observer if provided
								if (typeof cfg.onReady === 'function') cfg.onReady(obj);

							};

							var createStubs = function (stubList, targetObj) {
								stubList = [].concat(stubList); // Coerce into array, allows string to be used for single-item array
								var method;
								for (var i = 0; i < stubList.length; i++) {
									method = stubList[i].toString();
									targetObj[method] = function (m) {
										return function (params, success, error) {
											if (success) {
												obj.call({
													method: m,
													params: params,
													success: success,
													error: error
												});
											} else {
												obj.notify({
													method: m,
													params: params
												});
											}
										};
									}(method);
								}
							}

							// Dynamic publish from remote
							var onBind = function (trans, method) {
								createStubs([method], obj.remote);
							};

							// Dynamic unpublish from remote
							var onUnbind = function (trans, method) {
								if (obj.remote[method]) {
									delete obj.remote[method];
								}
							};

							var obj = {

								remote: {},

								// tries to unbind a bound message handler.  returns false if not possible
								unbind: function (method, doNotPublish) {
									if (regTbl[method]) {
										if (!(delete regTbl[method])) throw ("can't delete method: " + method);
										if (cfg.publish && !doNotPublish) {
											if (ready) {
												obj.notify({ method: '__unbind', params: method });
											} else {
												publishQueue.push({ action: 'unbind', method: method });
											}
										}
										return true;
									}
									return false;
								},
								bind: function (method, cb, doNotPublish) {
									if (!method || typeof method !== 'string') throw "'method' argument to bind must be string";
									if (!cb || typeof cb !== 'function') throw "callback missing from bind params";

									if (regTbl[method]) throw "method '" + method + "' is already bound!";
									regTbl[method] = cb;
									if (cfg.publish && !doNotPublish) {
										if (ready) {
											obj.notify({ method: '__bind', params: method });
										} else {
											publishQueue.push({ action: 'bind', method: method });
										}
									}
									return this;
								},
								call: function (m) {
									if (!m) throw 'missing arguments to call function';
									if (!m.method || typeof m.method !== 'string') throw "'method' argument to call must be string";
									if (!m.success || typeof m.success !== 'function') throw "'success' callback missing from call";

									// now it's time to support the 'callback' feature of jschannel.  We'll traverse the argument
									// object and pick out all of the functions that were passed as arguments.
									var callbacks = {};
									var callbackNames = [];
									var seen = [];

									var pruneFunctions = function (path, obj) {
										if (seen.indexOf(obj) >= 0) {
											throw "params cannot be a recursive data structure"
										}
										if (obj) {
											seen.push(obj);
										}

										if (typeof obj === 'object') {
											for (var k in obj) {
												if (!obj.hasOwnProperty(k)) continue;
												var np = path + (path.length ? '/' : '') + k;
												if (typeof obj[k] === 'function') {
													callbacks[np] = obj[k];
													callbackNames.push(np);
													delete obj[k];
												} else if (typeof obj[k] === 'object') {
													pruneFunctions(np, obj[k]);
												}
											}
										}
									};
									pruneFunctions("", m.params);

									// build a 'request' message and send it
									var msg = { id: s_curTranId, method: scopeMethod(m.method), params: m.params };
									if (callbackNames.length) msg.callbacks = callbackNames;

									if (m.timeout)
										// XXX: This function returns a timeout ID, but we don't do anything with it.
										// We might want to keep track of it so we can cancel it using clearTimeout()
										// when the transaction completes.
										setTransactionTimeout(s_curTranId, m.timeout, scopeMethod(m.method));

									// insert into the transaction table
									outTbl[s_curTranId] = { callbacks: callbacks, error: m.error, success: m.success };
									s_transIds[s_curTranId] = onMessage;

									// increment current id
									s_curTranId++;

									postMessage(msg);
								},
								notify: function (m) {
									if (!m) throw 'missing arguments to notify function';
									if (!m.method || typeof m.method !== 'string') throw "'method' argument to notify must be string";

									// no need to go into any transaction table
									postMessage({ method: scopeMethod(m.method), params: m.params });
								},
								destroy: function () {
									s_removeBoundChan(cfg.window, cfg.origin, cfg.scope);
									if (window.removeEventListener) window.removeEventListener('message', onMessage, false);
									else if (window.detachEvent) window.detachEvent('onmessage', onMessage);
									ready = false;
									regTbl = {};
									inTbl = {};
									outTbl = {};
									cfg.origin = null;
									pendingQueue = [];
									debug("channel destroyed");
									chanId = "";
								}
							};

							obj.bind('__ready', onReady, true);
							obj.bind('__bind', onBind, true);
							obj.bind('__unbind', onUnbind, true);
							if (cfg.remote) {
								createStubs(cfg.remote, obj.remote);
							}
							setTimeout(function () {
								if (chanId.length > 0) { // The channel might already have been destroyed
									postMessage({
										method: scopeMethod('__ready'), params: {
											type: "publish-request",
											publish: publishQueue
										}
									}, true);
								}

							}, 0);

							return obj;
						}
					};
				})();


				return Channel;
			}));


			/***/
}),
/* 38 */
/***/ (function (module, exports, __webpack_require__) {

			var $mod$6 = core.VW.Ecma2015.Utils.module(__webpack_require__(39));
			{
				var Module = function Module() {
					Module.$constructor ? Module.$constructor.apply(this, arguments) : Module.$superClass && Module.$superClass.apply(this, arguments);
				};
				Module.prototype = Object.create($mod$6.EventEmitter.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(Module, $mod$6.EventEmitter) : Module.__proto__ = $mod$6.EventEmitter;
				Module.prototype.constructor = Module;
				Module.$super = $mod$6.EventEmitter.prototype;
				Module.$superClass = $mod$6.EventEmitter;
				Object.defineProperty(Module, '$constructor', {
					enumerable: false,
					value: function (app) {
						this._app = app;
					}
				});
				Module.prototype.__defineGetter__('app', function () {
					if (this.aborted)
						throw new core.System.Exception('El módulo al que intenta acceder ha sido abortado.' + 'Para prevenir colisión de información entre módulos ya no puede seguir accediendo a él');
					return this._app;
				});
				Object.defineProperty(Module.prototype, 'abort', {
					enumerable: false,
					value: function () {
						this.aborted = true;
						this._app.deleteFromCache(this);
					}
				});
			}
			exports.default = Module;

			/***/
}),
/* 39 */
/***/ (function (module, exports) {

	/* WEBPACK VAR INJECTION */(function (global) {
				if (global.core && global.core.basic) {
					exports = module.exports = global.core.basic.get_events();
				}
				else {
					throw new Error("Debe cargar el archivo core.basic");
				}
				/* WEBPACK VAR INJECTION */
}.call(exports, (function () { return this; }())))

			/***/
}),
/* 40 */
/***/ (function (module, exports) {

			{
				var ObjectId = function ObjectId() {
					ObjectId.$constructor ? ObjectId.$constructor.apply(this, arguments) : ObjectId.$superClass && ObjectId.$superClass.apply(this, arguments);
				};
				Object.defineProperty(ObjectId, '$constructor', {
					enumerable: false,
					value: function (oid) {
						this.$oid = oid;
					}
				});
				Object.defineProperty(ObjectId.prototype, 'valueOf', {
					enumerable: false,
					value: function () {
						return this.$oid;
					}
				});
				Object.defineProperty(ObjectId.prototype, 'toString', {
					enumerable: false,
					value: function () {
						return this.$oid;
					}
				});
				Object.defineProperty(ObjectId.prototype, 'toJSON', {
					enumerable: false,
					value: function () {
						return this;
					}
				});
			}
			exports.default = ObjectId;

			/***/
}),
/* 41 */
/***/ (function (module, exports) {

			var v = core.org.voxsoftware.Util;
			{
				var Remote = function Remote() {
					Remote.$constructor ? Remote.$constructor.apply(this, arguments) : Remote.$superClass && Remote.$superClass.apply(this, arguments);
				};
				Remote.prototype = Object.create(v.Module.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(Remote, v.Module) : Remote.__proto__ = v.Module;
				Remote.prototype.constructor = Remote;
				Remote.$super = v.Module.prototype;
				Remote.$superClass = v.Module;
				Object.defineProperty(Remote.prototype, 'request', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(method, module, args) {
						var u, url, req, id, ee, data;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										u = this.app.uiUrl;
										if (u[u.length - 1] == '/')
											u = u.substring(0, u.length - 1);
										if (!u)
											u = location.origin;
										url = this.app.apiUrl + '/' + module + '?src-url=' + encodeURIComponent(u);
										if (method.toUpperCase() != 'GET') {
											req = new core.VW.Http.Request(url);
										}
										if (args && typeof args.submit == 'function') {
											if (method.toUpperCase() == 'GET')
												args = this.app.formArgs(args);
											else {
												req.form = args;
											}
										}
										if (args && typeof args.submit != 'function') {
											if (method.toUpperCase() == 'GET') {
												for (id in args) {
													url += '&' + this.encodeURIComponent(id, args[id]);
												}
											} else {
												req.contentType = 'application/json';
												req.body = args;
											}
										}
										if (method.toUpperCase() == 'GET')
											req = new core.VW.Http.Request(url);
										req.method = method;
										req.withCredentials = true;
										req.nowait = this._nowait;
										this._nowait = false;
										this.emit('request', req);
										context$1$0.prev = 13;
										context$1$0.next = 16;
										return regeneratorRuntime.awrap(core.VW.Web.Vox.platform.getJsonResponseAsync(req));
									case 16:
										data = context$1$0.sent;
										this.procesar(data);
										context$1$0.next = 23;
										break;
									case 20:
										context$1$0.prev = 20;
										context$1$0.t0 = context$1$0['catch'](13);
										ee = context$1$0.t0;
									case 23:
										this.emit('request:complete', req);
										if (!ee) {
											context$1$0.next = 26;
											break;
										}
										throw ee;
									case 26:
										return context$1$0.abrupt('return', data);
									case 27:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							13,
							20
						]]);
					})
				});
				Object.defineProperty(Remote.prototype, 'encodeURIComponent', {
					enumerable: false,
					value: function (id, arg) {
						var str = '';
						if (arg instanceof Array) {
							for (var i = 0; i < arg.length; i++) {
								if (i > 0)
									str += '&';
								str += this.encodeURIComponent(id + '[]', arg[i]);
							}
						} else {
							str = id + '=' + encodeURIComponent(arg);
						}
						return str;
					}
				});
				Object.defineProperty(Remote.prototype, 'procesar', {
					enumerable: false,
					value: function (data) {
						var l, d;
						if (typeof data == 'string') {
							l = data.split(' ');
							if (l.length == 2) {
								d = l[0].split('-');
								if (d.length == 3) {
									d = l[1].split(':');
									if (d.length == 3) {
										if (data == '0000-00-00 00:00:00') {
											data = undefined;
										} else {
											d = new v.Datetime(core.VW.Moment(data + 'Z'));
											if (d.isValid())
												data = d;
										}
									}
								}
							}
						} else if (typeof data == 'object') {
							if (data && data.$oid) {
								return new v.ObjectId(data.$oid);
							}
							for (var id in data) {
								data[id] = this.procesar(data[id]);
							}
							if (data instanceof Array) {
								for (var y = 0; y < data.length; y++) {
									data[y] = this.procesar(data[y]);
								}
							}
						}
						return data;
					}
				});
				Remote.prototype.__defineGetter__('nowait', function () {
					this._nowait = true;
					return this;
				});
				Object.defineProperty(Remote.prototype, 'get', {
					enumerable: false,
					value: function (module, args) {
						return this.request('GET', module, args);
					}
				});
				Object.defineProperty(Remote.prototype, 'post', {
					enumerable: false,
					value: function (module, args) {
						return this.request('POST', module, args);
					}
				});
				Object.defineProperty(Remote.prototype, 'put', {
					enumerable: false,
					value: function (module, args) {
						return this.request('PUT', module, args);
					}
				});
				Object.defineProperty(Remote.prototype, 'patch', {
					enumerable: false,
					value: function (module, args) {
						return this.request('PATCH', module, args);
					}
				});
				Object.defineProperty(Remote.prototype, 'delete', {
					enumerable: false,
					value: function (module, args) {
						return this.request('DELETE', module, args);
					}
				});
			}
			exports.default = Remote;

			/***/
}),
/* 42 */
/***/ (function (module, exports) {

			var exe = function (code) {
				eval(code);
			};
			{
				var Route = function Route() {
					Route.$constructor ? Route.$constructor.apply(this, arguments) : Route.$superClass && Route.$superClass.apply(this, arguments);
				};
				Object.defineProperty(Route.prototype, 'tryAnalize', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(defaultRoute) {
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										context$1$0.prev = 0;
										context$1$0.next = 3;
										return regeneratorRuntime.awrap(this.analize(defaultRoute));
									case 3:
										context$1$0.next = 8;
										break;
									case 5:
										context$1$0.prev = 5;
										context$1$0.t0 = context$1$0['catch'](0);
										console.error('Error al analizar la ruta: ', context$1$0.t0);
									case 8:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this, [[
							0,
							5
						]]);
					})
				});
				Object.defineProperty(Route.prototype, 'analize', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(defaultRoute) {
						var search, items, item, par, object, i, keys, route;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										search = location.search.substring(1);
										items = search.split('&');
										object = {};
										for (i = 0; i < items.length; i++) {
											item = items[i];
											par = item.split('=');
											object[par[0]] = par[1];
										}
										keys = Object.keys(object);
										route = keys[0];
										if (!route && defaultRoute)
											route = defaultRoute;
										if (!route) {
											context$1$0.next = 10;
											break;
										}
										context$1$0.next = 10;
										return regeneratorRuntime.awrap(this.to(route + '.html'));
									case 10:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(Route.prototype, 'to', {
					enumerable: false,
					value: (typeof regeneratorRuntime != 'object' ? core.VW.Ecma2015.Parser : undefined, function callee$0$0(view) {
						var req, res;
						return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
							while (1)
								switch (context$1$0.prev = context$1$0.next) {
									case 0:
										req = new core.VW.Http.Request(view);
										req.async = true;
										context$1$0.next = 4;
										return regeneratorRuntime.awrap(req.getResponseAsync());
									case 4:
										res = context$1$0.sent;
										this.processHtml(res.body);
									case 6:
									case 'end':
										return context$1$0.stop();
								}
						}, null, this);
					})
				});
				Object.defineProperty(Route.prototype, 'processHtml', {
					enumerable: false,
					value: function (html) {
						var contenido = html.replace(/(\<html\s+|\<\/html\>|\<head\s+|\<\/head\>|\<body\s+|\<\/body\>)/ig, function (v) {
							v = v.toLowerCase();
							if (v.indexOf('html') >= 0)
								return v.replace('html', 'vhtml');
							if (v.indexOf('head') >= 0)
								return v.replace('head', 'vhead');
							if (v.indexOf('body') >= 0)
								return v.replace('body', 'vbody');
						});
						var jq = $(contenido);
						var body = jq.find('vbody>*');
						window.pe = body;
						for (var i = 0; i < body.length; i++) {
							$('body').append(body.eq(i));
						}
						document.head.innerHTML = jq.find('vhead').html();
						var scripts = $('script');
						scripts.each(function () {
							var s = $(this);
							var code = s.html();
							if (code)
								exe(code);
						});
					}
				});
			}
			exports.default = Route;

			/***/
}),
/* 43 */
/***/ (function (module, exports) {

			{
				var Utilidades = function Utilidades() {
					Utilidades.$constructor ? Utilidades.$constructor.apply(this, arguments) : Utilidades.$superClass && Utilidades.$superClass.apply(this, arguments);
				};
				Object.defineProperty(Utilidades, 'padl', {
					enumerable: false,
					value: function (str, size, char) {
						str = str.toString();
						var len = size - str.length;
						var c = '';
						while (len > 0) {
							c += char;
							len--;
						}
						return c + str;
					}
				});
			}
			exports.default = Utilidades;

			/***/
}),
/* 44 */
/***/ (function (module, exports) {

			var U = core.org.voxsoftware.Util;
			var G = core.org.voxsoftware.VideoMark;
			var v = U;
			{
				var Validation = function Validation() {
					Validation.$constructor ? Validation.$constructor.apply(this, arguments) : Validation.$superClass && Validation.$superClass.apply(this, arguments);
				};
				Object.defineProperty(Validation, '$constructor', {
					enumerable: false,
					value: function (args) {
						this.rules = {};
						this.getRules(args);
					}
				});
				Object.defineProperty(Validation.prototype, 'getRules', {
					enumerable: false,
					value: function (args) {
						var arg, f;
						for (var id in args) {
							arg = args[id];
							this.rules[id] = arg;
						}
					}
				});
				Object.defineProperty(Validation.prototype, 'getFunction', {
					enumerable: false,
					value: function (rule) {
						if (typeof rule.func == 'function')
							return rule.func;
						if (typeof rule == 'function')
							return rule;
						return Validation[rule.func || rule];
					}
				});
				Object.defineProperty(Validation.prototype, 'validate', {
					enumerable: false,
					value: function (args) {
						var f, g;
						for (var id in this.rules) {
							f = this.rules[id];
							g = this.getFunction(f);
							if (f) {
								args[id] = g(id, args[id], f);
							}
						}
						return args;
					}
				});
				Object.defineProperty(Validation, '!empty', {
					enumerable: false,
					value: function (id, value, rule) {
						if (!value)
							throw new v.ValidationException((rule.name || id) + ' no puede estar vacío', id);
						return value;
					}
				});
				Object.defineProperty(Validation, 'hour', {
					enumerable: false,
					value: function (id, value, rule) {
						var h = core.VW.Moment('01/01/2000 ' + value, 'DD/MM/YYYY HH:mm');
						if (!h.isValid())
							throw new v.ValidationException((rule.name || id) + ' debe ser hora', id);
						return value;
					}
				});
				Object.defineProperty(Validation, 'dateDMY', {
					enumerable: false,
					value: function (id, value, rule) {
						if (rule && rule.optional && !value)
							return value;
						var h = core.VW.Moment(value, 'DD/MM/YYYY HH:mm');
						if (!h.isValid())
							throw new v.ValidationException((rule.name || id) + ' debe ser fecha', id);
						return h.toDate();
					}
				});
				Object.defineProperty(Validation, 'date', {
					enumerable: false,
					value: function (id, value, rule) {
						if (rule && rule.optional && !value)
							return value;
						var d = new Date(value);
						if (isNaN(d.getTime()))
							throw new v.ValidationException((rule.name || id) + ' debe ser una fecha', id);
						return value;
					}
				});
				Object.defineProperty(Validation, 'email', {
					enumerable: false,
					value: function (id, value, rule) {
						if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value))
							throw new v.ValidationException((rule.name || id) + ' debe ser una dirección de correo válida', id);
						return value;
					}
				});
				Object.defineProperty(Validation, 'password', {
					enumerable: false,
					value: function (id, value, rule) {
						if (!value || value.length < 6)
							throw new v.ValidationException((rule.name || id) + ' debe ser de al menos 6 caracteres');
						return value;
					}
				});
				Object.defineProperty(Validation, 'number', {
					enumerable: false,
					value: function (id, value, rule) {
						value = parseInt(value);
						if (isNaN(value))
							throw new v.ValidationException((rule.name || id) + ' debe ser un número');
						return value;
					}
				});
			}
			exports.default = Validation;

			/***/
}),
/* 45 */
/***/ (function (module, exports) {

			{
				var ValidationException = function ValidationException() {
					ValidationException.$constructor ? ValidationException.$constructor.apply(this, arguments) : ValidationException.$superClass && ValidationException.$superClass.apply(this, arguments);
				};
				ValidationException.prototype = Object.create(core.System.Exception.prototype);
				Object.setPrototypeOf ? Object.setPrototypeOf(ValidationException, core.System.Exception) : ValidationException.__proto__ = core.System.Exception;
				ValidationException.prototype.constructor = ValidationException;
				ValidationException.$super = core.System.Exception.prototype;
				ValidationException.$superClass = core.System.Exception;
				Object.defineProperty(ValidationException, '$constructor', {
					enumerable: false,
					value: function (message, field, innerException) {
						this.field = field;
						ValidationException.$superClass.call(this, message, innerException);
					}
				});
			}
			exports.default = ValidationException;

			/***/
})
/******/])
});
;
