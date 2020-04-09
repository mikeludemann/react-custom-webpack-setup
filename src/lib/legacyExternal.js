var legacyExternal = legacyExternal || {};

(function () {
	legacyExternal.pageLoadTime = new Date();
	legacyExternal.authorize = function () {
		console.log("Authorize function invoked.")
	}
})();
