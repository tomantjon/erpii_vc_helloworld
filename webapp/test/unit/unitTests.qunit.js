/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hogent/helloworldvclocal/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
